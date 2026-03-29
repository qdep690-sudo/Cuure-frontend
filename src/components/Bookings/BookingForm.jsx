import { useState, useEffect } from "react";
import axios from "axios";
import "./BookingForm.css";

const API = "https://cuure-production-be37.up.railway.app";

export default function Booking() {
  const [form, setForm] = useState({
    patient_name: "",
    dob: "",
    age: "",
    email: "",
    phone: "",
    date: "",
    time_value: "",
    doctor_name: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [bookedSlots, setBookedSlots] = useState([]);

  const doctors = ["Dr. Sharma", "Dr. Kumar", "Dr. Priya", "Dr. Ramesh"];

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  ];

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years}Y ${months}M`;
  };

  const fetchBookedSlots = async (doctor, date) => {
    if (!doctor || !date) return;

    try {
      const res = await axios.get(`${API}/api/booked-slots`, {
        params: { doctor_name: doctor, date },
      });

      if (res.data.success) {
        setBookedSlots(res.data.data);
      }
    } catch (err) {
      console.error("Failed to fetch slots");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "dob") {
      const age = calculateAge(value);
      setForm({ ...form, dob: value, age });
    } else {
      const newForm = { ...form, [name]: value };
      setForm(newForm);

      if (name === "doctor_name" || name === "date") {
        fetchBookedSlots(
          name === "doctor_name" ? value : newForm.doctor_name,
          name === "date" ? value : newForm.date
        );
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(form.phone)) {
      alert("Phone must be 10 digits");
      return;
    }

    setSuccess(false);
    setLoading(true);

    try {
      // ✅ BOOK APPOINTMENT
      await axios.post(`${API}/api/book-appointment`, {
        patient_name: form.patient_name,
        age: form.age,
        email: form.email,
        phone: form.phone,
        date: form.date,
        time_value: form.time_value,
        doctor_name: form.doctor_name,
        address: form.address,
      });

      // ✅ INSTANT SUCCESS (no delay)
      setSuccess(true);
      setLoading(false);

      // ✅ CLEAR FORM
      const savedData = {
        patient_name: form.patient_name,
        phone: form.phone,
        email: form.email
      };

      localStorage.setItem("cuure_user", JSON.stringify(savedData));

      setForm({
        patient_name: "",
        dob: "",
        age: "",
        email: "",
        phone: "",
        date: "",
        time_value: "",
        doctor_name: "",
        address: "",
      });

      // // ✅ SEND MAIL IN BACKGROUND (NO WAIT)
      // axios.post(`${API}/api/send-mail`, {
      //   email: savedData.email,
      //   patient_name: savedData.patient_name,
      //   date: form.date,
      //   time: form.time_value,
      //   doctor: form.doctor_name,
      // });

    } catch (err) {
      setLoading(false);
      alert("❌ Booking Failed");
      console.error(err);
    }
  };

  const getAvailableTimeSlots = () => {
    const now = new Date();

    return timeSlots.filter(slot => {
      if (form.date !== now.toISOString().split("T")[0]) {
        return true;
      }

      const [time, modifier] = slot.split(" ");
      let [hours, minutes] = time.split(":").map(Number);

      if (modifier === "PM" && hours !== 12) hours += 12;
      if (modifier === "AM" && hours === 12) hours = 0;

      const slotTime = new Date();
      slotTime.setHours(hours, minutes, 0);

      return slotTime > now;
    });
  };

  useEffect(() => {
    const saved = localStorage.getItem("cuure_user");

    if (saved) {
      const data = JSON.parse(saved);

      setForm(prev => ({
        ...prev,
        patient_name: data.patient_name || "",
        phone: data.phone || "",
        email: data.email || ""
      }));
    }
  }, []);

  return (
    <section id="booking">

      <div className="appt-body">
        <div className="appt-container">

          <div className="appt-form-card">
            <h2>Book Your Consultation</h2>
            <p className="appt-subtitle">
              Fill in your details and we'll confirm your appointment within 15 minutes.
            </p>

            {/* ✅ SUCCESS MESSAGE */}
            {success && (
              <p style={{ color: "green", fontWeight: "bold" }}>
                ✅ Appointment Booked Successfully!
              </p>
            )}

            <form onSubmit={handleSubmit}>
              <div className="appt-grid">

                <div className="appt-field">
                  <label>Full Name *</label>
                  <input
                    name="patient_name"
                    value={form.patient_name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="appt-field">
                  <label>Phone *</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    onInput={(e) => {
                      let value = e.target.value.replace(/\D/g, "");
                      if (value.length > 10) {
                        value = value.slice(0, 10);
                      }
                      e.target.value = value;
                    }}
                    placeholder="Phone (10 digits)"
                    required
                  />
                </div>

                <div className="appt-field">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    pattern=".+@gmail\.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <input type="hidden" value={form.age} />

                <div className="appt-field">
                  <label>Doctor *</label>
                  <select
                    name="doctor_name"
                    value={form.doctor_name}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Doctor</option>
                    {doctors.map((doc, i) => (
                      <option key={i} value={doc}>{doc}</option>
                    ))}
                  </select>
                </div>

                <div className="appt-field">
                  <label>Date *</label>
                  <input
                    type="date"
                    name="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={form.date}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="appt-field full">
                  <label>Time *</label>
                  <select
                    name="time_value"
                    value={form.time_value}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Time</option>
                    {getAvailableTimeSlots()
                      .filter(slot => !bookedSlots.includes(slot))
                      .map((slot, i) => (
                        <option key={i} value={slot}>{slot}</option>
                      ))}
                  </select>
                </div>

                <div className="appt-field full">
                  <label>Address</label>
                  <textarea
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                  />
                </div>

              </div>

              <button type="submit" className="appt-submit" disabled={loading}>
                {loading ? "Processing..." : success ? "Booked ✅" : "Confirm Appointment →"}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}