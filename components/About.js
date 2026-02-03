import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from '../styles/About.module.css'

export default function About() {
  const services = [
    { icon: 'fas fa-code', title: 'Website Development' },
    { icon: 'fas fa-mobile-alt', title: 'App Development' },
    { icon: 'fas fa-server', title: 'Website Hosting' },
  ]

  const stats = [
    { number: '10 +', label: 'Completed Projects' },
  ]

  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="about" ref={ref} className={styles.about}>
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <div className={`${styles.services} ${isVisible ? styles.animateIn : ''}`}>
            {services.map((service, index) => (
              <div 
                key={index} 
                className={styles.serviceItem}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={styles.serviceIcon}>
                  <i className={service.icon}></i>
                </div>
                <h4>{service.title}</h4>
              </div>
            ))}
          </div>
          <div className={`${styles.aboutText} ${isVisible ? styles.animateIn : ''}`}>
            <h2 className={styles.sectionTitle}>About me</h2>
            <p className={styles.aboutDescription}>
            I am a Software Engineering student at Mekelle University with a strong interest in technology and digital transformation. I am highly motivated by learning, problem-solving, and building solutions that create real-world impact. I aspire to grow as a tech professional by continuously developing my skills and contributing to innovative digital systems.</p>
            <div className={styles.stats}>
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={styles.statItem}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
