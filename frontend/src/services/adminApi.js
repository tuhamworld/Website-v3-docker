// Use relative path - Nginx will proxy to backend
const API_BASE_URL = '/api';

export const adminApi = {
  // Fetch all contact messages from the backend.
  // Make sure VITE_API_URL is set (default http://localhost:3000/api), and that
  // the backend server is running and accessible at that address.
  getMessages: async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_BASE_URL}/messages`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
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

  // Login with admin password
  login: async (password) => {
    try {
      console.log('Attempting login to /api/admin/login');
      const response = await fetch(`${API_BASE_URL}/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      console.log('Login response status:', response.status);
      const data = await response.json();
      console.log('Login response data:', data);

      if (data.success) {
        // Store the token
        localStorage.setItem('adminToken', data.token);
        localStorage.setItem('adminLoginTime', new Date().getTime());
        return { success: true };
      } else {
        return { success: false, error: data.error };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Network error' };
    }
  },

  // Verify admin token
  verifyToken: async () => {
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) return { valid: false };

      const response = await fetch(`${API_BASE_URL}/admin/verify`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      return { valid: data.success && data.valid };
    } catch (error) {
      console.error('Token verification error:', error);
      return { valid: false };
    }
  },

  // Logout
  logout: () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminLoginTime');
  },

  // Legacy method for backward compatibility (deprecated)
  validateAdminPassword: (password) => {
    console.warn('validateAdminPassword is deprecated. Use login() instead.');
    return false; // Always return false to force using new method
  },
};
