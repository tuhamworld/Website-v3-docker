import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminApi } from '../../../services/adminApi';
import AdminMessages from '../AdminMessages';
import './index.scss';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('messages');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has a valid admin token
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    adminApi.logout();
    navigate('/admin/login');
  };
  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="header-content">
          <h1>Admin Dashboard</h1>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </header>

      <div className="admin-container">
        <nav className="admin-sidebar">
          <div className="nav-items">
            <button
              className={`nav-link ${activeTab === 'messages' ? 'active' : ''}`}
              onClick={() => setActiveTab('messages')}
            >
              <span className="nav-icon">📧</span>
              <span>Messages</span>
            </button>
          </div>
        </nav>

        <main className="admin-content">
          {activeTab === 'messages' && <AdminMessages />}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
