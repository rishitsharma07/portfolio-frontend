import './ProjectCard.css'

function ProjectCard({ project }) {
  // Optional: Add simple mouse movement tracking for a glow effect
  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <div className="project-card" onMouseMove={handleMouseMove}>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      
      <div className="tech-stack">
        {project.techStack.map(tech => (
          <span key={tech} className="tech-badge">{tech}</span>
        ))}
      </div>
      
      <div className="project-links">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link">
            GitHub →
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link">
            Live →
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard