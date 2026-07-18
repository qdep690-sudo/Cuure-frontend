import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const BookingWizard = ({ preFilledReason, onBookingComplete }) => {
  const [formData, setFormData] = useState({
    patient_name: '',
    phone: '',
    email: '',
    gender: '',
    address: preFilledReason || ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/chatbot-appointment`, {
        patient_name: formData.patient_name,
        phone: formData.phone,
        email: formData.email || undefined,
        gender: formData.gender,
        address: formData.address || undefined
      });

      if (response.data.success) {
        onBookingComplete();
      } else {
        setError(response.data.message || 'Booking failed. Please try again.');
      }
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to process. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.patient_name.trim() &&
    formData.phone.replace(/\D/g, '').length === 10 &&
    formData.gender;

  return (
    <div className="booking-wizard">
      <h4>Personal Details</h4>

      <input
        name="patient_name"
        placeholder="Full Name *"
        value={formData.patient_name}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone (10 digits) *"
        value={formData.phone}
        onChange={handleChange}
        maxLength={10}
        type="tel"
      />

      <input
        name="email"
        type="email"
        placeholder="Email (optional)"
        value={formData.email}
        onChange={handleChange}
      />

      <select name="gender" value={formData.gender} onChange={handleChange}>
        <option value="">Select Gender *</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <textarea
        name="address"
        placeholder="Address / Reason (optional)"
        value={formData.address}
        onChange={handleChange}
        rows={3}
      />

      {error && <p className="error-text">{error}</p>}

      <button
        onClick={handleSubmit}
        disabled={!isFormValid || isSubmitting}
      >
        {isSubmitting ? 'Booking...' : 'Confirm Appointment →'}
      </button>
    </div>
  );
};

export default BookingWizard;
