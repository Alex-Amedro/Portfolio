// src/data/translations.ts
export const translations = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      title: 'Hi, I\'m Alexandre Amedro',
      subtitle: 'Multimedia Engineering Student',
      cta: 'View My Work',
    },
    about: {
      title: 'About Me',
      description: 'Master\'s student (M1) at ENSEEIHT, specializing in Imaging and Multimedia, currently on an academic exchange in Taiwan. I am interested in all areas related to multimedia, including computer graphics, computer vision, audio and video signal processing, machine learning, and data analysis.',
    },
    featured: {
      title: 'My Best Work',
      viewAll: 'View All Projects',
    },
    contact: {
      title: 'Let\'s Talk',
      description: 'Have an exciting project? Feel free to reach out. I\'m always open to new opportunities.',
      send: 'Send Message',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: {
      rights: 'All rights reserved',
      home: 'Home',
      projects: 'Projects',
      contact: 'Contact',
    },
    projects: {
      viewProject: 'View Project',
      viewLive: 'View Live',
      viewOnGithub: 'View on GitHub',
      comingSoon: 'Coming Soon',
      challenge: 'Challenge',
      solution: 'Solution',
      learnings: 'Learnings',
      stack: 'Tech Stack',
      status: 'Status',
      completed: 'Completed',
      inProgress: 'In Progress',
      date: 'Date',
      previous: 'Previous Project',
      next: 'Next Project',
      allProjects: 'All Projects',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      projects: 'Projets',
      contact: 'Contact',
    },
    hero: {
      title: 'Bonjour, je suis Alexandre Amedro',
      subtitle: 'Étudiant Ingénieur en Imagerie Multimédia',
      cta: 'Voir mes réalisations',
    },
    about: {
      title: 'À propos',
      description: 'Étudiant en Master 1 à l\'ENSEEIHT, spécialisé en Imagerie et Multimédia, actuellement en échange universitaire à Taïwan. Je m\'intéresse à tous les domaines liés au multimédia, notamment l\'informatique graphique, la vision par ordinateur, le traitement du signal audio et vidéo, l\'apprentissage automatique et l\'analyse de données.',
    },
    featured: {
      title: 'Mon Meilleur Travail',
      viewAll: 'Voir Tous les Projets',
    },
    contact: {
      title: 'Parlons Ensemble',
      description: 'Vous avez un projet intéressant? N\'hésitez pas à me contacter. Je suis toujours ouvert aux nouvelles opportunités.',
      send: 'Envoyer',
      email: 'E-mail',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: {
      rights: 'Tous les droits réservés',
      home: 'Accueil',
      projects: 'Projets',
      contact: 'Contact',
    },
    projects: {
      viewProject: 'Voir le Projet',
      viewLive: 'Voir en Ligne',
      viewOnGithub: 'Voir sur GitHub',
      comingSoon: 'Bientôt',
      challenge: 'Défi',
      solution: 'Solution',
      learnings: 'Apprentissages',
      stack: 'Stack Technologique',
      status: 'Statut',
      completed: 'Complété',
      inProgress: 'En Cours',
      date: 'Date',
      previous: 'Projet Précédent',
      next: 'Projet Suivant',
      allProjects: 'Tous les Projets',
    },
  },
  zh: {
    nav: {
      home: '首页',
      projects: '项目',
      contact: '联系',
    },
    hero: {
      title: '你好，我是 Alexandre Amedro',
      subtitle: '多媒体工程学生',
      cta: '查看我的作品',
    },
    about: {
      title: '关于我',
      description: '我是ENSEEIHT的硕士研究生（M1），专攻成像与多媒体，目前在台湾进行学术交流。我对多媒体相关的所有领域都感兴趣，包括计算机图形学、计算机视觉、音视频信号处理、机器学习和数据分析。',
    },
    featured: {
      title: '我的最佳作品',
      viewAll: '查看所有项目',
    },
    contact: {
      title: '让我们交流',
      description: '有有趣的项目吗？欢迎联系我。我总是对新机会持开放态度。',
      send: '发送消息',
      email: '电子邮件',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: {
      rights: '版权所有',
      home: '首页',
      projects: '项目',
      contact: '联系',
    },
    projects: {
      viewProject: '查看项目',
      viewLive: '在线查看',
      viewOnGithub: '在GitHub上查看',
      comingSoon: '即将推出',
      challenge: '挑战',
      solution: '解决方案',
      learnings: '学习收获',
      stack: '技术栈',
      status: '状态',
      completed: '已完成',
      inProgress: '进行中',
      date: '日期',
      previous: '上一个项目',
      next: '下一个项目',
      allProjects: '所有项目',
    },
  },
};

export function getTranslation(lang: string, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang as keyof typeof translations];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}
