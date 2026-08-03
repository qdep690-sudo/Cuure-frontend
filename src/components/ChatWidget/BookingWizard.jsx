import React, { useState } from "react";
import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const BookingWizard = ({ preFilledReason, onBookingComplete }) => {
  const [formData, setFormData] = useState({
    patient_name: "",
    phone: "",
    email: "",
    gender: "",
    address: preFilledReason || "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error while typing
    setError(null);
  };

  const handleSubmit = async () => {
    setError(null);

    // Rate Limiting Logic
    const limit = parseInt(import.meta.env.VITE_MAX_BOOKINGS_PER_MINUTE || "3", 10);
    const now = Date.now();
    let bookingAttempts = JSON.parse(localStorage.getItem('booking_attempts') || '[]');
    // Keep only attempts from the last 60 seconds
    bookingAttempts = bookingAttempts.filter(timestamp => now - timestamp < 60000);

    if (bookingAttempts.length >= limit) {
      setError("Booking limit reached. Please try again in a minute.");
      return;
    }

    // Full Name Validation
    if (!formData.patient_name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    // Phone Validation
    if (!/^\d{10}$/.test(formData.phone)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Gender Validation
    if (!formData.gender) {
      setError("Please select your gender.");
      return;
    }

    // Record the booking attempt
    bookingAttempts.push(now);
    localStorage.setItem('booking_attempts', JSON.stringify(bookingAttempts));

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/chatbot-appointment`,
        {
          patient_name: formData.patient_name,
          phone: formData.phone,
          email: formData.email || undefined,
          gender: formData.gender,
          address: formData.address || undefined,
        }
      );

      if (response.data.success) {
        onBookingComplete();
      } else {
        setError(response.data.message || "Booking failed. Please try again.");
      }
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Failed to process your appointment. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="booking-wizard">
      <h4>Personal Details</h4>

      {/* Full Name */}
      <input
        name="patient_name"
        placeholder="Full Name *"
        value={formData.patient_name}
        onChange={handleChange}
      />

      {/* Phone */}
      <input
        name="phone"
        type="tel"
        placeholder="Phone (10 digits) *"
        value={formData.phone}
        onChange={(e) => {
          const value = e.target.value.replace(/\D/g, "").slice(0, 10);

          setFormData((prev) => ({
            ...prev,
            phone: value,
          }));

          setError(null);
        }}
        maxLength={10}
      />

      {formData.phone.length > 0 && formData.phone.length < 10 && (
        <p className="error-text">
          Please enter a valid 10-digit mobile number.
        </p>
      )}

      {/* Email */}
      <input
        name="email"
        type="email"
        placeholder="Email (optional)"
        value={formData.email}
        onChange={handleChange}
      />

      {/* Gender */}
      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
      >
        <option value="">Select Gender *</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      {/* Address */}
      <textarea
        name="address"
        placeholder="Address / Reason (optional)"
        value={formData.address}
        onChange={handleChange}
        rows={3}
      />

      {/* Error */}
      {error && <p className="error-text">{error}</p>}

      {/* Button */}
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Booking..." : "Confirm Appointment →"}
      </button>
    </div>
  );
};

export default BookingWizard;