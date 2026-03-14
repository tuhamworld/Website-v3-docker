import React from "react";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";
import "./index.scss";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });
    try {
      // Use relative path - Nginx will proxy to backend
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Network response was not ok');
      setFormData({ name: '', email: '', message: '' });
      setStatus({ loading: false, success: true, error: '' });
    } catch (err) {
      console.error('contact submit error', err);
      setStatus({ loading: false, success: false, error: 'Submission failed' });
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="contact__option-children">
              <MdOutlineEmail className="contact__option-icon" />
              <MdOutlinePhone className="contact__option-icon" />
              <AiOutlineGithub className="contact__option-icon" />
            </div>

            <div className="contact__option-children">
              <h5>hello(@)tuhamworld.com</h5>
              <h5>
                <a href="tel:2347030783384">(+234) 703 078 3384</a>
              </h5>
              <h5>@tuhamworld</h5>
            </div>
          </article>
        </div>

        <div className="contact__section">
          <form className="contact__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary" disabled={status.loading}>
            {status.loading ? 'Sending...' : 'Send Message'}
          </button>
          {status.success && <p className="success">Message sent successfully!</p>}
          {status.error && <p className="error">{status.error}</p>}
        </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
