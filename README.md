# Portfolio - Modern Multilingual Website

Professional portfolio website built with Astro and Tailwind CSS. Supports French, English, and Chinese.

**Live:** [https://your-domain.com](https://your-domain.com)

## Technologies

- **Framework**: Astro 4.x (Static Site Generator)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: Formspree API
- **Analytics**: Google Analytics (optional)
- **Deployment**: Vercel / Netlify / GitHub Pages

## Features

### Internationalization
- Three languages: French, English, Chinese
- SEO-friendly URLs (`/en`, `/fr`, `/zh`)
- Language switcher in header
- Locale-specific date formatting
- Multi-language CV downloads

### UI/UX
- Dark/Light theme toggle with localStorage persistence
- Responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Accessible navigation (ARIA labels)
- Optimized images (eager/lazy loading)

### Content
- Hero section with call-to-action
- Education timeline (ENSEEIHT, NCKU Taiwan, Prépa PSI*)
- Professional experience showcase
- Technical projects with detailed pages
- Skills matrix (C++, Python, AI, Computer Vision, etc.)
- Language proficiency indicators
- Working contact form

### Performance
- Static site generation
- Perfect Lighthouse scores
- Minimal JavaScript bundle
- Fast build times
- SEO optimized (sitemap, meta tags, robots.txt)

## Installation

### Prerequisites

```bash
# Node.js 18+ and npm required
node --version
npm --version
```

### Setup

```bash
# Clone repository
git clone https://github.com/Alex-Amedro/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Build

```bash
# Production build
npm run build

# Preview production build
npm run preview
```

## Configuration

Before deployment, configure these files:

1. **Contact Form** - Update Formspree endpoint in `src/components/ContactForm.astro`:
   ```typescript
   const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
   ```

2. **Google Analytics** (optional) - Add measurement ID in `src/layouts/Layout.astro`:
   ```typescript
   const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
   ```

3. **Base URL** - Update domain in `src/pages/sitemap.xml.ts`:
   ```typescript
   const BASE_URL = 'https://your-domain.com';
   ```

4. **CV Files** - Add PDF files in `public/cv/`:
   - `Alexandre_Amedro_CV_FR.pdf`
   - `Alexandre_Amedro_CV_EN.pdf`
   - `Alexandre_Amedro_CV_ZH.pdf`

5. **Robots.txt** - Update sitemap URL in `public/robots.txt`:
   ```
   Sitemap: https://your-domain.com/sitemap.xml
   ```

## Structure

```
/
├── public/
│   ├── cv/              # CV PDF files
│   ├── projects/        # Project images
│   ├── robots.txt
│   └── favicon.svg
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ContactForm.astro
│   │   ├── CVDownload.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── LanguageSwitcher.astro
│   │   ├── ThemeToggle.astro
│   │   └── ProjectCard.astro
│   ├── data/           # Content & translations
│   │   ├── education.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── translations.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── [lang]/
│   │   │   ├── index.astro
│   │   │   └── projects/
│   │   │       ├── index.astro
│   │   │       └── [slug].astro
│   │   ├── index.astro
│   │   └── sitemap.xml.ts
│   └── styles/
│       └── globals.css
├── astro.config.mjs
├── package.json
└── tailwind.config.js
```

## Customization

### Adding Projects

Edit `src/data/projects.ts`:

```typescript
{
  id: '2',
  slug: 'my-project',
  titleEn: 'My Project',
  titleFr: 'Mon Projet',
  titleZh: '我的项目',
  descriptionEn: 'Project description...',
  // ... other fields
}
```

### Modifying Translations

Edit `src/data/translations.ts` to update site content.

### Changing Theme Colors

Update colors in `tailwind.config.js`:

```javascript
colors: {
  primary: '#your-color',
  // ...
}
```

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy dist/ folder via Netlify UI or CLI
```

### GitHub Pages

See [Astro deployment guide](https://docs.astro.build/en/guides/deploy/github/)

## Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run astro     # Run Astro CLI
```

## Tech Stack

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## License

MIT License - see [LICENSE](LICENSE)

## Author

**Alexandre Amedro** -

📧 [alex.amedro@gmail.com](mailto:alex.amedro@gmail.com)  
💼 [LinkedIn](https://linkedin.com/in/alexandre-amedro-21688a323)  
🐙 [GitHub](https://github.com/Alex-Amedro)



