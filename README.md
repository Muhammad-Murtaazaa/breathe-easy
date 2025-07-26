# 🌬️ BreatheEasy — Guided Breathing Web App

> **A calming, mobile-first, open-source React app for mindful breathing and focus.**

---

## ✨ Live Demo

_(Add your live site link here, e.g. [breatheeasy.vercel.app](https://breatheeasy.vercel.app) or a screenshot)_

---

## 🚀 Features

- **Minimal Glassmorphic UI:** Experience a soothing glass design, soft backgrounds, and beautiful shadowing.  
- **Perfect Responsiveness:**  
  - Vertical layout and sizing adapt to mobile, tablet, and desktop.  
  - Mini icon navbar on mobile for thumb-friendly navigation.  
- **Breathing Patterns:**  
  - Box Breathing, 4-7-8, Triangle, Equal, Relaxed, Energizing, & “Custom”.  
  - Switch patterns instantly (when not in session).  
  - Lock pattern selection while a session is running for better focus.  
- **Pulse Animation:**  
  - Central circle expands/contracts to visually guide breath phase (Inhale, Hold, Exhale).  
- **Ultra-Readable Timer:**  
  - Big bold monospace timer always in view.  
  - Progress bar tracks session at a glance.  
- **Pattern Carousel:**  
  - Tap little glass arrows to cycle through preset and custom patterns.  
  - Card displays all phases for each pattern.  
  - Custom pattern editor: Add, rename, and reorder your own breathing steps and durations.  
- **Glass Buttons & Controls:**  
  - CTA and selects are mobile-friendly and tactile.  
- **Info/Support Pages:**  
  - “About” highlights open source, repo, author, and portfolio.  
  - “Support Us” invites feedback and sharing.  
- **Ad-Free & Open Source!**

---

## 📸 Screenshots

| Desktop | Mobile |
|--------|--------|
| ![desktop](assets/desktop-preview.png) | ![mobile](assets/mobile-preview.png) |

---

## 🛠️ Tech Stack

- **React** (Functional Components & Hooks)  
- **Styled-Components** (theming, glass.)  
- **React Router** (multi-page UI)  
- **Framer Motion** (for subtle breathing animations)  
- **Pure CSS** (glass, responsiveness, mini-navbar)  
- **No external APIs** — No ads, no tracking.

---

## 🌈 Getting Started

Clone, install, and run:

```bash
git clone https://github.com/your-github/breatheeasy.git
cd breatheeasy
npm install
npm start
Open http://localhost:3000 to view it in your browser.
```
## 🧑‍💻 Folder Structure
```
src/
├── App.jsx
├── App.css
├── patterns.js
├── components/
│   ├── NavBar.jsx
│   ├── NavBar.css
│   ├── BreathingCircle.jsx
│   ├── PatternCarousel.jsx
│   ├── About.jsx
│   └── SupportUs.jsx
└── AuroraCanvasBackground.jsx
```
🎨 Customization Tips
Edit patterns.js:
Add or change any preset patterns.

Change Colors or Sizes:
Tweak variables in App.css and NavBar.css.

Mini Navbar (Mobile):
Emoji icons for fast navigation: 🏠 ℹ️ 💖

Custom Pattern:
Use the plus (+) and minus (-) buttons to add/remove phases while editing “Custom”.

🧠 What I Learned
Mastered advanced CSS glassmorphism and responsive layouts.

Implemented robust session logic with React hooks.

Managed UI state to provide instant, accurate feedback.

Prioritized mental wellness & accessibility with delightful aesthetic choices!

Used modular, scalable component design for easy updates.

💡 Why I Built This
Finding moments in your day for calm is hard. BreatheEasy is designed to be the gentlest, quickest, prettiest way to practice—on any device, open source forever.

🤝 Contributing
Pull requests and issues welcome! If you have a feedback, suggestion, bug, or want to submit a custom pattern PR:

Open an issue

Fork and make a PR

Or just star ⭐️ the repo if you enjoy it!

📖 License
MIT — use, remix, and share.

💙 Author
Made with love by Your Name
Code on GitHub

🧘 Happy Breathing!
markdown
Copy
Edit

Let me know if you'd like me to:
- Replace placeholders like `your-github`, `Your Name`, or screenshot paths.
- Convert this into a `README.md` file and export it.
- Add badges (e.g., GitHub stars, license, built with React, etc.).
