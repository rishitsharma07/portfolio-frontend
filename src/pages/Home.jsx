import './Home.css'

function Home() {
  const stack = ['Java', 'Spring Boot', 'Kafka', 'MySQL', 'React', 'Node.js', 'MongoDB']

  return (
    <div className="home-container">
      <div className="home-content animate-fade-in-up">
        <p className="greeting">👋 Hello, I'm</p>
        <h1 className="name">
          Rishit <span className="text-gradient">Sharma</span>
        </h1>
        <p className="tagline">
          Java Backend Developer · Building with Spring Boot, React & Node
        </p>
        
        <div className="btn-row delay-100 animate-fade-in-up">
          <a href="/projects">
            <button className="btn btn-primary">View Projects</button>
          </a>
          <a href="https://github.com/rishitsharma07" target="_blank" rel="noreferrer">
            <button className="btn btn-secondary">GitHub</button>
          </a>
        </div>
        
        <div className="stack-container delay-200 animate-fade-in-up">
          {stack.map(tech => (
            <span key={tech} className="badge">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home