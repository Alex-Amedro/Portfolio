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
    slug: 'heracles-roguelike',
    titleEn: 'Heracles - 2D Action Roguelike',
    titleFr: 'Heracles - Roguelike d\'Action 2D',
    titleZh: 'Heracles - 2D动作Roguelike游戏',
    descriptionEn: 'Complete 2D action roguelike game featuring real-time combat, procedural dungeons, and advanced animation systems built with Java and libGDX.',
    descriptionFr: 'Jeu roguelike d\'action 2D complet avec combat en temps réel, donjons procéduraux et système d\'animation avancé, développé en Java avec libGDX.',
    descriptionZh: '完整的2D动作Roguelike游戏，具有实时战斗、程序化地牢和高级动画系统，使用Java和libGDX构建。',
    fullDescriptionEn: `A complete 2D action roguelike game built with Java and libGDX. Play as Heracles, the legendary Greek hero, exploring procedurally generated dungeons filled with enemies, treasures, and challenges.

The game features four main systems:

1. Action-Packed Combat System
A robust real-time combat system with melee weapons (damage, range, cooldown stats), enemy AI with pursuit and attack behaviors, visual feedback through impact animations and sound effects, dash mechanics for tactical dodging, and comprehensive health management with damage calculation.

2. Advanced Animation System
Custom animation framework handling multi-directional character sprites (4 directions), enemy animations (idle, run, attack states), impact effects with 6-frame sequences, smooth transitions between animation states, and synchronized audio-visual feedback.

3. Inventory & Item Management
Complete inventory system with grid-based UI for item visualization, multiple weapon types with unique properties, health potions and consumables, equipment switching during gameplay, and visual representation with custom sprites.

4. Procedural Dungeon System
Room-based dungeon generation with connected chambers and doors, enemy spawning logic, item placement, and progressive difficulty scaling.`,
    fullDescriptionFr: `Un jeu roguelike d'action 2D complet construit avec Java et libGDX. Incarnez Heracles, le héros légendaire grec, explorant des donjons générés procéduralement remplis d'ennemis, de trésors et de défis.

Le jeu propose quatre systèmes principaux :

1. Système de Combat Dynamique
Système de combat en temps réel robuste avec armes de mêlée (statistiques de dégâts, portée, cooldown), IA ennemie avec comportements de poursuite et d'attaque, retour visuel via animations d'impact et effets sonores, mécanique de dash pour esquiver tactiquement, et gestion complète de la santé avec calcul des dégâts.

2. Système d'Animation Avancé
Framework d'animation personnalisé gérant les sprites de personnages multi-directionnels (4 directions), animations ennemies (états idle, course, attaque), effets d'impact avec séquences de 6 images, transitions fluides entre états d'animation, et feedback audio-visuel synchronisé.

3. Gestion d'Inventaire et Objets
Système d'inventaire complet avec interface UI en grille pour la visualisation des objets, plusieurs types d'armes avec propriétés uniques, potions de santé et consommables, changement d'équipement pendant le gameplay, et représentation visuelle avec sprites personnalisés.

4. Système de Donjons Procéduraux
Génération de donjons basée sur des salles avec chambres connectées par des portes, logique d'apparition d'ennemis, placement d'objets, et difficulté progressive.`,
    fullDescriptionZh: `使用Java和libGDX构建的完整2D动作Roguelike游戏。扮演传奇希腊英雄赫拉克勒斯，探索充满敌人、宝藏和挑战的程序化生成地牢。

游戏包含四个主要系统：

1. 动作战斗系统
强大的实时战斗系统，具有近战武器（伤害、射程、冷却时间属性）、具有追击和攻击行为的敌人AI、通过冲击动画和音效的视觉反馈、战术闪避机制以及带有伤害计算的全面健康管理。

2. 高级动画系统
自定义动画框架，处理多方向角色精灵（4个方向）、敌人动画（闲置、奔跑、攻击状态）、6帧序列的冲击效果、动画状态之间的流畅过渡以及同步的音视频反馈。

3. 库存与物品管理
完整的库存系统，包括基于网格的UI物品可视化、具有独特属性的多种武器类型、生命药水和消耗品、游戏中的装备切换以及自定义精灵的视觉表示。

4. 程序化地牢系统
基于房间的地牢生成，包括通过门连接的房间、敌人生成逻辑、物品放置和渐进式难度提升。`,
    challengeEn: `Main technical challenges:

- Game Architecture: Structuring a clean MVC architecture, implementing entity-component system for flexibility, managing game states (menu, gameplay, pause, game over), and decoupling systems for maintainability
- Real-Time Combat Physics: Calculating collision detection between entities, implementing attack hitboxes with precise timing, creating responsive controls, and balancing combat feel
- Animation State Management: Synchronizing sprites with game logic, creating smooth transitions, managing multiple animation handlers simultaneously, and optimizing sprite rendering performance
- AI Behavior: Programming enemy pathfinding and pursuit, creating attack patterns and range detection, balancing difficulty, and implementing state machines for enemy behavior
- Performance Optimization: Managing memory with object pooling, optimizing sprite batch rendering, reducing garbage collection overhead, and maintaining smooth 60 FPS gameplay`,
    challengeFr: `Principaux défis techniques :

- Architecture de Jeu : Structurer une architecture MVC propre, implémenter un système entité-composant pour la flexibilité, gérer les états du jeu (menu, gameplay, pause, game over), et découpler les systèmes pour la maintenabilité
- Physique de Combat en Temps Réel : Calculer la détection de collision entre entités, implémenter des hitboxes d'attaque avec timing précis, créer des contrôles réactifs, et équilibrer le ressenti du combat
- Gestion des États d'Animation : Synchroniser les sprites avec la logique du jeu, créer des transitions fluides, gérer plusieurs gestionnaires d'animation simultanément, et optimiser les performances de rendu
- Comportement IA : Programmer le pathfinding et la poursuite des ennemis, créer des patterns d'attaque et détection de portée, équilibrer la difficulté, et implémenter des machines à états pour le comportement ennemi
- Optimisation des Performances : Gérer la mémoire avec l'object pooling, optimiser le batch rendering des sprites, réduire l'overhead du garbage collection, et maintenir un gameplay fluide à 60 FPS`,
    challengeZh: `主要技术挑战：

- 游戏架构：为游戏项目构建清晰的MVC架构、实现实体组件系统以提高灵活性、管理游戏状态（菜单、游戏、暂停、游戏结束）以及解耦系统以提高可维护性
- 实时战斗物理：计算实体之间的碰撞检测、实现具有精确时间的攻击命中框、创建响应式控制以及平衡战斗感觉
- 动画状态管理：将精灵与游戏逻辑同步、创建流畅的过渡、同时管理多个动画处理器以及优化精灵渲染性能
- AI行为：编程敌人寻路和追击、创建攻击模式和范围检测、平衡难度以及实现敌人行为的状态机
- 性能优化：使用对象池管理内存、优化精灵批量渲染、减少垃圾回收开销以及保持流畅的60 FPS游戏体验`,
    solutionEn: `Created a modular architecture with separated systems for combat, animation, and inventory. Implemented design patterns (Observer, State, Strategy, Factory) for clean code organization. Used libGDX's sprite batching for optimal rendering performance. Built custom animation state machines with smooth transitions. Developed comprehensive debug tools for rapid iteration and testing.`,
    solutionFr: `Création d'une architecture modulaire avec systèmes séparés pour le combat, l'animation et l'inventaire. Implémentation de design patterns (Observer, State, Strategy, Factory) pour une organisation de code propre. Utilisation du sprite batching de libGDX pour des performances de rendu optimales. Construction de machines à états d'animation personnalisées avec transitions fluides. Développement d'outils de debug complets pour itération et tests rapides.`,
    solutionZh: `创建了模块化架构，为战斗、动画和库存分离了系统。实现了设计模式（观察者、状态、策略、工厂）以实现清晰的代码组织。使用libGDX的精灵批处理实现最佳渲染性能。构建了具有流畅过渡的自定义动画状态机。开发了全面的调试工具以实现快速迭代和测试。`,
    learningsEn: `Technical Skills Learned:
- Java Programming: Object-Oriented Programming (inheritance, polymorphism, interfaces), design patterns (Observer, State, Strategy, Factory), memory management and performance optimization, exception handling and debugging
- libGDX Framework: Game loop and rendering pipeline, sprite batching and texture management, input handling (keyboard, mouse), audio system (music, sound effects), viewport and camera management
- Game Development: Entity-component architecture, collision detection and physics, animation state machines, game state management, UI/UX design for games
- Software Engineering: Project organization and clean code, modular architecture and separation of concerns, version control with Git, build automation with Gradle

Soft Skills:
- Problem-solving: Breaking down complex game mechanics into manageable components, debugging visual and logical issues, finding creative solutions to technical limitations
- Self-learning: Reading libGDX documentation and API references, following tutorials and best practices, experimenting with different approaches
- Project Management: Planning features and priorities, managing scope and time constraints, iterative development and testing
- Attention to Detail: Fine-tuning game feel and responsiveness, creating cohesive visual feedback, balancing gameplay mechanics`,
    learningsFr: `Compétences Techniques Apprises :
- Programmation Java : Programmation orientée objet (héritage, polymorphisme, interfaces), design patterns (Observer, State, Strategy, Factory), gestion de la mémoire et optimisation des performances, gestion des exceptions et débogage
- Framework libGDX : Boucle de jeu et pipeline de rendu, batch rendering de sprites et gestion de textures, gestion des entrées (clavier, souris), système audio (musique, effets sonores), gestion de viewport et caméra
- Développement de Jeux : Architecture entité-composant, détection de collision et physique, machines à états d'animation, gestion des états de jeu, conception UI/UX pour jeux
- Ingénierie Logicielle : Organisation de projet et code propre, architecture modulaire et séparation des préoccupations, contrôle de version avec Git, automatisation de build avec Gradle

Compétences Transversales :
- Résolution de Problèmes : Décomposer des mécaniques de jeu complexes en composants gérables, déboguer des problèmes visuels et logiques, trouver des solutions créatives aux limitations techniques
- Apprentissage Autonome : Lecture de la documentation libGDX et références API, suivre des tutoriels et meilleures pratiques, expérimenter différentes approches
- Gestion de Projet : Planifier les fonctionnalités et priorités, gérer la portée et les contraintes de temps, développement et tests itératifs
- Attention aux Détails : Affiner le ressenti et la réactivité du jeu, créer un feedback visuel cohérent, équilibrer les mécaniques de gameplay`,
    learningsZh: `学到的技术技能：
- Java编程：面向对象编程（继承、多态、接口）、设计模式（观察者、状态、策略、工厂）、内存管理和性能优化、异常处理和调试
- libGDX框架：游戏循环和渲染管道、精灵批处理和纹理管理、输入处理（键盘、鼠标）、音频系统（音乐、音效）、视口和相机管理
- 游戏开发：实体组件架构、碰撞检测和物理、动画状态机、游戏状态管理、游戏UI/UX设计
- 软件工程：项目组织和清晰代码、模块化架构和关注点分离、使用Git进行版本控制、使用Gradle进行构建自动化

软技能：
- 问题解决：将复杂的游戏机制分解为可管理的组件、调试视觉和逻辑问题、找到技术限制的创意解决方案
- 自主学习：阅读libGDX文档和API参考、遵循教程和最佳实践、尝试不同方法
- 项目管理：规划功能和优先级、管理范围和时间约束、迭代开发和测试
- 注重细节：微调游戏感觉和响应性、创建连贯的视觉反馈、平衡游戏机制`,
    stack: ['Java 21', 'libGDX', 'Gradle', 'LWJGL3'],
    image: '/projects/heracles/menubackground.png',
    images: [
      '/projects/heracles/menubackground.png',
      '/projects/heracles/spawn.png',
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/Alex-Amedro/Projet-long-java',
    status: 'completed' as const,
    date: '2025-05',
    featured: true,
  },
  {
    id: '2',
    slug: 'minishell',
    titleEn: 'Mini-Shell - Command-Line Shell Implementation',
    titleFr: 'Mini-Shell - Implémentation d\'un Interpréteur de Commandes',
    titleZh: 'Mini-Shell - 命令行Shell实现',
    descriptionEn: 'Lightweight, educational shell implementation in C demonstrating core operating system concepts, POSIX system calls, and command-line interface design.',
    descriptionFr: 'Implémentation légère et éducative d\'un shell en C démontrant les concepts fondamentaux du système d\'exploitation, les appels système POSIX et la conception d\'interface en ligne de commande.',
    descriptionZh: '轻量级、教育性的C语言Shell实现，展示核心操作系统概念、POSIX系统调用和命令行界面设计。',
    fullDescriptionEn: `A lightweight shell implementation written in C that demonstrates core operating system concepts and command-line interface design.

The project implements a complete command execution pipeline:

1. Interactive Command Prompt
A user-friendly command-line interface where users can input and execute commands with a responsive prompt and proper error handling.

2. Command Parsing
Sophisticated tokenization and parsing system that breaks down user input into executable commands and arguments, handling edge cases like multiple spaces and special characters.

3. Process Management
Proper handling of process creation, execution, and termination using POSIX system calls (fork, exec, wait) with careful parent-child process synchronization.

4. I/O Handling & Error Management
Support for standard input/output operations with robust error handling that provides informative error messages without crashing the shell.

5. Signal Handling
Graceful handling of user interrupts (Ctrl+C) that interrupts only the current command, not the shell itself, using proper signal handlers.`,
    fullDescriptionFr: `Implémentation légère d'un shell écrit en C qui démontre les concepts fondamentaux du système d'exploitation et la conception d'interface en ligne de commande.

Le projet implémente un pipeline d'exécution de commandes complet :

1. Invite de Commande Interactive
Interface en ligne de commande conviviale où les utilisateurs peuvent saisir et exécuter des commandes avec une invite réactive et une gestion d'erreurs appropriée.

2. Analyse de Commande
Système de tokenisation et d'analyse sophistiqué qui décompose les entrées utilisateur en commandes exécutables et arguments, gérant les cas limites comme les espaces multiples et les caractères spéciaux.

3. Gestion des Processus
Manipulation appropriée de la création, exécution et terminaison des processus en utilisant les appels système POSIX (fork, exec, wait) avec synchronisation soigneuse parent-enfant.

4. Gestion des E/S et Gestion d'Erreurs
Support des opérations d'entrée/sortie standard avec gestion d'erreurs robuste qui fournit des messages d'erreur informatifs sans planter le shell.

5. Gestion des Signaux
Gestion gracieuse des interruptions utilisateur (Ctrl+C) qui interrompt uniquement la commande actuelle, pas le shell lui-même, en utilisant des gestionnaires de signaux appropriés.`,
    fullDescriptionZh: `用C编写的轻量级shell实现，展示核心操作系统概念和命令行界面设计。

该项目实现了完整的命令执行管道：

1. 交互式命令提示符
用户友好的命令行界面，用户可以输入和执行命令，具有响应式提示符和适当的错误处理。

2. 命令解析
复杂的分词和解析系统，将用户输入分解为可执行命令和参数，处理多个空格和特殊字符等边界情况。

3. 流程管理
使用POSIX系统调用（fork、exec、wait）进行适当的进程创建、执行和终止，具有仔细的父子进程同步。

4. I/O处理和错误管理
支持标准输入/输出操作，提供强大的错误处理，提供信息丰富的错误消息而不会使shell崩溃。

5. 信号处理
优雅地处理用户中断（Ctrl+C），仅中断当前命令而不是shell本身，使用适当的信号处理程序。`,
    challengeEn: `Main technical challenges:

- Command Parsing Complexity: Properly tokenizing user input while handling edge cases (multiple spaces, quotes, special characters) - solved with state machine logic and character-by-character analysis
- Process Management: Creating and managing child processes without resource leaks - solved with proper use of fork/exec system calls with careful parent-child synchronization
- Signal Handling: Gracefully handling user interrupts (Ctrl+C) without terminating the shell - solved with signal handlers that interrupt only current command
- Error Recovery: Providing meaningful error messages without crashing - solved with comprehensive error checking at each execution stage
- Memory Safety: Preventing memory leaks in long-running shell - solved with careful resource cleanup and proper allocation tracking`,
    challengeFr: `Principaux défis techniques :

- Complexité de l'Analyse de Commande : Tokeniser correctement l'entrée utilisateur tout en gérant les cas limites (espaces multiples, guillemets, caractères spéciaux) - résolu avec la logique de machine à états et analyse caractère par caractère
- Gestion des Processus : Créer et gérer des processus enfants sans fuites de ressources - résolu avec une utilisation appropriée des appels système fork/exec avec synchronisation parent-enfant soigneuse
- Gestion des Signaux : Gérer gracieusement les interruptions utilisateur (Ctrl+C) sans terminer le shell - résolu avec des gestionnaires de signaux qui interrompent uniquement la commande actuelle
- Récupération d'Erreurs : Fournir des messages d'erreur significatifs sans planter - résolu avec une vérification d'erreur complète à chaque étape d'exécution
- Sécurité de la Mémoire : Prévenir les fuites mémoire dans un shell longue durée - résolu avec nettoyage soigneux des ressources et suivi approprié de l'allocation`,
    challengeZh: `主要技术挑战：

- 命令解析复杂性：正确分词用户输入同时处理边界情况（多个空格、引号、特殊字符）- 通过状态机逻辑和逐字符分析解决
- 流程管理：创建和管理子进程而不发生资源泄漏 - 通过适当使用fork/exec系统调用和仔细的父子同步解决
- 信号处理：优雅地处理用户中断（Ctrl+C）而不终止shell - 通过仅中断当前命令的信号处理程序解决
- 错误恢复：提供有意义的错误消息而不崩溃 - 通过在每个执行阶段进行全面的错误检查解决
- 内存安全：防止长期运行的shell中的内存泄漏 - 通过仔细的资源清理和适当的分配跟踪解决`,
    solutionEn: `Built a robust parser with state machine logic for handling complex command tokenization. Implemented proper process management using fork/exec with careful synchronization. Used signal handlers to manage interrupts gracefully. Created comprehensive error checking at each stage with informative messages. Implemented unit tests for the parsing module to ensure robustness.`,
    solutionFr: `Construction d'un analyseur robuste avec logique de machine à états pour gérer la tokenisation complexe des commandes. Implémentation de la gestion appropriée des processus en utilisant fork/exec avec synchronisation soigneuse. Utilisation de gestionnaires de signaux pour gérer les interruptions gracieusement. Création d'une vérification d'erreur complète à chaque étape avec des messages informatifs. Implémentation de tests unitaires pour le module d'analyse pour assurer la robustesse.`,
    solutionZh: `使用状态机逻辑构建了健壮的解析器来处理复杂的命令分词。使用fork/exec实现了适当的进程管理，具有仔细的同步。使用信号处理程序优雅地管理中断。在每个阶段创建了全面的错误检查，提供信息丰富的消息。为解析模块实现了单元测试以确保鲁棒性。`,
    learningsEn: `Technical Skills Learned:
- POSIX System Calls: Deep understanding of fork, exec, wait, signal handling, process lifecycle
- Process Management: Parent-child process synchronization, file descriptors, resource cleanup
- C Programming: Memory management, pointer manipulation, string processing, modular code organization
- Parsing & Tokenization: State machines, edge case handling, input validation
- System Programming: Understanding how shells work at the OS level

Soft Skills:
- Problem-solving: Debugging complex system interactions and race conditions
- System thinking: Understanding processes and signals at OS level
- Testing: Writing unit tests for core parsing functionality
- Documentation: Clear code comments and technical documentation`,
    learningsFr: `Compétences Techniques Apprises :
- Appels Système POSIX : Compréhension approfondie de fork, exec, wait, gestion des signaux, cycle de vie des processus
- Gestion des Processus : Synchronisation parent-enfant, descripteurs de fichiers, nettoyage des ressources
- Programmation C : Gestion mémoire, manipulation de pointeurs, traitement de chaînes, organisation de code modulaire
- Analyse et Tokenisation : Machines à états, gestion des cas limites, validation des entrées
- Programmation Système : Comprendre comment les shells fonctionnent au niveau du système d'exploitation

Compétences Transversales :
- Résolution de Problèmes : Débogage des interactions système complexes et conditions de course
- Pensée Système : Compréhension des processus et signaux au niveau du système d'exploitation
- Tests : Écriture de tests unitaires pour la fonctionnalité d'analyse principale
- Documentation : Commentaires de code clairs et documentation technique`,
    learningsZh: `学到的技术技能：
- POSIX系统调用：深入理解fork、exec、wait、信号处理、进程生命周期
- 流程管理：父子进程同步、文件描述符、资源清理
- C编程：内存管理、指针操作、字符串处理、模块化代码组织
- 解析和分词：状态机、边界情况处理、输入验证
- 系统编程：理解shell如何在OS级别工作

软技能：
- 问题解决：调试复杂系统交互和竞态条件
- 系统思维：在OS级别理解进程和信号
- 测试：为核心解析功能编写单元测试
- 文档：清晰的代码注释和技术文档`,
    stack: ['C', 'Makefile', 'GCC', 'Unix/Linux'],
    image: 'https://via.placeholder.com/800x600?text=Mini-Shell',
    images: [
      'https://via.placeholder.com/800x600?text=Mini-Shell+CLI',
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/Alex-Amedro',
    status: 'completed' as const,
    date: '2025-05',
    featured: true,
  },
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
