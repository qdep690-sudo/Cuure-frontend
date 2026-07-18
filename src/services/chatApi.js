import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export const sendChatMessage = async (messages, conversationState = {}) => {
  const response = await axios.post(`${API_BASE_URL}/api/chat`, { messages, conversationState });
  return response.data;
};

export const bookAppointment = async (bookingDetails) => {
  const response = await axios.post(`${API_BASE_URL}/api/book-appointment`, bookingDetails);
  return response.data;
};

export const uploadReport = async (file, onProgress) => {
  const formData = new FormData();
  formData.append('report', file);

  const response = await axios.post(`${API_BASE_URL}/api/upload-report`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
    onUploadProgress: (progressEvent) => {
      if (onProgress && progressEvent.total) {
        const pct = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        onProgress(pct);
      }
    }
  });
  return response.data;
};
