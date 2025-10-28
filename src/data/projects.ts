// src/data/projects.ts
export interface Project {
  id: string;
  slug: string;
  titleEn: string;
  titleFr: string;
  titleZh: string;
  descriptionEn: string;
  descriptionFr: string;
  descriptionZh: string;
  fullDescriptionEn: string;
  fullDescriptionFr: string;
  fullDescriptionZh: string;
  challengeEn: string;
  challengeFr: string;
  challengeZh: string;
  solutionEn: string;
  solutionFr: string;
  solutionZh: string;
  learningsEn: string;
  learningsFr: string;
  learningsZh: string;
  stack: string[];
  image: string;
  images: string[];
  liveUrl: string;
  githubUrl: string;
  status: 'completed' | 'in-progress';
  date: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '0',
    slug: 'raytracer-3d',
    titleEn: 'Rayt - 3D Ray Tracer & Scene Editor',
    titleFr: 'Rayt - Ray Tracer 3D & Éditeur de Scène',
    titleZh: 'Rayt - 3D光线追踪与场景编辑器',
    descriptionEn: 'High-performance ray tracing engine with real-time 3D editor. Create photorealistic renders with advanced materials (metal, glass, neon) using C++, OpenGL and ImGui.',
    descriptionFr: 'Moteur de ray tracing performant avec éditeur 3D temps réel. Créez des rendus photoréalistes avec matériaux avancés (métal, verre, néon) en C++, OpenGL et ImGui.',
    descriptionZh: '高性能光线追踪引擎与实时3D编辑器。使用C++、OpenGL和ImGui创建照片级渲染。',
    fullDescriptionEn: `A complete 3D rendering project combining two main components:

1. Interactive 3D Scene Editor (mini-Blender)
Built with OpenGL and ImGui, this editor allows you to:
- Place and manipulate 3D objects (spheres, planes) in real-time
- Adjust materials, colors, positions with instant visual feedback
- Control an orbital camera (rotate, zoom, pan)
- Import background images for scene composition
- Save and load scenes in JSON format

2. High-Performance Ray Tracer
A photorealistic rendering engine that takes your scene and generates beautiful images:
- Multiple material types: Diffuse, Metal (with roughness), Glass (with refraction), Emissive (neons), Mirror
- Realistic lighting with shadows and reflections
- Anti-aliasing for smooth edges
- Depth of field effect (camera focus)
- Multi-threaded rendering for speed

The workflow is simple: design your scene in the OpenGL editor, then hit render to generate a photorealistic image with the ray tracer.`,
    fullDescriptionFr: `Un projet 3D complet combinant deux composants principaux :

1. Éditeur de Scène 3D Interactif (mini-Blender)
Construit avec OpenGL et ImGui, cet éditeur permet de :
- Placer et manipuler des objets 3D (sphères, plans) en temps réel
- Ajuster matériaux, couleurs, positions avec retour visuel instantané
- Contrôler une caméra orbitale (rotation, zoom, pan)
- Importer des images de fond pour composer la scène
- Sauvegarder et charger des scènes en JSON

2. Ray Tracer Performant
Un moteur de rendu photoréaliste qui transforme votre scène en images magnifiques :
- Plusieurs types de matériaux : Diffus, Métal (avec rugosité), Verre (avec réfraction), Émissif (néons), Miroir
- Éclairage réaliste avec ombres et réflexions
- Anti-aliasing pour des bords lisses
- Effet de profondeur de champ (focus caméra)
- Rendu multi-threadé pour la rapidité

Le workflow est simple : concevez votre scène dans l'éditeur OpenGL, puis lancez le rendu pour générer une image photoréaliste avec le ray tracer.`,
    fullDescriptionZh: `完整的3D渲染项目，结合两个主要组件：

1. 交互式3D场景编辑器（迷你Blender）
使用OpenGL和ImGui构建，允许：实时放置和操作3D对象、调整材质和颜色、控制相机、导入背景图像、保存和加载JSON场景。

2. 高性能光线追踪器
照片级渲染引擎，生成美丽的图像：多种材质类型、真实光照、抗锯齿、景深效果、多线程渲染。`,
    challengeEn: `The main technical challenges were:

- Understanding and implementing ray-object intersection math (spheres, planes)
- Coding realistic light physics: reflections, glass refraction (Snell's law), Fresnel equations
- Optimizing rendering speed with multi-threading
- Building a user-friendly OpenGL editor with proper camera controls
- Managing complex C++ project organization (multiple modules, clean architecture)`,
    challengeFr: `Les principaux défis techniques étaient :

- Comprendre et implémenter les mathématiques d'intersection rayon-objet (sphères, plans)
- Coder la physique réaliste de la lumière : réflexions, réfraction du verre (loi de Snell), équations de Fresnel
- Optimiser la vitesse de rendu avec le multi-threading
- Construire un éditeur OpenGL convivial avec contrôles de caméra appropriés
- Gérer l'organisation d'un projet C++ complexe (modules multiples, architecture propre)`,
    challengeZh: `主要技术挑战：理解和实现光线与对象相交数学、编码真实光物理、多线程优化、构建用户友好的OpenGL编辑器、管理复杂的C++项目组织。`,
    solutionEn: `Created a modular architecture with separate components for ray tracing and the editor. Used modern C++ features (smart pointers, STL containers) for clean code. Implemented multi-threading to render faster. Built the UI with ImGui for quick iterations. Stored scenes in JSON for easy saving/loading.`,
    solutionFr: `Création d'une architecture modulaire avec composants séparés pour le ray tracing et l'éditeur. Utilisation de fonctionnalités C++ modernes (smart pointers, conteneurs STL) pour un code propre. Multi-threading pour un rendu plus rapide. UI construite avec ImGui. Scènes stockées en JSON.`,
    solutionZh: `创建模块化架构，分离光线追踪和编辑器组件。使用现代C++功能编写清晰代码。实现多线程加速渲染。使用ImGui构建UI。JSON存储场景。`,
    learningsEn: `Technical Skills Learned:
- C++ programming (OOP, pointers, memory management)
- OpenGL graphics (shaders, objects, rendering pipeline)
- 3D mathematics (vectors, matrices, transformations)
- Physics calculations (optics, light behavior)
- JSON data handling
- Multi-threading and performance optimization
- Project organization and clean architecture

Soft Skills:
- Problem-solving with complex algorithms
- Self-learning from documentation and tutorials
- Debugging visual and mathematical issues
- Iterative development and testing`,
    learningsFr: `Compétences Techniques Apprises :
- Programmation C++ (POO, pointeurs, gestion mémoire)
- Graphiques OpenGL (shaders, objets, pipeline de rendu)
- Mathématiques 3D (vecteurs, matrices, transformations)
- Calculs physiques (optique, comportement de la lumière)
- Gestion de données JSON
- Multi-threading et optimisation de performances
- Organisation de projet et architecture propre

Compétences Transversales :
- Résolution de problèmes avec algorithmes complexes
- Apprentissage autonome depuis documentation et tutoriels
- Debugging de problèmes visuels et mathématiques
- Développement itératif et tests`,
    learningsZh: `学到的技术技能： C++编程、OpenGL图形、3D数学、物理计算、JSON处理、多线程优化、项目组织。

软技能： 算法问题解决、自主学习、调试、迭代开发。`,
    stack: ['C++17', 'OpenGL', 'ImGui', 'GLFW', 'GLM', 'JSON (nlohmann)'],
    image: '/projects/raytracer/raytracer-render.jpg',
    images: [
      '/projects/raytracer/raytracer-render.jpg',
      '/projects/raytracer/raytracer-800x600.jpg',
      '/projects/raytracer/image.png',
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/Alex-Amedro',
    status: 'completed' as const,
    date: '2024-12',
    featured: true,
  },
  {
    id: '1',
    slug: 'ecommerce-platform',
    titleEn: 'E-Commerce Platform',
    titleFr: 'Plateforme E-Commerce',
    titleZh: '电商平台',
    descriptionEn: 'Full-stack e-commerce platform with payment integration and admin dashboard.',
    descriptionFr: 'Plateforme e-commerce complète avec intégration de paiement et tableau de bord administrateur.',
    descriptionZh: '完整的电子商务平台，具有支付集成和管理员仪表板。',
    fullDescriptionEn: 'A complete e-commerce platform built with React and Node.js. This project includes a modern product catalog, shopping cart functionality, secure payment processing with Stripe, user authentication, and a comprehensive admin dashboard for managing products, orders, and customers. The platform is fully responsive and optimized for performance.\n\nThe frontend features a beautiful, intuitive user interface with product filtering, sorting, and search capabilities. The backend is built with Node.js and Express, using MongoDB for data persistence. All sensitive operations are secured with JWT authentication.',
    fullDescriptionFr: 'Une plateforme e-commerce complète construite avec React et Node.js. Ce projet inclut un catalogue de produits moderne, une fonctionnalité de panier, un traitement des paiements sécurisé avec Stripe, une authentification utilisateur et un tableau de bord administrateur complet pour gérer les produits, les commandes et les clients. La plateforme est entièrement réactive et optimisée pour les performances.',
    fullDescriptionZh: '使用React和Node.js构建的完整电商平台。该项目包括现代产品目录、购物车功能、使用Stripe进行安全支付处理、用户身份验证以及用于管理产品、订单和客户的全面管理员仪表板。该平台完全响应式且针对性能进行了优化。',
    challengeEn: 'The main challenge was implementing a secure payment system while maintaining smooth user experience. We had to optimize database queries for handling thousands of products and manage real-time inventory updates.',
    challengeFr: 'Le principal défi était de mettre en place un système de paiement sécurisé tout en maintenant une expérience utilisateur fluide. Nous avons dû optimiser les requêtes de base de données pour gérer des milliers de produits.',
    challengeZh: '主要挑战是实现安全的支付系统，同时保持流畅的用户体验。我们必须优化数据库查询以处理数千种产品。',
    solutionEn: 'We integrated Stripe for secure payment processing, implemented Redis caching for product data, and used MongoDB aggregation pipelines for efficient queries. The frontend was optimized with lazy loading and code splitting.',
    solutionFr: 'Nous avons intégré Stripe pour le traitement sécurisé des paiements, implémenté la mise en cache Redis pour les données de produits, et utilisé les pipelines d\'agrégation MongoDB pour des requêtes efficaces.',
    solutionZh: '我们集成了Stripe进行安全支付处理，实现了Redis缓存用于产品数据，并使用MongoDB聚合管道进行有效查询。',
    learningsEn: 'Gained deep knowledge in payment gateway integration, database optimization, and implementing scalable backend architecture. Learned best practices for handling sensitive user data and PCI compliance.',
    learningsFr: 'Acquisition de connaissances approfondies en intégration de passerelle de paiement, optimisation de base de données et implémentation d\'architecture backend évolutive.',
    learningsZh: '获得了支付网关集成、数据库优化和实现可扩展后端架构的深入知识。',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Redux', 'Tailwind CSS'],
    image: 'https://via.placeholder.com/800x600?text=E-Commerce+Platform',
    images: [
      'https://via.placeholder.com/800x600?text=E-Commerce+1',
      'https://via.placeholder.com/800x600?text=E-Commerce+2',
      'https://via.placeholder.com/800x600?text=E-Commerce+3',
    ],
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    status: 'completed',
    date: '2024-06-15',
    featured: true,
  },
  {
    id: '2',
    slug: 'ai-content-generator',
    titleEn: 'AI Content Generator',
    titleFr: 'Générateur de Contenu IA',
    titleZh: '人工智能内容生成器',
    descriptionEn: 'AI-powered content generation tool using OpenAI API. Currently in development.',
    descriptionFr: 'Outil de génération de contenu alimenté par l\'IA utilisant l\'API OpenAI. Actuellement en développement.',
    descriptionZh: '使用OpenAI API的人工智能内容生成工具。目前处于开发阶段。',
    fullDescriptionEn: 'An innovative AI-powered content generation tool that helps creators, marketers, and writers generate high-quality content in seconds. This web application leverages the OpenAI GPT API to create blog posts, social media content, product descriptions, and more.\n\nUsers can customize the tone, style, and length of generated content. The application includes a user-friendly dashboard where they can manage their generated content, save favorites, and export in various formats. We\'re currently building advanced features like content scheduling and team collaboration.',
    fullDescriptionFr: 'Un outil innovant de génération de contenu alimenté par l\'IA qui aide les créateurs, les spécialistes du marketing et les rédacteurs à générer du contenu de haute qualité en quelques secondes. Cette application Web exploite l\'API OpenAI GPT pour créer des articles de blog, du contenu pour les réseaux sociaux, des descriptions de produits, etc.',
    fullDescriptionZh: '一个创新的人工智能内容生成工具，帮助创作者、营销人员和作家在几秒钟内生成高质量的内容。该网络应用程序利用OpenAI GPT API来创建博客文章、社交媒体内容、产品描述等。',
    challengeEn: 'Handling API rate limits, managing token usage costs, and ensuring generated content quality. We\'re also building a user-friendly interface that makes it easy for non-technical users to generate content.',
    challengeFr: 'Gérer les limites de débit API, gérer les coûts d\'utilisation des jetons et assurer la qualité du contenu généré.',
    challengeZh: '处理API速率限制、管理令牌使用成本并确保生成内容的质量。',
    solutionEn: 'Implemented intelligent caching to reduce API calls, created cost optimization strategies, and built an intuitive interface with real-time content preview. Added content templates for different use cases.',
    solutionFr: 'Implémentation de mise en cache intelligente pour réduire les appels API, création de stratégies d\'optimisation des coûts et construction d\'une interface intuitive.',
    solutionZh: '实现智能缓存以减少API调用，创建成本优化策略，并构建了直观的界面。',
    learningsEn: 'Deep dive into LLM integration, understanding token management, and building scalable systems. Learned about prompt engineering and how to optimize API costs while maintaining quality.',
    learningsFr: 'Plongée approfondie dans l\'intégration LLM, compréhension de la gestion des jetons et construction de systèmes évolutifs.',
    learningsZh: '深入学习LLM集成、令牌管理和构建可扩展系统。',
    stack: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'PostgreSQL', 'Clerk Auth'],
    image: 'https://via.placeholder.com/800x600?text=AI+Content+Generator',
    images: [
      'https://via.placeholder.com/800x600?text=AI+Generator+1',
      'https://via.placeholder.com/800x600?text=AI+Generator+2',
    ],
    liveUrl: 'https://example-ai-generator.com',
    githubUrl: 'https://github.com/yourusername/ai-content-generator',
    status: 'in-progress',
    date: '2024-10-01',
    featured: true,
  },
  {
    id: '3',
    slug: 'design-system',
    titleEn: 'Design System Component Library',
    titleFr: 'Bibliothèque de Composants du Système de Design',
    titleZh: '设计系统组件库',
    descriptionEn: 'Comprehensive component library with Storybook documentation and Figma integration.',
    descriptionFr: 'Bibliothèque de composants complète avec documentation Storybook et intégration Figma.',
    descriptionZh: '包含Storybook文档和Figma集成的完整组件库。',
    fullDescriptionEn: 'A professional-grade design system and component library built with React and Storybook. This project serves as a single source of truth for all UI components across multiple projects. It includes comprehensive documentation, accessibility guidelines, and usage examples for each component.',
    fullDescriptionFr: 'Un système de conception de qualité professionnelle et une bibliothèque de composants construits avec React et Storybook.',
    fullDescriptionZh: '使用React和Storybook构建的专业级设计系统和组件库。',
    challengeEn: 'Creating reusable components that work across different contexts while maintaining consistency and performance.',
    challengeFr: 'Créer des composants réutilisables qui fonctionnent dans différents contextes tout en maintenant la cohérence.',
    challengeZh: '创建在不同背景下工作的可重用组件，同时保持一致性和性能。',
    solutionEn: 'Used compound component pattern, CSS-in-JS for styling, and Storybook for documentation and testing.',
    solutionFr: 'Utilisation du modèle de composant composé, CSS-in-JS pour le style et Storybook pour la documentation.',
    solutionZh: '使用复合组件模式、CSS-in-JS进行样式设计以及Storybook进行文档和测试。',
    learningsEn: 'Learned component architecture best practices, design system principles, and how to effectively document components.',
    learningsFr: 'Appris les meilleures pratiques d\'architecture de composants et les principes des systèmes de conception.',
    learningsZh: '学习了组件架构最佳实践和设计系统原则。',
    stack: ['React', 'Storybook', 'Tailwind CSS', 'TypeScript', 'Chromatic'],
    image: 'https://via.placeholder.com/800x600?text=Design+System',
    images: ['https://via.placeholder.com/800x600?text=Design+System+1'],
    liveUrl: 'https://example-design-system.storybook.io',
    githubUrl: 'https://github.com/yourusername/design-system',
    status: 'completed',
    date: '2024-04-20',
    featured: true,
  },
  // Template pour les 17 projets restants
  ...Array.from({ length: 17 }, (_, i) => ({
    id: String(i + 4),
    slug: `project-${i + 4}`,
    titleEn: `Project ${i + 4}`,
    titleFr: `Projet ${i + 4}`,
    titleZh: `项目 ${i + 4}`,
    descriptionEn: 'Add your project description here. Keep it concise and engaging.',
    descriptionFr: 'Ajoutez votre description de projet ici. Gardez-la concise et engageante.',
    descriptionZh: '在这里添加您的项目描述。保持简洁和引人入胜。',
    fullDescriptionEn: 'Add a detailed description of your project here. Explain what the project does, the problems it solves, and the technologies used.',
    fullDescriptionFr: 'Ajoutez une description détaillée de votre projet ici.',
    fullDescriptionZh: '在这里添加项目的详细描述。',
    challengeEn: 'Describe the main challenges faced during development.',
    challengeFr: 'Décrivez les défis principaux rencontrés lors du développement.',
    challengeZh: '描述开发过程中遇到的主要挑战。',
    solutionEn: 'Explain how you solved these challenges.',
    solutionFr: 'Expliquez comment vous avez résolu ces défis.',
    solutionZh: '解释您如何解决这些挑战。',
    learningsEn: 'Share what you learned from this project.',
    learningsFr: 'Partagez ce que vous avez appris de ce projet.',
    learningsZh: '分享您从这个项目中学到的内容。',
    stack: ['React', 'Tailwind CSS', 'API'],
    image: `https://via.placeholder.com/800x600?text=Project+${i + 4}`,
    images: [`https://via.placeholder.com/800x600?text=Project+${i + 4}+Screenshot`],
    liveUrl: '#',
    githubUrl: '#',
    status: 'completed' as const,
    date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
    featured: false,
  })),
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).slice(0, 4);
}

export function getAllProjects(): Project[] {
  return projects;
}
