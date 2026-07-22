import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email } = req.body

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required.' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `You received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}`,
      html: `
        <h2>New portfolio contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    })

    return res.status(200).json({ message: 'Message sent successfully.' })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({ message: 'Failed to send message.' })
  }
}

