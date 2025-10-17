// src/data/translations.ts
export const translations = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      title: 'Creative Front-End Developer',
      subtitle: 'Passionate about creating intuitive and performant web interfaces.',
      cta: 'Explore My Work',
    },
    about: {
      title: 'About Me',
      description: 'I\'m a passionate front-end developer with 3+ years of experience building beautiful and performant web applications. I specialize in modern JavaScript frameworks like React and Astro, and I\'m always eager to learn new technologies and best practices in web development.',
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
      title: 'Développeur Front-End Créatif',
      subtitle: 'Passionné par la création d\'interfaces web intuitives et performantes.',
      cta: 'Découvrir mon travail',
    },
    about: {
      title: 'À Propos de moi',
      description: 'Je suis un développeur front-end passionné avec 3+ ans d\'expérience dans la création d\'applications web belles et performantes. Je me spécialise dans les frameworks JavaScript modernes comme React et Astro, et j\'aime toujours apprendre de nouvelles technologies et bonnes pratiques.',
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
      title: '创意前端开发者',
      subtitle: '热衷于创建直观且高性能的网络界面。',
      cta: '探索我的作品',
    },
    about: {
      title: '关于我',
      description: '我是一名充满热情的前端开发者，拥有3年以上构建美观高性能Web应用的经验。我专门使用React和Astro等现代JavaScript框架，并且总是渴望学习新技术和Web开发的最佳实践。',
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
