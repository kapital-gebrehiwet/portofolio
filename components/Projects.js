import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from '../styles/Projects.module.css'

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const projects = [
    // Original showcase project
    // GitHub projects from your account
    {
      name: 'Film Site',
      tags: ['React', 'JavaScript'],
      description: 'Film exploration site built as a personal project and hosted on GitHub.',
      preview: null,
      order: 'normal',
      githubUrl: 'https://github.com/kapital-gebrehiwet/film-site',
      liveUrl: null,
    },
    {
      name: 'Sela Stock Management',
      tags: ['React', 'JavaScript'],
      description: 'Stock management application for handling inventory and product data.',
      preview: null,
      order: 'reverse',
      githubUrl: 'https://github.com/kapital-gebrehiwet/sela-stock-management',
      liveUrl: null,
    },
    {
      name: 'Streaming',
      tags: ['Web App', 'JavaScript'],
      description: 'Streaming themed project demonstrating UI and state management.',
      preview: null,
      order: 'normal',
      githubUrl: 'https://github.com/kapital-gebrehiwet/streaming',
      liveUrl: null,
    },
    {
      name: 'Stock Management',
      tags: ['React', 'JavaScript'],
      description: 'Another stock management focused project exploring different solutions.',
      preview: null,
      order: 'reverse',
      githubUrl: 'https://github.com/kapital-gebrehiwet/stock-management',
      liveUrl: null,
    },
    {
      name: 'Simple Add Course',
      tags: ['React', 'JavaScript'],
      description: 'Simple course management app for adding and listing courses.',
      preview: null,
      order: 'normal',
      githubUrl: 'https://github.com/kapital-gebrehiwet/simple-add-course',
      liveUrl: null,
    },
    {
      name: 'Habit Tracker',
      tags: ['React', 'Productivity'],
      description: 'Habit tracking application to monitor and visualise your daily habits.',
      preview: null,
      order: 'reverse',
      githubUrl: 'https://github.com/kapital-gebrehiwet/habit-tracker',
      liveUrl: null,
    },
    {
      name: 'Redux Toolkit Simple Cart',
      tags: ['React', 'Redux Toolkit'],
      description: 'Shopping cart application using Redux Toolkit for state management.',
      preview: null,
      order: 'normal',
      githubUrl: 'https://github.com/kapital-gebrehiwet/redux-toolkit-simple-cart',
      liveUrl: null,
    },
    {
      name: 'TO-DO LIST',
      tags: ['React', 'JavaScript'],
      description: 'To-do list app for managing daily tasks and productivity.',
      preview: null,
      order: 'reverse',
      githubUrl: 'https://github.com/kapital-gebrehiwet/TO-DO-LIST-',
      liveUrl: null,
    },
    {
      name: 'AI-Powered Resume Analyzer',
      tags: ['AI', 'React'],
      description: 'AI assisted resume analyzer that helps evaluate and score CV content.',
      preview: null,
      order: 'normal',
      githubUrl: 'https://github.com/kapital-gebrehiwet/AI-Powered-resume-analyzer',
      liveUrl: null,
    },
    {
      name: 'Campus Event Organizer',
      tags: ['Web App', 'JavaScript'],
      description: 'App for organizing, listing and managing campus events.',
      preview: null,
      order: 'reverse',
      githubUrl: 'https://github.com/kapital-gebrehiwet/campus_event_organizer',
      liveUrl: null,
    },
    {
      name: 'Flutter To-Do App',
      tags: ['Flutter', 'Mobile'],
      description: 'Mobile to-do application built with Flutter.',
      preview: null,
      order: 'normal',
      githubUrl: 'https://github.com/kapital-gebrehiwet/flutter-to-do-app',
      liveUrl: null,
    },
    {
      name: 'Guess Master',
      tags: ['React', 'JavaScript'],
      description: 'Guessing game project focusing on user interaction and game logic.',
      preview: null,
      order: 'reverse',
      githubUrl: 'https://github.com/kapital-gebrehiwet/guess-master',
      liveUrl: null,
    },
    {
      name: 'HealthyDoc',
      tags: ['Fullstack', 'Health'],
      description: 'Health-related project built collaboratively on GitHub.',
      preview: null,
      order: 'normal',
      githubUrl: 'https://github.com/tilahungoito/healthydoc',
      liveUrl: null,
    },
    {
      name: 'Maintenance System Team',
      tags: ['Fullstack', 'Team Project'],
      description: 'Collaborative maintenance system project for managing tasks and workflows.',
      preview: null,
      order: 'reverse',
      githubUrl: 'https://github.com/Mikahaftamu/maintance_sytem_team',
      liveUrl: null,
    },
  ]

  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="projects" ref={ref} className={styles.projects}>
      <div className={styles.container}>
        <h2 className={`${styles.projectsTitle} ${isVisible ? styles.animateIn : ''}`}>
          <span className={styles.titleAccent}></span>
          Projects
        </h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${styles.projectCard} ${isVisible ? styles.animateIn : ''} ${hoveredIndex === index ? styles.cardHovered : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`${styles.projectContent} ${project.order === 'reverse' ? styles.reverse : ''}`}>
                <h3 className={styles.projectName}>{project.name}</h3>
                <div className={styles.projectTags}>
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className={styles.tag}
                      style={{ animationDelay: `${(index * 0.15) + (tagIndex * 0.1)}s` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectButtons}>
                  <a
                    href={project.githubUrl || '#'}
                    className={styles.btnPrimary}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Github
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} className={styles.btnSecondary} target="_blank" rel="noreferrer">
                      Live demo
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  )}
                </div>
              </div>
              <div 
                className={styles.projectPreview}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {project.preview === 'code' && project.codeLines && (
                  <div className={styles.codePreview}>
                    {project.codeLines.map((line, lineIndex) => (
                      <div
                        key={lineIndex}
                        className={`${styles.codeLine} ${
                          line.includes('Miss!') || line.includes('sunk') ? styles.codeSuccess : ''
                        }`}
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                )}
                {project.preview === 'images' && (
                  <div className={styles.imagePreview}>
                    <div className={`${styles.previewImg} ${styles.img1}`}></div>
                    <div className={`${styles.previewImg} ${styles.img2}`}></div>
                  </div>
                )}
                {project.preview === 'landing' && (
                  <div className={styles.landingPreview}>
                    <div className={styles.landingContent}>
                      <div className={styles.landingLogo}>Frant</div>
                      <div className={styles.landingText}>Empowering teams with the freedom</div>
                    </div>
                  </div>
                )}
                {!project.preview && (
                  <div className={styles.animatedPreview}>
                    <div className={styles.previewIcon}>
                      <i className="fas fa-code"></i>
                    </div>
                    <div className={styles.previewGlow}></div>
                    <div className={styles.floatingParticles}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
