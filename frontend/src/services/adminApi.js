const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const adminApi = {
  // Fetch all contact messages from the backend.  
  // Make sure VITE_API_URL is set (default http://localhost:3000/api), and that
  // the backend server is running and accessible at that address.
  getMessages: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/messages`);
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error('Error fetching messages:', error);
      throw error;
    }
  },

  // Validate admin password
  validateAdminPassword: (password) => {
    // Simple password validation (for production, use proper authentication)
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';
    return password === adminPassword;
  },
};
