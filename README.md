# Portfolio d'Alexandre Amedro

Portfolio personnel moderne et multilingue (Français, Anglais, Chinois) créé avec Astro et Tailwind CSS.

## 🚀 Démarrage rapide

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualisation de la production
npm run preview
```

Le site sera accessible sur `http://localhost:4321` (ou 4322 si le port est occupé).

## ✅ Configuration requise

### 1. Formulaire de contact (Formspree)

Le formulaire de contact utilise **Formspree** pour l'envoi d'emails.

**Étapes :**
1. Créer un compte sur [https://formspree.io/](https://formspree.io/)
2. Créer un nouveau formulaire
3. Copier l'ID du formulaire (format: `xxxxxxxxxxx`)
4. Remplacer dans `src/components/ContactForm.astro` ligne 10 :
   ```typescript
   const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
   ```
   Par :
   ```typescript
   const formspreeEndpoint = 'https://formspree.io/f/VOTRE_ID_ICI';
   ```

### 2. Google Analytics (optionnel)

Pour activer Google Analytics :

1. Créer une propriété GA4 sur [Google Analytics](https://analytics.google.com/)
2. Copier l'ID de mesure (format: `G-XXXXXXXXXX`)
3. Remplacer dans `src/layouts/Layout.astro` ligne 14 :
   ```typescript
   const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
   ```
   Par :
   ```typescript
   const GA_MEASUREMENT_ID = 'G-VOTRE_ID_ICI';
   ```

### 3. CV PDF

Ajouter vos fichiers CV dans le dossier `public/cv/` avec ces noms :
- `Alexandre_Amedro_CV_FR.pdf` (version française)
- `Alexandre_Amedro_CV_EN.pdf` (version anglaise)
- `Alexandre_Amedro_CV_ZH.pdf` (version chinoise)

### 4. Sitemap

Mettre à jour l'URL de base dans `src/pages/sitemap.xml.ts` ligne 5 :
```typescript
const BASE_URL = 'https://your-domain.com';
```
Remplacer par votre nom de domaine réel.

### 5. Robots.txt

Mettre à jour l'URL dans `public/robots.txt` ligne 9 :
```
Sitemap: https://your-domain.com/sitemap.xml
```

### 6. Favicon (optionnel)

Ajouter un fichier `favicon.svg` dans le dossier `public/`.

Vous pouvez créer un favicon sur :
- [Favicon.io](https://favicon.io/)
- [RealFaviconGenerator](https://realfavicongenerator.net/)

## 📂 Structure du projet

```
/
├── public/
│   ├── cv/                    # Vos fichiers CV PDF
│   │   ├── Alexandre_Amedro_CV_FR.pdf
│   │   ├── Alexandre_Amedro_CV_EN.pdf
│   │   └── Alexandre_Amedro_CV_ZH.pdf
│   ├── robots.txt             # Configuration SEO
│   └── favicon.svg            # À ajouter
├── src/
│   ├── components/            # Composants réutilisables
│   │   ├── ContactForm.astro
│   │   ├── CVDownload.astro
│   │   ├── EducationTimeline.astro
│   │   ├── ExperienceCard.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── LanguageSwitcher.astro
│   │   ├── Languages.astro
│   │   ├── ProjectCard.astro
│   │   └── ThemeToggle.astro
│   ├── data/                  # Données du site
│   │   ├── education.ts       # Formation
│   │   ├── experience.ts      # Expériences
│   │   ├── projects.ts        # Projets
│   │   ├── skills.ts          # Compétences
│   │   └── translations.ts    # Traductions
│   ├── layouts/
│   │   └── Layout.astro       # Layout principal
│   ├── pages/
│   │   ├── [lang]/
│   │   │   ├── index.astro    # Page d'accueil
│   │   │   └── projects/
│   │   │       ├── index.astro
│   │   │       └── [slug].astro
│   │   ├── index.astro        # Redirection vers /en
│   │   └── sitemap.xml.ts     # Sitemap dynamique
│   └── styles/
│       └── globals.css        # Styles globaux
├── astro.config.mjs
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Fonctionnalités

- ✅ **Multi-langue** : Support complet FR/EN/ZH
- ✅ **Mode sombre** : Toggle avec persistance localStorage
- ✅ **Formation** : Timeline avec ENSEEIHT, NCKU Taiwan, Prépa PSI*
- ✅ **Expérience** : Stage Neiji, Association Genius7
- ✅ **Compétences** : C++, Python, AI, Computer Vision, etc.
- ✅ **Langues** : Français (natif), Anglais (courant), Chinois (apprentissage)
- ✅ **Téléchargement CV** : Bouton animé pour télécharger le CV
- ✅ **Formulaire de contact** : Formspree avec validation
- ✅ **SEO optimisé** : Meta tags, sitemap, robots.txt
- ✅ **Google Analytics** : Prêt à configurer
- ✅ **Responsive** : Design adaptatif mobile/desktop
- ✅ **Performance** : Optimisé avec Astro

## 🎯 Prochaines étapes

1. Ajouter vos CV PDF dans `public/cv/`
2. Configurer Formspree pour le formulaire
3. Configurer Google Analytics (optionnel)
4. Ajouter un favicon
5. Remplacer les projets template par vos vrais projets dans `src/data/projects.ts`
6. Ajouter des images/logos pour les écoles et entreprises (optionnel)
7. Déployer sur Vercel, Netlify, ou GitHub Pages

## 📝 Personnalisation

### Modifier les informations personnelles

Les informations sont dans `src/data/translations.ts`.

### Ajouter un projet

Modifier `src/data/projects.ts` :
```typescript
{
  id: '21',
  titleEn: 'Mon nouveau projet',
  titleFr: 'Mon nouveau projet',
  titleZh: '我的新项目',
  // ... autres champs
}
```

### Modifier les couleurs

Dans `tailwind.config.js`, section `extend.colors`.

## 🌐 Déploiement

### Vercel (recommandé)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Glisser-déposer le dossier dist/ sur Netlify
```

### GitHub Pages
Voir la [documentation Astro](https://docs.astro.build/en/guides/deploy/github/)

## 📧 Contact

Alexandre Amedro
- Email: alex.amedro@gmail.com
- GitHub: [@Alex-Amedro](https://github.com/Alex-Amedro)
- LinkedIn: [alexandre-amedro](https://linkedin.com/in/alexandre-amedro-21688a323)

---

Créé avec ❤️ en utilisant [Astro](https://astro.build) et [Tailwind CSS](https://tailwindcss.com)
