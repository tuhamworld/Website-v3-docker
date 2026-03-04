import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminMessages from '../AdminMessages';
import './index.scss';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('messages');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('adminAuth');
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    localStorage.removeItem('adminLoginTime');
    navigate('/admin/login');
  };
console.log('API base:', import.meta.env.VITE_API_URL);
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
