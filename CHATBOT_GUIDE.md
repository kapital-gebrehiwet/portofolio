# Chatbot Integration Guide

## Current Implementation

The chatbot is now integrated into your portfolio! It appears as a floating button in the bottom-right corner.

### Features:
- ✅ Floating chat button with pulse animation
- ✅ Beautiful chat window matching your dark theme
- ✅ Knowledge base about your work, skills, and projects
- ✅ Responsive design for mobile devices
- ✅ Smooth animations and transitions

## How It Works

The chatbot uses a **rule-based system** that matches user questions to predefined answers based on keywords. It can answer questions about:
- Your name and background
- Skills and technologies
- Experience and statistics
- Projects and portfolio
- Services offered
- Contact information
- GitHub profile

## Example Questions Users Can Ask:
- "What are your skills?"
- "Tell me about your projects"
- "How many years of experience do you have?"
- "What services do you offer?"
- "How can I contact you?"
- "What's your GitHub username?"

## Upgrading to AI (Optional)

If you want to make the chatbot more intelligent using AI, you can integrate with OpenAI or other AI services:

### Option 1: OpenAI Integration

1. Install OpenAI package:
```bash
npm install openai
```

2. Create an API route at `pages/api/chat.js`:
```javascript
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { message, context } = req.body

  // Add context about you
  const systemPrompt = `You are a helpful assistant representing Kapital Gebrehiwet, a Software Developer. 
  Answer questions about Kapital based on this information:
  - Name: Kapital Gebrehiwet
  - Role: Software Developer
  - Skills: HTML5, CSS, JavaScript, Node.js, React, Git, GitHub
  - Experience: 10+ years, 120+ completed projects, 95% client satisfaction
  - Services: Website Development, App Development, Website Hosting
  - Background: Started from photography, loves creating from scratch
  - Projects: Film Site, Stock Management apps, Habit Tracker, AI Resume Analyzer, etc.
  - GitHub: kapital-gebrehiwet
  Be friendly, concise, and helpful.`

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ],
    })

    res.status(200).json({ response: completion.choices[0].message.content })
  } catch (error) {
    res.status(500).json({ error: 'Failed to get AI response' })
  }
}
```

3. Add your OpenAI API key to `.env.local`:
```
OPENAI_API_KEY=your_api_key_here
```

4. Update `components/Chatbot.js` to use the API:
```javascript
const handleSend = async (e) => {
  e.preventDefault()
  if (!inputValue.trim()) return

  const userMessage = {
    type: 'user',
    text: inputValue,
  }

  setMessages((prev) => [...prev, userMessage])
  setInputValue('')

  // Call OpenAI API
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: inputValue }),
    })

    const data = await response.json()
    const botResponse = {
      type: 'bot',
      text: data.response,
    }
    setMessages((prev) => [...prev, botResponse])
  } catch (error) {
    const botResponse = {
      type: 'bot',
      text: "Sorry, I'm having trouble connecting. Please try again later.",
    }
    setMessages((prev) => [...prev, botResponse])
  }
}
```

### Option 2: Other AI Services

You can also integrate with:
- **Anthropic Claude API**
- **Google Gemini API**
- **Hugging Face Inference API**
- **Custom AI model**

## Customization

### Adding More Knowledge

Edit the `knowledgeBase` object in `components/Chatbot.js` to add more information:

```javascript
const knowledgeBase = {
  // Add new categories
  education: [
    "Kapital has extensive experience in software development...",
  ],
  // Add more keywords
  keywordMap: {
    education: ['education', 'degree', 'university', 'learned'],
  }
}
```

### Styling

Customize the chatbot appearance in `styles/Chatbot.module.css`:
- Change colors to match your brand
- Adjust size and position
- Modify animations

## Current Status

✅ **Fully Functional** - The chatbot is ready to use with the rule-based system!

The chatbot will appear on all pages and is ready to answer questions about you and your work.
