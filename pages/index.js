import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Chatbot from '../components/Chatbot'
import Footer from '../components/Footer'

export default function Home({ theme, toggleTheme }) {
  return (
    <>
      <Head>
        <title>Kapital Gebrehiwet - Software Developer</title>
        <meta name="description" content="Portfolio website of Kapital Gebrehiwet - Software Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Chatbot />
      <Footer />
    </>
  )
}
