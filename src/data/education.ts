// src/data/education.ts
export interface Education {
  id: string;
  school: string;
  degree: {
    en: string;
    fr: string;
    zh: string;
  };
  field: {
    en: string;
    fr: string;
    zh: string;
  };
  location: string;
  startDate: string;
  endDate: string | null; // null pour "current"
  description: {
    en: string;
    fr: string;
    zh: string;
  };
  logo?: string; // Optionnel, pour ajouter le logo de l'école plus tard
}

export const education: Education[] = [
  {
    id: '1',
    school: 'ENSEEIHT',
    degree: {
      en: 'Engineering Degree in Computer Science',
      fr: 'Diplôme d\'Ingénieur en Informatique',
      zh: '计算机科学工程学位',
    },
    field: {
      en: 'Imaging and Multimedia (IMM)',
      fr: 'Imagerie et Multimédia (IMM)',
      zh: '成像与多媒体（IMM）',
    },
    location: 'Toulouse, France',
    startDate: '2024-09',
    endDate: null, // En cours
    description: {
      en: 'CTI-certified engineering degree specializing in Imaging and Multimedia. Focus on computer graphics, computer vision, signal processing, and machine learning.',
      fr: 'Diplôme d\'ingénieur certifié CTI, spécialisé en Imagerie et Multimédia. Focus sur l\'informatique graphique, la vision par ordinateur, le traitement du signal et l\'apprentissage automatique.',
      zh: 'CTI认证的工程学位，专注于成像与多媒体。重点学习计算机图形学、计算机视觉、信号处理和机器学习。',
    },
    logo: '/logo/Logo-toulouse-inp-N7.png',
  },
  {
    id: '2',
    school: 'National Cheng Kung University (NCKU)',
    degree: {
      en: 'Academic Exchange',
      fr: 'Échange Académique',
      zh: '学术交流',
    },
    field: {
      en: 'Computer Science & Engineering',
      fr: 'Informatique et Ingénierie',
      zh: '计算机科学与工程',
    },
    location: 'Tainan, Taiwan',
    startDate: '2025-09',
    endDate: '2026-02',
    description: {
      en: 'International exchange program. Courses: Computer Architecture (GPU), Computer Vision & Deep Learning, New Generation Networks (video streaming), Computational Neuroscience.',
      fr: 'Programme d\'échange international. Cours : Architecture Informatique (GPU), Vision par Ordinateur & Deep Learning, Réseaux Nouvelle Génération (streaming vidéo), Neurosciences Computationnelles.',
      zh: '国际交流项目。课程：计算机体系结构（GPU）、计算机视觉与深度学习、新一代网络（视频流）、计算神经科学。',
    },
    logo: '/logo/msys_1045_9644985_71823.gif',
  },
  {
    id: '3',
    school: 'Lycée Faidherbe',
    degree: {
      en: 'Preparatory Classes (CPGE)',
      fr: 'Classes Préparatoires (CPGE)',
      zh: '预科班（CPGE）',
    },
    field: {
      en: 'Physics and Engineering Sciences (PSI*)',
      fr: 'Physique et Sciences de l\'Ingénieur (PSI*)',
      zh: '物理与工程科学（PSI*）',
    },
    location: 'Lille, France',
    startDate: '2022-09',
    endDate: '2024-06',
    description: {
      en: 'Intensive two-year program preparing for competitive entrance exams to French engineering schools.',
      fr: 'Programme intensif de deux ans préparant aux concours d\'entrée des grandes écoles d\'ingénieurs.',
      zh: '为期两年的强化课程，为法国工程学院的竞争性入学考试做准备。',
    },
  },
];

export function getEducation() {
  return education;
}
