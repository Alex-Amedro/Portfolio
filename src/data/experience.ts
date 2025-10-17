// src/data/experience.ts
export interface Experience {
  id: string;
  title: {
    en: string;
    fr: string;
    zh: string;
  };
  company: string;
  location: string;
  type: 'internship' | 'job' | 'volunteering' | 'association';
  startDate: string;
  endDate: string | null; // null pour "current"
  description: {
    en: string;
    fr: string;
    zh: string;
  };
  achievements: {
    en: string[];
    fr: string[];
    zh: string[];
  };
  technologies?: string[];
  logo?: string; // Optionnel
}

export const experience: Experience[] = [
  {
    id: '1',
    title: {
      en: 'Full-Stack Development Intern',
      fr: 'Stagiaire Développeur Full-Stack',
      zh: '全栈开发实习生',
    },
    company: 'Neiji',
    location: 'France',
    type: 'internship',
    startDate: '2025-06',
    endDate: '2025-08',
    description: {
      en: '2.5-month internship focused on front-end development and AI integration.',
      fr: 'Stage de 2,5 mois axé sur le développement front-end et l\'intégration d\'IA.',
      zh: '为期2.5个月的实习，专注于前端开发和AI集成。',
    },
    achievements: {
      en: [
        'Redesigned and optimized the front-end interface using Node.js and React',
        'Implemented user management system with Supabase',
        'Developed cross-platform mobile application using Expo Go',
        'Created an AI agent powered by GPT with ElevenLabs voice synthesis integration',
        'Conducted proof-of-concept on token usage optimization for cost reduction',
      ],
      fr: [
        'Refonte et optimisation de l\'interface front-end avec Node.js et React',
        'Mise en place d\'un système de gestion des utilisateurs avec Supabase',
        'Développement d\'une application mobile cross-platform avec Expo Go',
        'Création d\'un agent IA alimenté par GPT avec intégration de synthèse vocale ElevenLabs',
        'Réalisation d\'une preuve de concept sur l\'optimisation de l\'utilisation des tokens pour réduire les coûts',
      ],
      zh: [
        '使用Node.js和React重新设计和优化前端界面',
        '使用Supabase实现用户管理系统',
        '使用Expo Go开发跨平台移动应用',
        '创建由GPT驱动的AI代理，集成ElevenLabs语音合成',
        '开展令牌使用优化的概念验证以降低成本',
      ],
    },
    technologies: ['Node.js', 'React', 'Supabase', 'Expo Go', 'GPT', 'ElevenLabs'],
  },
  {
    id: '2',
    title: {
      en: 'Treasurer',
      fr: 'Trésorier',
      zh: '财务主管',
    },
    company: 'Genius7 - Entrepreneurship Association',
    location: 'ENSEEIHT, Toulouse',
    type: 'association',
    startDate: '2024-09',
    endDate: null, // En cours
    description: {
      en: 'Managing finances and supporting entrepreneurship initiatives within the school.',
      fr: 'Gestion des finances et accompagnement des initiatives entrepreneuriales au sein de l\'école.',
      zh: '管理财务并支持校内创业倡议。',
    },
    achievements: {
      en: [
        'Manage association budget and financial operations',
        'Support student entrepreneurship projects',
        'Organize events and workshops on innovation and startups',
      ],
      fr: [
        'Gestion du budget et des opérations financières de l\'association',
        'Accompagnement des projets entrepreneuriaux étudiants',
        'Organisation d\'événements et d\'ateliers sur l\'innovation et les startups',
      ],
      zh: [
        '管理协会预算和财务运营',
        '支持学生创业项目',
        '组织创新和初创企业相关的活动和研讨会',
      ],
    },
  },
];

export function getExperience() {
  return experience;
}
