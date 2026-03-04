import { useState, useEffect } from 'react';
import { adminApi } from '../../../services/adminApi';
import './index.scss';

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await adminApi.getMessages();
      setMessages(data);
    } catch (err) {
      setError('Failed to load messages. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const filteredMessages = messages.filter((msg) => {
    const term = searchTerm.toLowerCase();
    return (
      msg.name.toLowerCase().includes(term) ||
      msg.email.toLowerCase().includes(term) ||
      msg.message.toLowerCase().includes(term)
    );
  });

  if (loading) {
    return (
      <div className="admin-messages">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-messages">
      <div className="messages-header">
        <h2>Contact Form Messages</h2>
        <div className="header-actions">
          <span className="message-count">{filteredMessages.length} message(s)</span>
          <button onClick={fetchMessages} className="refresh-button" disabled={loading}>
            🔄 Refresh
          </button>
        </div>
      </div>

      {error && <div className="error-banner">{error}</div>}

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name, email, or message..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredMessages.length === 0 ? (
        <div className="empty-state">
          <p>No messages found</p>
        </div>
      ) : (
        <div className="messages-container">
          <div className="messages-list">
            {filteredMessages.map((message) => (
              <div
                key={message.id}
                className={`message-item ${selectedMessage?.id === message.id ? 'selected' : ''}`}
                onClick={() => setSelectedMessage(message)}
              >
                <div className="message-summary">
                  <div className="sender-info">
                    <h3>{message.name}</h3>
                    <p className="email">{message.email}</p>
                  </div>
                  <div className="message-preview">{message.message.substring(0, 60)}...</div>
                  <div className="message-date">{formatDate(message.created_at)}</div>
                </div>
              </div>
            ))}
          </div>

          {selectedMessage && (
            <div className="message-detail">
              <div className="detail-header">
                <h3>Message Details</h3>
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="close-button"
                >
                  ✕
                </button>
              </div>
              <div className="detail-content">
                <div className="detail-field">
                  <label>From:</label>
                  <p>{selectedMessage.name}</p>
                </div>
                <div className="detail-field">
                  <label>Email:</label>
                  <a href={`mailto:${selectedMessage.email}`}>{selectedMessage.email}</a>
                </div>
                <div className="detail-field">
                  <label>Date:</label>
                  <p>{formatDate(selectedMessage.created_at)}</p>
                </div>
                <div className="detail-field">
                  <label>Message:</label>
                  <p className="message-text">{selectedMessage.message}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminMessages;
