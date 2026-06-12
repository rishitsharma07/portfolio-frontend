import { useState, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import './Projects.css'

// Hardcoded projects as fallback while backend is waking up
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

function Projects() {
  const [projects, setProjects] = useState(fallbackProjects)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Fetch directly from GitHub API
    fetch('https://api.github.com/users/rishitsharma07/repos?sort=updated&per_page=10')
      .then(res => res.json())
      .then(data => {
        if (data && Array.isArray(data)) {
          const formatted = data.map(repo => ({
            _id: repo.id.toString(),
            title: repo.name,
            description: repo.description || 'No description provided.',
            techStack: [repo.language].filter(Boolean),
            githubUrl: repo.html_url,
            liveUrl: repo.homepage || '',
          }))
          // Optional: filter out forks if needed by checking repo.fork
          setProjects(formatted)
        }
      })
      .catch(() => {
        // Silently fail and keep showing fallback projects
      })
  }, [])

  return (
    <div className="projects-container animate-fade-in-up">
      <h2 className="projects-heading">
        My <span className="text-gradient">Projects</span>
      </h2>
      <p className="projects-subheading">Things I've built — from backend systems to full stack apps</p>

      {loading ? (
        <p className="loading-text">Loading projects...</p>
      ) : (
        <div className="projects-grid delay-100 animate-fade-in-up">
          {projects.map(project => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Projects