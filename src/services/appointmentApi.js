import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export const bookAppointment = async (bookingDetails) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/book-appointment`, bookingDetails);
    return response.data;
  } catch (error) {
    console.error("Error booking appointment:", error);
    throw error;
  }
};
