import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from '../styles/Projects.module.css'

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const projects = [
    {
      name: 'AI-Powered Resume Analyzer',
      tags: ['AI', 'React', 'Machine Learning'],
      description: 'AI-assisted resume analyzer that evaluates and scores CV content using advanced natural language processing.',
      preview: null,
      order: 'normal',
      githubUrl: 'https://github.com/kapital-gebrehiwet/AI-Powered-resume-analyzer',
      liveUrl: null,
    },
    {
      name: 'HealthyDoc',
      tags: ['Fullstack', 'Health', 'Collaboration'],
      description: 'Comprehensive health management platform built collaboratively, featuring patient records and appointment scheduling.',
      preview: null,
      order: 'reverse',
      githubUrl: 'https://github.com/tilahungoito/healthydoc',
      liveUrl: null,
    },
    {
      name: 'Maintenance System',
      tags: ['Fullstack', 'Team Project', 'Enterprise'],
      description: 'Enterprise-grade maintenance system for managing workflows, tasks, and team collaboration in technical environments.',
      preview: null,
      order: 'normal',
      githubUrl: 'https://github.com/Mikahaftamu/maintance_sytem_team',
      liveUrl: null,
    },
    {
      name: 'Redux Toolkit E-Commerce',
      tags: ['React', 'Redux Toolkit', 'State Management'],
      description: 'Production-ready shopping cart application demonstrating advanced state management patterns with Redux Toolkit.',
      preview: null,
      order: 'reverse',
      githubUrl: 'https://github.com/kapital-gebrehiwet/redux-toolkit-simple-cart',
      liveUrl: null,
    },
    {
      name: 'Film Site',
      tags: ['React', 'API Integration', 'UI/UX'],
      description: 'Dynamic film exploration platform with advanced search, filtering, and beautiful UI for movie discovery.',
      preview: null,
      order: 'normal',
      githubUrl: 'https://github.com/kapital-gebrehiwet/film-site',
      liveUrl: null,
    },
    {
      name: 'Flutter Mobile App',
      tags: ['Flutter', 'Mobile Development', 'Cross-Platform'],
      description: 'Cross-platform mobile application showcasing Flutter capabilities with native performance and beautiful UI.',
      preview: null,
      order: 'reverse',
      githubUrl: 'https://github.com/kapital-gebrehiwet/flutter-to-do-app',
      liveUrl: null,
    },
    {
      name: 'Habit Tracker',
      tags: ['React', 'Productivity', 'Data Visualization'],
      description: 'Smart habit tracking application with analytics, streak tracking, and motivational features for personal growth.',
      preview: null,
      order: 'normal',
      githubUrl: 'https://github.com/kapital-gebrehiwet/habit-tracker',
      liveUrl: null,
    },
    {
      name: 'Campus Event Organizer',
      tags: ['Web App', 'Event Management', 'Fullstack'],
      description: 'Comprehensive event management system for organizing, listing, and managing campus events with user registration.',
      preview: null,
      order: 'reverse',
      githubUrl: 'https://github.com/kapital-gebrehiwet/campus_event_organizer',
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
