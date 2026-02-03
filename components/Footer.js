import styles from '../styles/Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>Kapital Gebrehiwet</h3>
            <p className={styles.tagline}>
              Crafting modern, reliable software experiences with clean code and thoughtful design.
            </p>
          </div>
          <div className={styles.social}>
            <h4 className={styles.socialTitle}>Let&apos;s connect</h4>
            <div className={styles.socialIcons}>
              <a
                href="https://github.com/kapital-gebrehiwet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={styles.socialIcon}
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={styles.socialIcon}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className={styles.socialIcon}
              >
                <i className="fab fa-x-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.socialIcon}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={styles.socialIcon}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="mailto:youremail@example.com"
                aria-label="Email"
                className={styles.socialIcon}
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bottomRow}>
          <p className={styles.copy}>
            &copy; {year} Kapital Gebrehiwet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

