import { useState } from 'react'

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

  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '4rem 2rem',
  }

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
  }

  const goldStyle = {
    color: 'var(--gold)',
  }

  const subStyle = {
    color: 'var(--text-muted)',
    marginBottom: '3rem',
    fontSize: '1rem',
  }

  const fieldStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginBottom: '1.5rem',
  }

  const labelStyle = {
    color: 'var(--text-muted)',
    fontSize: '0.85rem',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  }

  const inputStyle = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: '4px',
    padding: '0.75rem 1rem',
    color: 'var(--text)',
    fontSize: '1rem',
    outline: 'none',
    width: '100%',
  }

  const textareaStyle = {
    ...inputStyle,
    minHeight: '140px',
    resize: 'vertical',
    fontFamily: 'inherit',
  }

  const btnStyle = {
    background: 'var(--gold)',
    color: '#000',
    padding: '0.75rem 2rem',
    borderRadius: '4px',
    fontWeight: '600',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
  }

  const successStyle = {
    background: 'var(--bg-card)',
    border: '1px solid var(--gold)',
    borderRadius: '8px',
    padding: '3rem',
    textAlign: 'center',
  }

  const linksStyle = {
    display: 'flex',
    gap: '1rem',
    marginTop: '2rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  }

  const linkBtnStyle = {
    color: 'var(--text-muted)',
    border: '1px solid var(--border)',
    padding: '0.5rem 1.2rem',
    borderRadius: '4px',
    fontSize: '0.9rem',
  }

  if (submitted) {
    return (
      <div style={containerStyle}>
        <div style={successStyle}>
          <h2 style={{ color: 'var(--gold)', fontSize: '1.5rem', marginBottom: '1rem' }}>
            Message Sent ✓
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Thanks for reaching out! I'll get back to you soon.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>
        Get in <span style={goldStyle}>Touch</span>
      </h2>
      <p style={subStyle}>
        Open to internships, collaborations, and project discussions.
      </p>

      <div style={fieldStyle}>
        <label style={labelStyle}>Name</label>
        <input
          style={inputStyle}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
        />
      </div>

      <div style={fieldStyle}>
        <label style={labelStyle}>Email</label>
        <input
          style={inputStyle}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
        />
      </div>

      <div style={fieldStyle}>
        <label style={labelStyle}>Message</label>
        <textarea
          style={textareaStyle}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="What's on your mind?"
        />
      </div>

      <button style={btnStyle} onClick={handleSubmit} disabled={loading}>
        {loading ? 'Sending...' : 'Send Message →'}
      </button>

      <div style={linksStyle}>
        <a href="https://github.com/rishitsharma07" target="_blank" rel="noreferrer" style={linkBtnStyle}>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/rishit-sharma-r16" target="_blank" rel="noreferrer" style={linkBtnStyle}>
          LinkedIn
        </a>
        <a href="mailto:your@email.com" style={linkBtnStyle}>
          Email
        </a>
      </div>
    </div>
  )
}

export default Contact