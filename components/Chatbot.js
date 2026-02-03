import { useState, useRef, useEffect } from 'react'
import styles from '../styles/Chatbot.module.css'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! I'm here to answer questions about Kapital Gebrehiwet. What would you like to know?",
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef(null)

  // Knowledge base about Kapital
  const knowledgeBase = {
    greeting: [
      "Hello! I'm here to help you learn about Kapital Gebrehiwet.",
      "Hi there! Ask me anything about Kapital's work and experience.",
      "Hey! I can tell you about Kapital's projects, skills, and background.",
    ],
    name: [
      "Kapital Gebrehiwet is a Software Developer with a passion for creating innovative solutions.",
    ],
    skills: [
      "Kapital specializes in: HTML5, CSS, JavaScript, Node.js, React, Git, and GitHub. He's skilled in both frontend and backend development.",
    ],
    experience: [
      "Kapital has 10+ years of experience in software development, with 120+ completed projects and 95% client satisfaction rate.",
    ],
    projects: [
      "Kapital has worked on many projects including: Film Site, Sela Stock Management, Streaming apps, Habit Tracker, Redux Toolkit Shopping Cart, AI-Powered Resume Analyzer, Campus Event Organizer, Flutter To-Do App, and many more. You can see all projects in the Projects section!",
    ],
    services: [
      "Kapital offers: Website Development, App Development, and Website Hosting services.",
    ],
    background: [
      "Kapital started his software journey from photography. Through that, he learned to love the process of creating from scratch. This led him to software development as a way to fulfill his love for learning and building things.",
    ],
    contact: [
      "You can contact Kapital through the Contact section on this website, or check out his GitHub profile to see his work!",
    ],
    github: [
      "Kapital's GitHub username is 'kapital-gebrehiwet'. You can find all his projects there!",
    ],
  }

  // Keywords mapping
  const keywordMap = {
    greeting: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
    name: ['name', 'who are you', 'who is', 'introduce'],
    skills: ['skill', 'technology', 'tech', 'what can you do', 'expertise', 'proficient', 'know'],
    experience: ['experience', 'years', 'how long', 'background', 'career'],
    projects: ['project', 'work', 'portfolio', 'built', 'created', 'developed', 'app', 'application'],
    services: ['service', 'offer', 'provide', 'do', 'help with'],
    background: ['background', 'story', 'journey', 'started', 'began', 'photography'],
    contact: ['contact', 'reach', 'email', 'get in touch', 'connect', 'message'],
    github: ['github', 'repository', 'repo', 'code', 'source code'],
  }

  const findResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase().trim()

    // Check for keywords
    for (const [category, keywords] of Object.entries(keywordMap)) {
      if (keywords.some((keyword) => lowerInput.includes(keyword))) {
        const responses = knowledgeBase[category]
        return responses[Math.floor(Math.random() * responses.length)]
      }
    }

    // Default responses for unclear questions
    const defaultResponses = [
      "I'm not sure about that specific detail. Could you ask about Kapital's skills, projects, experience, or services?",
      "That's an interesting question! Try asking about his projects, skills, or background.",
      "I can help you learn about Kapital's work, skills, projects, or experience. What would you like to know?",
    ]

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const handleSend = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    // Add user message
    const userMessage = {
      type: 'user',
      text: inputValue,
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        text: findResponse(inputValue),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 500)
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend(e)
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className={styles.chatButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chatbot"
      >
        {isOpen ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-comments"></i>
        )}
        {!isOpen && <span className={styles.notificationDot}></span>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <div className={styles.botInfo}>
              <div className={styles.botAvatar}>
                <i className="fas fa-robot"></i>
              </div>
              <div>
                <h3>Ask About Kapital</h3>
                <p>Online</p>
              </div>
            </div>
            <button
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className={styles.messagesContainer}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${styles.message} ${
                  message.type === 'user' ? styles.userMessage : styles.botMessage
                }`}
              >
                {message.type === 'bot' && (
                  <div className={styles.messageAvatar}>
                    <i className="fas fa-robot"></i>
                  </div>
                )}
                <div className={styles.messageContent}>
                  <p>{message.text}</p>
                </div>
                {message.type === 'user' && (
                  <div className={styles.messageAvatar}>
                    <i className="fas fa-user"></i>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form className={styles.chatInput} onSubmit={handleSend}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Kapital's work, skills, or projects..."
              className={styles.input}
            />
            <button type="submit" className={styles.sendButton} aria-label="Send message">
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      )}
    </>
  )
}
