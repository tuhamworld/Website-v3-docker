import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminApi } from '../../../services/adminApi';
import './index.scss';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (adminApi.validateAdminPassword(password)) {
        // Store auth token in localStorage
        localStorage.setItem('adminAuth', 'true');
        localStorage.setItem('adminLoginTime', new Date().getTime());
        navigate('/admin/dashboard');
      } else {
        setError('Invalid password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    localStorage.removeItem('adminLoginTime');
    setPassword('');
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <h1>Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="password">Admin Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              disabled={loading}
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" disabled={loading} className="login-button">
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="info-text">
         This is a simple admin login page.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
