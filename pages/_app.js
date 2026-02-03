import '../styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.classList.remove('light', 'dark')
      document.body.classList.add(theme)
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />
}
