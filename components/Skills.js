import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from '../styles/Skills.module.css'

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState(null)
  
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend',
      subtitle: 'User Interface & Experience',
      icon: 'fas fa-paint-brush',
      description: 'Building modern, responsive web applications',
      color: '#3b82f6',
      gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      skills: ['React.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Next.js', 'HTML5', 'shadcn/ui', 'JavaScript', 'CSS3', 'Redux Toolkit'],
    },
    {
      id: 'backend',
      title: 'Backend',
      subtitle: 'Server & Logic Layer',
      icon: 'fas fa-server',
      description: 'APIs, authentication, and server logic',
      color: '#a855f7',
      gradient: 'linear-gradient(135deg, #a855f7, #ec4899)',
      skills: ['Python', 'Express.js', 'Django', 'Node.js', 'NestJS', 'RESTful APIs', 'Java', 'FastAPI', 'GraphQL'],
    },
    {
      id: 'security',
      title: 'Security',
      subtitle: 'Encryption & Authentication',
      icon: 'fas fa-shield-alt',
      description: 'Secure data handling and encryption',
      color: '#ef4444',
      gradient: 'linear-gradient(135deg, #ef4444, #f97316)',
      skills: ['NextAuth.js', 'JWT'],
    },
    {
      id: 'mobile',
      title: 'Mobile',
      subtitle: 'Cross-Platform Development',
      icon: 'fas fa-mobile-alt',
      description: 'Cross-platform mobile app development',
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981, #059669)',
      skills: ['React Native', 'Flutter'],
    },
    {
      id: 'database',
      title: 'Database',
      subtitle: 'Data Storage & Management',
      icon: 'fas fa-database',
      description: 'Data storage and management',
      color: '#f97316',
      gradient: 'linear-gradient(135deg, #f97316, #ef4444)',
      skills: ['PostgreSQL', 'MongoDB', 'Prisma', 'Mongoose'],
    },
    {
      id: 'ml',
      title: 'Machine Learning',
      subtitle: 'Analytical & Modeling',
      icon: 'fas fa-brain',
      description: 'Analytical and modeling capabilities',
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
      skills: ['Scikit-learn', 'NumPy', 'Google Colab', 'TensorFlow', 'Pandas', 'PyTorch', 'Jupyter Notebook'],
    },
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      subtitle: 'Deep Learning & AI',
      icon: 'fas fa-robot',
      description: 'Deep learning and AI applications',
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
      skills: ['TensorFlow', 'PyTorch', 'Hugging Face Transformers'],
    },
    {
      id: 'data',
      title: 'Data Analytics',
      subtitle: 'Insight & Visualization',
      icon: 'fas fa-chart-bar',
      description: 'Insight extraction and visualization',
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    },
    {
      id: 'devops',
      title: 'DevOps',
      subtitle: 'Deployment & CI/CD',
      icon: 'fas fa-rocket',
      description: 'End-to-end deployment and CI/CD',
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
      skills: ['Docker', 'GitHub Actions', 'Vercel', 'Netlify', 'Git'],
    },
  ]

  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="skills" ref={ref} className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={`${styles.title} ${isVisible ? styles.animateIn : ''}`}>
            <span className={styles.titleAccent}></span>
            Programming Skills
          </h2>
          <p className={`${styles.subtitle} ${isVisible ? styles.animateIn : ''}`}>
            My technical skills and programming languages expertise
          </p>
        </div>

        <div className={styles.categoriesGrid}>
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.id}
              className={`${styles.categoryCard} ${isVisible ? styles.animateIn : ''} ${
                hoveredCategory === category.id ? styles.cardHovered : ''
              }`}
              style={{
                animationDelay: `${categoryIndex * 0.1}s`,
                '--category-gradient': category.gradient,
                '--category-color': category.color,
              }}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className={styles.categoryHeader}>
                <div 
                  className={styles.categoryIcon} 
                  style={{ background: category.gradient }}
                >
                  <i className={category.icon}></i>
                </div>
                <div className={styles.categoryTitleWrapper}>
                  <h3 
                    className={styles.categoryTitle}
                    style={{ background: category.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                  >
                    {category.title}
                  </h3>
                  <p className={styles.categorySubtitle}>{category.subtitle}</p>
                </div>
              </div>
              <p 
                className={styles.categoryDescription}
                style={{ borderLeftColor: hoveredCategory === category.id ? category.color : 'rgba(255, 255, 255, 0.1)' }}
              >
                {category.description}
              </p>
              <div className={styles.skillsGrid}>
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={styles.skillCard}
                    style={{ 
                      animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`,
                      '--hover-color': category.color,
                    }}
                  >
                    <span className={styles.skillName}>{skill}</span>
                    <div 
                      className={styles.skillGlow}
                      style={{ background: `radial-gradient(circle, ${category.color}40, transparent)` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
