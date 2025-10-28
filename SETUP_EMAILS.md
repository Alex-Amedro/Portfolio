# 📧 Activer les emails avec Formspree

## 🚀 Étape 1 : Créer un compte Formspree

1. Va sur **[formspree.io](https://formspree.io)**
2. Clique sur **"Sign Up"** (ou "Get Started")
3. Crée un compte avec ton email

## 📝 Étape 2 : Créer un formulaire

1. Une fois connecté, clique sur **"Create"** ou **"New Form"**
2. Donne un nom : `Portfolio Contact Form`
3. Clique sur **"Create Form"**

## 🔑 Étape 3 : Récupérer l'ID du formulaire

Formspree te donne une URL qui ressemble à :
```
https://formspree.io/f/XXXXXXXX
```

**Copie la partie `XXXXXXXX`** (c'est ton Form ID)

Par exemple, si l'URL est :
```
https://formspree.io/f/xyzabc123
```

Ton ID est : `xyzabc123`

## ⚙️ Étape 4 : Configurer ton portfolio

### Méthode 1 : Fichier ContactForm.astro

Ouvre `src/components/ContactForm.astro` et remplace ligne 10 :

```astro
// AVANT (avec placeholder)
const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';

// APRÈS (avec ton ID)
const formspreeEndpoint = 'https://formspree.io/f/xyzabc123';
```

### Exemple complet :

```astro
---
// src/components/ContactForm.astro

// ✅ REMPLACE CE FORMID PAR LE TIEN !
const formspreeEndpoint = 'https://formspree.io/f/xyzabc123';
---
```

## 🧪 Étape 5 : Tester

1. Sauvegarde le fichier
2. Lance le serveur : `npm run dev`
3. Va à **http://localhost:4322**
4. Scroll jusqu'à la section **"Contact"**
5. Remplis le formulaire et clique **"Send"**
6. Tu devrais recevoir l'email ! 📬

## ✅ Vérifier que ça marche

Va sur **[formspree.io](https://formspree.io)** dans ton dashboard :
- Clique sur ton formulaire
- Tu dois voir le message reçu dans la section **"Submissions"**

## 🎯 Options avancées (Optionnel)

### Redirection après soumission

Pour rediriger vers une page après l'envoi, ajoute :

```astro
<form 
  id="contact-form"
  action={formspreeEndpoint}
  method="POST"
  class="space-y-6 bg-white dark:bg-dark-bg-secondary rounded-lg shadow-lg p-8"
  data-confirm="Message sent successfully!"
>
```

### Email de notification

Dans le dashboard Formspree :
1. Ouvre ton formulaire
2. **Settings** → **Email Settings**
3. Ajoute les emails qui doivent recevoir les messages

### Réponse automatique

Formspree peut envoyer une réponse auto au visiteur (c'est gratuit) :

1. Ton dashboard Formspree
2. **Settings** → **Email Notifications**
3. Active **"Autoresponse"**
4. Écris le message

---

## 🔒 Sécurité

**Important :** Ton Form ID peut être public (c'est dans le code du site), Formspree gère la sécurité pour que personne puisse abuser du formulaire.

---

## 🆘 Problèmes courants

### "Formulaire ne marche pas"

```bash
# Teste en console du navigateur (F12)
# Tu dois voir l'email dans Formspree Dashboard > Submissions
```

### "Je ne reçois pas d'emails"

1. **Vérifie que ton Form ID est bon** dans `ContactForm.astro`
2. **Regarde dans les spams** (Gmail, Outlook, etc.)
3. **Configure un email de notification** dans Formspree Settings

### "Erreur 422 ou 429"

- C'est un problème temporaire de Formspree
- Réessaie dans 1 minute
- Ou crée un nouveau formulaire

---

## 💾 Résumé des actions

```bash
1. Va sur formspree.io → Crée un compte
2. Crée un nouveau formulaire
3. Copie ton Form ID (exemple: xyzabc123)
4. Ouvre src/components/ContactForm.astro
5. Remplace 'YOUR_FORM_ID' par ton ID réel
6. Sauvegarde et teste !
```

---

## 🚀 Après déploiement sur Vercel

Une fois ton site en ligne :
1. Va sur ton portfolio (ex: `portfolio-alex-amedro.vercel.app`)
2. Remplis le formulaire contact
3. Les emails arrivent chez toi ! 📧

---

Besoin d'aide ? 💬
