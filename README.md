# Portfolio Website - Next.js

A modern, responsive portfolio website built with Next.js, featuring a dark theme with orange accents.

## Features

- 🎨 Modern dark theme with orange accents
- 📱 Fully responsive design
- ⚡ Built with Next.js for optimal performance
- 🎯 Smooth scrolling navigation
- 💼 Project showcase section
- 📧 Contact form
- 🎭 Beautiful animations and transitions

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── components/          # React components
│   ├── Header.js
│   ├── Hero.js
│   ├── Skills.js
│   ├── About.js
│   ├── Projects.js
│   └── Contact.js
├── pages/              # Next.js pages
│   ├── _app.js
│   └── index.js
├── styles/             # CSS modules
│   ├── globals.css
│   ├── Header.module.css
│   ├── Hero.module.css
│   ├── Skills.module.css
│   ├── About.module.css
│   ├── Projects.module.css
│   └── Contact.module.css
└── public/             # Static assets
```

## Customization

You can customize the portfolio by:

1. Updating personal information in the components
2. Adding your own projects in `components/Projects.js`
3. Modifying colors and styles in the CSS module files
4. Adding your profile image to the Hero section

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- Next.js 14
- React 18
- CSS Modules
- Font Awesome Icons
