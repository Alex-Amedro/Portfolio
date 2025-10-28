# 🚀 Déployer sur Vercel

## Méthode 1 : Via GitHub (Recommandé)

### 1️⃣ Préparer ton projet

```bash
# Assure-toi que tout est commité
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2️⃣ Créer un compte Vercel

1. Va sur [vercel.com](htteady for deployment"
git pushps://vercel.com)
2. Clique sur "Sign Up"
3. **Connecte-toi avec GitHub** (c'est important !)

### 3️⃣ Importer ton projet

1. Une fois connecté, clique sur **"Add New..."** → **"Project"**
2. Vercel va lister tous tes repos GitHub
3. Trouve **"Portfolio"** et clique sur **"Import"**

### 4️⃣ Configuration

Vercel détecte automatiquement Astro ! Vérifie que :

```
Framework Preset: Astro
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

**Important** : Ajoute cette variable d'environnement si besoin :
- `NODE_VERSION` = `18`

### 5️⃣ Déployer

1. Clique sur **"Deploy"**
2. Attends 1-2 minutes ⏳
3. Ton site est en ligne ! 🎉

Tu auras une URL du type : `portfolio-alex-amedro.vercel.app`

---

## Méthode 2 : Via CLI Vercel

### Installation

```bash
npm install -g vercel
```

### Déploiement

```bash
# Dans le dossier de ton projet
cd /home/fret/Bureau/Portfolio

# Login (ouvre le navigateur)
vercel login

# Premier déploiement
vercel

# Suivre les instructions :
# - Set up and deploy? Yes
# - Which scope? Ton compte
# - Link to existing project? No
# - Project name? portfolio (ou autre)
# - Directory? ./
# - Override settings? No
```

### Déploiement en production

```bash
vercel --prod
```

---

## 🔧 Configuration recommandée

### Fichier `vercel.json` (optionnel)

Crée ce fichier à la racine si tu veux plus de contrôle :

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "astro",
  "regions": ["cdg1"]
}
```

`cdg1` = serveur Paris (meilleure latence pour l'Europe)

---

## 🌐 Domaine personnalisé (Optionnel)

Si tu as un nom de domaine (ex: `alexandreamedro.com`) :

1. Va dans ton projet Vercel
2. **Settings** → **Domains**
3. Ajoute ton domaine
4. Suis les instructions pour configurer les DNS

---

## 🔄 Mises à jour automatiques

Une fois configuré avec GitHub :

```bash
# À chaque push sur main, Vercel redéploie automatiquement !
git add .
git commit -m "Update portfolio"
git push
```

Vercel rebuild et redéploie automatiquement en 1-2 minutes 🚀

---

## 📊 Suivi

### Dashboard Vercel
- Visites du site
- Performance
- Logs de build
- Temps de chargement

### Analytics (Gratuit !)

Dans ton projet Vercel :
1. **Analytics** tab
2. Active "Vercel Analytics"
3. Voir les stats de visiteurs en temps réel

---

## ✅ Checklist avant déploiement

- [ ] Le build fonctionne localement (`npm run build`)
- [ ] Pas d'erreurs TypeScript
- [ ] Les images sont optimisées (< 500 Ko)
- [ ] Les fichiers CV sont uploadés dans `public/cv/`
- [ ] L'ID Formspree est configuré dans `ContactForm.astro`
- [ ] `.gitignore` contient `node_modules/` et `dist/`

---

## 🆘 Problèmes courants

### Build échoue sur Vercel

```bash
# Teste localement d'abord
npm run build

# Si ça marche localement mais pas sur Vercel :
# Vérifie la version de Node dans Settings → Environment Variables
# Ajoute : NODE_VERSION = 18
```

### Images ne s'affichent pas

```bash
# Les chemins doivent être absolus depuis public/
# ✅ Correct : /avatar.jpg
# ❌ Incorrect : ./avatar.jpg ou ../public/avatar.jpg
```

### Formspree ne marche pas

```bash
# N'oublie pas de remplacer YOUR_FORM_ID dans ContactForm.astro
# avec ton vrai ID Formspree
```

---

## 🎯 Résultat

Ton portfolio sera accessible à :
- URL Vercel : `https://ton-projet.vercel.app`
- Ton domaine (si configuré) : `https://tondomaine.com`

**Avec :**
- ✅ HTTPS automatique
- ✅ CDN mondial (super rapide partout)
- ✅ Déploiements automatiques
- ✅ Preview pour chaque PR GitHub
- ✅ Analytics gratuits

---

Besoin d'aide ? Demande-moi ! 🚀
