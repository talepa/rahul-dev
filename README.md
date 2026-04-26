# 🚀 Rahul Talepa - AI Engineer Portfolio

A production-ready, highly interactive portfolio website showcasing AI/ML engineering expertise with futuristic design and smooth animations.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-cyan)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10-pink)

## ✨ Features

### 🎨 Design
- **Glassmorphism UI** with subtle neon glow effects
- **Dark theme** with animated gradients
- **Neural network particle background** using Three.js
- **Smooth scroll animations** with Framer Motion
- **Custom cursor trail** for desktop
- **Responsive design** for all devices

### 🧩 Sections
1. **Hero** - Animated typing intro with particle network
2. **About** - Narrative storytelling with stat highlights
3. **Experience** - Interactive timeline with expandable cards
4. **Projects** - Detailed project cards with tech stack & results
5. **Skills** - Visual skill bars with animated progress
6. **GitHub** - Live repository integration with stats
7. **Contact** - Working contact form with social links

### 🎁 Bonus Features (Making It Stand Out!)
- **AI Chatbot** 🤖 - Interactive assistant that answers questions about Rahul
- **Command Palette** ⌘K - VS Code-style quick navigation (press Cmd+K or Ctrl+K)
- **Easter Egg** 🎮 - Hidden Konami Code surprise (try ↑↑↓↓←→←→BA)
- **Live GitHub Stats** 📊 - Real-time repository data from GitHub API
- **Custom Cursor** 🎯 - Animated cursor trail effect on desktop

### ⚡ Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js + React Three Fiber
- **UI Components**: Radix UI + ShadCN
- **Icons**: Lucide React
- **API Integration**: GitHub REST API

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download the project**
```bash
cd ai-portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📦 Deploy to Vercel

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

2. **Deploy on Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Vercel will auto-detect Next.js
- Click Deploy

## 🎨 Customization

### Update Personal Info
Edit the following files:
- `components/Hero.tsx` - Name, role, tagline
- `components/About.tsx` - About content, stats
- `components/Experience.tsx` - Work experience
- `components/Projects.tsx` - Project details
- `components/Skills.tsx` - Technical skills
- `components/Contact.tsx` - Contact information

### Add Resume PDF
Place your resume PDF in `/public/resume.pdf`

### Change Colors
Edit `tailwind.config.ts` to customize:
- Neon colors (`neon-blue`, `neon-purple`, `neon-pink`)
- Background gradients
- Border colors

## 📁 Project Structure

```
ai-portfolio/
├── app/
│   ├── globals.css          # Global styles + custom utilities
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── badge.tsx
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Experience.tsx       # Experience timeline
│   ├── Projects.tsx         # Projects grid
│   ├── Skills.tsx           # Skills visualization
│   ├── GitHubSection.tsx    # GitHub repos integration (NEW!)
│   ├── Contact.tsx          # Contact form
│   ├── Navbar.tsx           # Navigation bar
│   ├── Footer.tsx           # Footer
│   ├── ParticleNetwork.tsx  # 3D particle background
│   ├── CursorTrail.tsx      # Custom cursor effect
│   ├── AIChatbot.tsx        # AI assistant chatbot (BONUS!)
│   ├── CommandPalette.tsx   # Command palette ⌘K (BONUS!)
│   └── EasterEgg.tsx        # Konami code easter egg (BONUS!)
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
├── package.json
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript config
└── next.config.js           # Next.js config
```

## 🎯 Key Features Explained

### 1. **Particle Network Background**
Uses React Three Fiber to create an animated neural network effect with particles and connections.

### 2. **Glassmorphism Design**
Custom CSS utilities (`glass`, `glass-strong`) create frosted glass effects with blur and transparency.

### 3. **Neon Glow Effects**
CSS box-shadow animations create glowing effects on hover for interactive elements.

### 4. **Smooth Animations**
Framer Motion's `useInView` hook triggers animations when sections scroll into view.

### 5. **Interactive Timeline**
Experience cards expand on click to show detailed achievements.

### 6. **Responsive Design**
Mobile-first approach with Tailwind's responsive utilities.

### 7. **AI Chatbot (BONUS!)** 🤖
- Click the purple chat button (bottom-right)
- Ask about skills, experience, projects, or contact info
- Pre-fed knowledge base with intelligent responses
- Animated typing indicators and smooth message flow

### 8. **Command Palette (BONUS!)** ⌘K
- Press `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux)
- Quick navigation to any section
- Search functionality
- Keyboard shortcuts for power users
- Direct links to GitHub, LinkedIn, Email, Resume

### 9. **Easter Egg (BONUS!)** 🎮
- Enter Konami Code: `↑ ↑ ↓ ↓ ← → ← → B A`
- Surprise animation for developers who know the code
- Auto-dismisses after 5 seconds

### 10. **Live GitHub Integration** 📊
- Fetches real repository data from GitHub API
- Shows latest 6 projects with:
  - Stars and forks count
  - Primary language with color coding
  - Topics/tags
  - Direct links to repos

## 🛠 Performance Optimizations

- **Lazy loading** for Three.js components
- **Code splitting** with Next.js automatic optimization
- **Optimized animations** with GPU acceleration
- **Fast builds** with Turbopack (Next.js 14)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contact

**Rahul Talepa**
- Email: talepa.rahul6@gmail.com
- LinkedIn: [linkedin.com/in/rahultalepa](https://www.linkedin.com/in/rahultalepa/)
- GitHub: [github.com/talepa](https://github.com/talepa)

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.
# rahul-dev
