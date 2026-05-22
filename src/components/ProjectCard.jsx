function ProjectCard({ project }) {
  const cardStyle = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    transition: 'border-color 0.2s',
    cursor: 'default',
  }

  const titleStyle = {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: 'var(--text)',
  }

  const descStyle = {
    color: 'var(--text-muted)',
    fontSize: '0.9rem',
    lineHeight: '1.6',
    flexGrow: 1,
  }

  const stackRowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  }

  const badgeStyle = {
    background: '#1a1a1a',
    border: '1px solid var(--border)',
    color: 'var(--gold)',
    padding: '0.2rem 0.7rem',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '500',
  }

  const linkRowStyle = {
    display: 'flex',
    gap: '1rem',
    marginTop: 'auto',
  }

  const linkStyle = {
    color: 'var(--text-muted)',
    fontSize: '0.85rem',
    border: '1px solid var(--border)',
    padding: '0.4rem 1rem',
    borderRadius: '4px',
    transition: 'color 0.2s, border-color 0.2s',
  }

  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>{project.title}</h3>
      <p style={descStyle}>{project.description}</p>
      <div style={stackRowStyle}>
        {project.techStack.map(tech => (
          <span key={tech} style={badgeStyle}>{tech}</span>
        ))}
      </div>
      <div style={linkRowStyle}>
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer" style={linkStyle}>
            GitHub →
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" style={linkStyle}>
            Live →
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard