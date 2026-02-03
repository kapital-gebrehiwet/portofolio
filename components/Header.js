import styles from '../styles/Header.module.css'

export default function Header({ theme, toggleTheme }) {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navWrapper}>
          <div className={styles.logo}>Kapital Gebrehiwet</div>
          <nav className={styles.nav}>
            <a href="#home" className={styles.navLink} onClick={(e) => scrollToSection(e, 'home')}>
              Home
            </a>
            <a href="#about" className={styles.navLink} onClick={(e) => scrollToSection(e, 'about')}>
              About
            </a>
            <a href="#projects" className={styles.navLink} onClick={(e) => scrollToSection(e, 'projects')}>
              Projects
            </a>
            <a href="#contacts" className={styles.navLink} onClick={(e) => scrollToSection(e, 'contacts')}>
              Contacts
            </a>
          </nav>
          <button
            type="button"
            className={styles.themeToggleButton}
            onClick={toggleTheme}
            aria-label="Toggle dark and light mode"
          >
            {theme === 'dark' ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>
        </div>
      </div>
    </header>
  )
}
