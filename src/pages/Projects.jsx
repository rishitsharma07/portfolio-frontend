import { useState, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
  // First try our own backend
  fetch('https://portfolio-backend-6d2p.onrender.com/api/projects')
    .then(res => res.json())
    .then(data => {
      if (data.length > 0) {
        setProjects(data)
        setLoading(false)
      } else {
        // Fallback to GitHub API
        return fetch('https://api.github.com/users/rishitsharma07/repos?sort=updated&per_page=10')
      }
    })
    .then(res => res && res.json())
    .then(data => {
      if (data && Array.isArray(data)) {
        const formatted = data.map(repo => ({
          _id: repo.id,
          title: repo.name,
          description: repo.description || 'No description provided.',
          techStack: [repo.language].filter(Boolean),
          githubUrl: repo.html_url,
          liveUrl: repo.homepage || '',
        }))
        setProjects(formatted)
      }
      setLoading(false)
    })
    .catch(() => setLoading(false))
}, [])

  const containerStyle = {
    maxWidth: '1100px',
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

  const subheadingStyle = {
    color: 'var(--text-muted)',
    marginBottom: '3rem',
    fontSize: '1rem',
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '1.5rem',
  }

  const loadingStyle = {
    color: 'var(--text-muted)',
    textAlign: 'center',
    marginTop: '4rem',
    fontSize: '1rem',
  }

  // Hardcoded projects as fallback while backend is being set up
  const fallbackProjects = [
    {
      _id: '1',
      title: 'Midas Core',
      description: 'A Spring Boot + Kafka banking simulation built as part of the JPMorgan Chase Forage Advanced Software Engineering program. Features real-time transaction processing and REST APIs.',
      techStack: ['Java', 'Spring Boot', 'Kafka', 'REST API'],
      githubUrl: 'https://github.com/rishitsharma07',
      liveUrl: '',
    },
    {
      _id: '3',
      title: 'Portfolio Website',
      description: 'A full-stack personal portfolio built with React, Node.js, Express and MongoDB. Features a REST API backend and dynamic project loading.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com/rishitsharma07',
      liveUrl: '',
    },
  ]

  const displayProjects = projects.length > 0 ? projects : fallbackProjects

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>
        My <span style={goldStyle}>Projects</span>
      </h2>
      <p style={subheadingStyle}>Things I've built — from backend systems to full stack apps</p>

      {loading ? (
        <p style={loadingStyle}>Loading projects...</p>
      ) : (
        <div style={gridStyle}>
          {displayProjects.map(project => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Projects