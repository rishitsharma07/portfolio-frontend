import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('https://portfolio-backend-6d2p.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      setSubmitted(true)
    } catch (err) {
      console.error(err)
    }
    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="contact-container animate-fade-in-up">
        <div className="success-card">
          <h2 className="success-heading">Message Sent ✓</h2>
          <p className="success-text">Thanks for reaching out! I'll get back to you soon.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="contact-container animate-fade-in-up">
      <h2 className="contact-heading">
        Get in <span className="text-gradient">Touch</span>
      </h2>
      <p className="contact-subheading">
        Open to internships, collaborations, and project discussions.
      </p>

      <form className="contact-form delay-100 animate-fade-in-up">
        <div className="form-group">
          <label className="form-label">Name</label>
          <input
            className="form-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Message</label>
          <textarea
            className="form-input"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="What's on your mind?"
            required
          />
        </div>

        <button className="btn-submit" onClick={handleSubmit} disabled={loading}>
          {loading ? 'Sending...' : 'Send Message →'}
        </button>
      </form>

      <div className="contact-links delay-200 animate-fade-in-up">
        <a href="https://github.com/rishitsharma07" target="_blank" rel="noreferrer" className="contact-link-btn">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/rishit-sharma-r16" target="_blank" rel="noreferrer" className="contact-link-btn">
          LinkedIn
        </a>
        <a href="mailto:your@email.com" className="contact-link-btn">
          Email
        </a>
      </div>
    </div>
  )
}

export default Contact