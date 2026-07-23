import { useState, useEffect } from "react";
import axios from "axios";
import "./BookingForm.css";

const API = import.meta.env.VITE_API_BASE_URL;

export default function Booking() {
 const [form, setForm] = useState({
  patient_name: "",
  email: "",
  phone: "",
  gender: "",
  address: "",
});

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);


  // const calculateAge = (dob) => {
  //   const birthDate = new Date(dob);
  //   const today = new Date();

  //   let years = today.getFullYear() - birthDate.getFullYear();
  //   let months = today.getMonth() - birthDate.getMonth();

  //   if (months < 0) {
  //     years--;
  //     months += 12;
  //   }

  //   return `${years}Y ${months}M`;
  // };

 const handleChange = (e) => {
  const { name, value } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  //   if (name === "dob") {
  //     const age = calculateAge(value);
  //     setForm({ ...form, dob: value, age });
  //   } else {
  //     setForm({ ...form, [name]: value });
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(form.phone)) {
      alert("Phone must be 10 digits");
      return;
    }

    if (!form.gender) {
      alert("Please select your gender");
      return;
    }

    setShowSuccess(false);
    setLoading(true);

    try {
      // ✅ BOOK APPOINTMENT
  await axios.post(`${API}/api/book-appointment`, {
  patient_name: form.patient_name,
  email: form.email || null,
  phone: form.phone,
  gender: form.gender,
  address: form.address || null,
});

      // ✅ INSTANT SUCCESS (no delay)
      setShowSuccess(true);
      setLoading(false);

      // ✅ CLEAR FORM
      const savedData = {
        patient_name: form.patient_name,
        phone: form.phone,
        email: form.email,
        gender: form.gender,
      };

      localStorage.setItem("cuure_user", JSON.stringify(savedData));

      setForm({
  patient_name: "",
  email: "",
  phone: "",
  gender: "",
  address: "",
});

    } catch (err) {
  setLoading(false);

  console.error("FULL ERROR:", err);

  if (err.response) {
    console.log("Status:", err.response.status);
    console.log("Response:", err.response.data);
    alert(JSON.stringify(err.response.data, null, 2));
  } else {
    console.log("Message:", err.message);
    alert(err.message);
  }
}
  };

  useEffect(() => {
    const saved = localStorage.getItem("cuure_user");

    if (saved) {
      const data = JSON.parse(saved);

      setForm(prev => ({
        ...prev,
        patient_name: data.patient_name || "",
        phone: data.phone || "",
        email: data.email || "",
        gender: data.gender || ""
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
            {/* {success && (
              <p style={{ color: "green", fontWeight: "bold" }}>
                ✅ Appointment Booked Successfully!
              </p>
            )} */}

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
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="appt-field">
                  <label>Gender *</label>
                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>

                {/* <input type="hidden" value={form.age} /> */}


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
                {loading ? "Processing..." : "Confirm Appointment →"}
              </button>

            </form>
            {showSuccess && (
  <div className="success-overlay">
    <div className="success-card">

      <div className="success-icon">
        ✓
      </div>

      <h2>Appointment Confirmed</h2>

      <p>
        Thank you for choosing <strong>Cuure Health</strong>.
      </p>

      <p>
        Our coordinator will contact you within
        <strong> 15 minutes</strong> to confirm your appointment.
      </p>

      <button
        className="success-btn"
        onClick={() => setShowSuccess(false)}
      >
        Close
      </button>

    </div>
  </div>
)}
          </div>

        </div>
      </div>
    </section>
  );
}