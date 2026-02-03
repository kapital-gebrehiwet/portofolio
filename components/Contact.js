import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from '../styles/Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacts" ref={ref} className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.contactContent}>
          <div className={`${styles.contactText} ${isVisible ? styles.animateIn : ''}`}>
            <h2 className={styles.contactTitle}>Have a project?</h2>
            <h3 className={styles.contactSubtitle}>Let&apos;s talk!</h3>
          </div>
          <div className={`${styles.contactFormWrapper} ${isVisible ? styles.animateIn : ''}`}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  className={styles.formInput}
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  className={styles.formInput}
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className={styles.btnPrimary}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
