function Home() {
  const containerStyle = {
    minHeight: 'calc(100vh - 60px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2rem',
  }

  const greetingStyle = {
    color: 'var(--text-muted)',
    fontSize: '1.1rem',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    marginBottom: '1rem',
  }

  const nameStyle = {
    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
    fontWeight: '700',
    color: 'var(--text)',
    lineHeight: '1.1',
    marginBottom: '0.5rem',
  }

  const goldStyle = {
    color: 'var(--gold)',
  }

  const taglineStyle = {
    fontSize: '1.2rem',
    color: 'var(--text-muted)',
    marginBottom: '2.5rem',
    maxWidth: '500px',
  }

  const btnRowStyle = {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }

  const btnPrimaryStyle = {
    background: 'var(--gold)',
    color: '#000',
    padding: '0.75rem 2rem',
    borderRadius: '4px',
    fontWeight: '600',
    fontSize: '0.95rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.2s',
  }

  const btnSecondaryStyle = {
    background: 'transparent',
    color: 'var(--gold)',
    padding: '0.75rem 2rem',
    borderRadius: '4px',
    fontWeight: '600',
    fontSize: '0.95rem',
    border: '1px solid var(--gold)',
    cursor: 'pointer',
    transition: 'all 0.2s',
  }

  const stackStyle = {
    marginTop: '4rem',
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }

  const badgeStyle = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    color: 'var(--text-muted)',
    padding: '0.4rem 1rem',
    borderRadius: '20px',
    fontSize: '0.85rem',
  }

  const stack = ['Java', 'Spring Boot', 'React', 'Node.js', 'MongoDB', 'Kafka', 'MySQL', 'PostgreSQL']

  return (
    <div style={containerStyle}>
      <p style={greetingStyle}>👋 Hello, I'm</p>
      <h1 style={nameStyle}>
        Rishit <span style={goldStyle}>Sharma</span>
      </h1>
      <p style={taglineStyle}>
        Full Stack Developer · Building with Java, React & Node
      </p>
      <div style={btnRowStyle}>
        <a href="/projects">
          <button style={btnPrimaryStyle}>View Projects</button>
        </a>
        <a href="https://github.com/rishitsharma07" target="_blank" rel="noreferrer">
          <button style={btnSecondaryStyle}>GitHub</button>
        </a>
      </div>
      <div style={stackStyle}>
        {stack.map(tech => (
          <span key={tech} style={badgeStyle}>{tech}</span>
        ))}
      </div>
    </div>
  )
}

export default Home