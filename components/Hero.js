import { useEffect, useState } from 'react'
import styles from '../styles/Hero.module.css'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={`${styles.heroText} ${isVisible ? styles.animateIn : ''}`}>
            <h1 className={styles.heroGreeting}>Hello.</h1>
            <h2 className={styles.heroName}>I'm Kapital</h2>
            <h3 className={styles.heroTitle}>Software Developer</h3>
            <div className={styles.heroButtons}>
              <button className={styles.btnPrimary} onClick={(e) => scrollToSection(e, 'contacts')}>
                Get a project
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondary}
              >
                My resume
              </a>
            </div>
          </div>
          <div className={`${styles.heroImageWrapper} ${isVisible ? styles.animateIn : ''}`}>
            <div className={styles.imageFrame}>
              <button className={`${styles.carouselBtn} ${styles.carouselLeft}`}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <div className={styles.profileImage}>
                <img
                  src="/profile.jpg"
                  alt="Kapital Gebrehiwet profile"
                  className={styles.profilePicture}
                />
              </div>
              <button className={`${styles.carouselBtn} ${styles.carouselRight}`}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
