# 🔧 Setup & Deployment Guide

Complete guide to set up, customize, and deploy your AI Engineer portfolio.

## 📋 Table of Contents
1. [Local Development Setup](#local-development-setup)
2. [Customization Guide](#customization-guide)
3. [Deployment Options](#deployment-options)
4. [Troubleshooting](#troubleshooting)

---

## 🚀 Local Development Setup

### Step 1: Prerequisites
Ensure you have:
- **Node.js 18+** ([Download](https://nodejs.org/))
- **npm** or **yarn** (comes with Node.js)
- **Git** (optional, for version control)

Check versions:
```bash
node --version  # Should be 18 or higher
npm --version
```

### Step 2: Install Dependencies
```bash
cd ai-portfolio
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Three.js
- All UI components

### Step 3: Run Development Server
```bash
npm run dev
```

Visit: **http://localhost:3000**

You should see:
- ✅ Animated hero section with particles
- ✅ Smooth scroll animations
- ✅ Interactive timeline
- ✅ Glassmorphism effects

---

## 🎨 Customization Guide

### 1. Personal Information

#### Update Name & Contact
**File**: `components/Hero.tsx`
```typescript
// Line 8
const fullText = 'Your custom tagline here.'

// Line 50-52
<h1>Your Name</h1>

// Social links (lines 90-110)
href="https://github.com/YOUR_USERNAME"
href="https://linkedin.com/in/YOUR_USERNAME"
href="mailto:your.email@example.com"
```

#### Update About Section
**File**: `components/About.tsx`
```typescript
// Lines 30-60
// Edit your journey narrative
<p>Your custom story...</p>

// Update stats (lines 70-110)
// Change CGPA, accuracy, ROC-AUC values
```

### 2. Experience & Projects

#### Add/Edit Work Experience
**File**: `components/Experience.tsx`
```typescript
// Lines 6-30
const experiences = [
  {
    id: 1,
    role: 'Your Role',
    company: 'Company Name',
    period: 'Start – End',
    color: 'neon-blue', // or neon-purple, neon-pink
    achievements: [
      'Achievement 1',
      'Achievement 2',
    ],
  },
  // Add more experiences
]
```

#### Update Projects
**File**: `components/Projects.tsx`
```typescript
// Lines 7-50
const projects = [
  {
    id: 1,
    title: 'Project Name',
    icon: TrendingUp, // Choose from lucide-react
    tagline: 'Short description',
    problem: 'What problem did you solve?',
    approach: 'How did you solve it?',
    tech: ['Tech1', 'Tech2', 'Tech3'],
    results: [
      'Result 1',
      'Result 2',
    ],
    color: 'neon-blue',
    github: 'https://github.com/YOUR_REPO',
  },
]
```

### 3. Skills

#### Customize Skill Categories
**File**: `components/Skills.tsx`
```typescript
// Lines 6-80
const skillCategories = [
  {
    category: 'Your Category',
    icon: Brain, // lucide-react icon
    color: 'neon-blue',
    skills: [
      { name: 'Skill Name', level: 90 }, // 0-100
    ],
  },
]
```

### 4. Contact Information

#### Update Contact Details
**File**: `components/Contact.tsx`
```typescript
// Update email, phone, social links
// Lines 60-100

// Email
href="mailto:your.email@example.com"

// Phone
href="tel:YOUR_PHONE"

// Social links
href="https://linkedin.com/in/YOUR_USERNAME"
href="https://github.com/YOUR_USERNAME"
```

### 5. Add Your Resume

1. Export your resume as **PDF**
2. Name it `resume.pdf`
3. Place in `/public/resume.pdf`
4. The download button will automatically work

### 6. Color Customization

#### Change Neon Colors
**File**: `tailwind.config.ts`
```typescript
// Lines 55-60
neon: {
  blue: "#00f0ff",    // Change hex color
  purple: "#a855f7",  // Change hex color
  pink: "#ec4899",    // Change hex color
}
```

### 7. Add Profile Photo (Optional)

1. Add your photo to `/public/profile.jpg`
2. Update `About.tsx`:

```typescript
import Image from 'next/image'

// Add in About component
<Image
  src="/profile.jpg"
  alt="Rahul Talepa"
  width={300}
  height={300}
  className="rounded-full neon-glow"
/>
```

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)
**Free, Fast, Zero Config**

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ai-portfolio.git
git push -u origin main
```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect GitHub
   - Select your repository
   - Click "Deploy"

3. **Custom Domain** (Optional):
   - Go to Project Settings
   - Domains → Add your domain
   - Update DNS records

**Live in 2 minutes!** ✨

### Option 2: Netlify
1. Build the project:
```bash
npm run build
```

2. Deploy folder: `.next`
3. Build command: `npm run build`
4. Publish directory: `.next`

### Option 3: GitHub Pages
Not recommended for Next.js (requires static export).

### Option 4: Self-Hosted (VPS)
```bash
# Build
npm run build

# Start production server
npm start

# Use PM2 for process management
npm install -g pm2
pm2 start npm --name "portfolio" -- start
```

---

## 🐛 Troubleshooting

### Issue 1: Dependencies Not Installing
```bash
# Clear cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Issue 2: Port 3000 Already in Use
```bash
# Run on different port
PORT=3001 npm run dev
```

### Issue 3: Three.js Not Rendering
- Check browser console for WebGL errors
- Ensure GPU acceleration is enabled
- Some browsers don't support WebGL

### Issue 4: Animations Not Working
- Clear browser cache
- Check Framer Motion is installed:
```bash
npm list framer-motion
```

### Issue 5: Build Errors
```bash
# Type check
npm run type-check

# Lint
npm run lint
```

---

## 📊 Performance Tips

### 1. Optimize Images
- Use WebP format
- Compress images ([TinyPNG](https://tinypng.com/))
- Use Next.js `<Image>` component

### 2. Lazy Load Heavy Components
```typescript
import dynamic from 'next/dynamic'

const ParticleNetwork = dynamic(() => import('./ParticleNetwork'), {
  ssr: false,
})
```

### 3. Analyze Bundle Size
```bash
npm run build
# Check .next/build-manifest.json
```

---

## 🔐 Environment Variables (Optional)

Create `.env.local` for:
```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

---

## 📱 Testing

### Test Responsiveness
- Desktop: Chrome, Firefox, Safari
- Mobile: iOS Safari, Chrome Mobile
- Tablet: iPad

### Performance Testing
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

---

## 🎯 Next Steps

1. ✅ Customize all content
2. ✅ Add resume PDF
3. ✅ Test locally
4. ✅ Push to GitHub
5. ✅ Deploy to Vercel
6. ✅ Share your portfolio!

---

## 💡 Tips

- **Update regularly** with new projects
- **Add blog section** for articles
- **Integrate analytics** (Google Analytics, Vercel Analytics)
- **Add testimonials** from colleagues
- **Include certificates** if relevant

---

Need help? Check:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

Good luck! 🚀
