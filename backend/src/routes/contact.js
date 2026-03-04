const express = require('express');
const pool = require('../db');

const router = express.Router();

router.get('/health', (req, res) => {
  res.json({ status: 'Server running' });
});

router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'name, email and message are required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: 'invalid email address' });
  }

  try {
    const query = 'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING id, created_at';
    const values = [name.trim(), email.trim(), message.trim()];
    const result = await pool.query(query, values);
    return res.status(201).json({ success: true, data: result.rows[0] });
  } catch (err) {
    console.error('POST /api/contact error:', err);
    return res.status(500).json({ success: false, error: 'internal server error' });
  }
});

router.get('/messages', async (req, res) => {
  try {
    const query = 'SELECT id, name, email, message, created_at FROM contacts ORDER BY created_at DESC';
    const result = await pool.query(query);
    return res.json({ success: true, data: result.rows });
  } catch (err) {
    console.error('GET /api/messages error:', err);
    return res.status(500).json({ success: false, error: 'internal server error' });
  }
});

module.exports = router;
