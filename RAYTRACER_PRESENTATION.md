# 🎨 Rayt - Projet Ray Tracer 3D

## 📝 Description Concise (2-3 paragraphes)

**Rayt** est un projet de rendu 3D combinant deux outils : un **éditeur de scène interactif** (type mini-Blender) et un **ray tracer performant**.

L'éditeur, construit avec **OpenGL** et **ImGui**, permet de placer des objets 3D (sphères, plans), ajuster leurs matériaux et couleurs en temps réel, importer des photos en fond, et sauvegarder le tout en JSON. Le ray tracer génère ensuite des images photoréalistes avec différents matériaux (métal, verre, néons), effets d'ombres et réflexions, anti-aliasing et profondeur de champ.

Le projet m'a permis de maîtriser le **C++**, **OpenGL** (shaders, objets, pipeline), les **mathématiques 3D** (vecteurs, intersections), les **calculs physiques** (optique, réfraction), le **multi-threading** et l'**organisation de projets complexes**.

---

## 🎯 Ce Que J'ai Fait

### 1️⃣ **Éditeur de Scène 3D (Mini-Blender)**
Un outil interactif construit avec OpenGL et ImGui pour :
- Placer et manipuler des objets 3D en temps réel
- Contrôler une caméra orbitale (rotation, zoom, déplacement)
- Importer des photos de fond pour composer la scène
- Ajuster matériaux, couleurs, positions avec retour visuel instantané
- Sauvegarder et charger des scènes en JSON

### 2️⃣ **Ray Tracer Performant**
Un moteur de rendu qui transforme la scène en image photoréaliste :
- **Matériaux variés** : Diffus, Métal (avec rugosité), Verre (avec réfraction), Néons émissifs, Miroir
- **Éclairage réaliste** : Ombres portées, réflexions, effets de lumière
- **Effets visuels** : Anti-aliasing (bords lisses), Profondeur de champ (effet de focus)
- **Rendu rapide** : Multi-threading pour utiliser tous les cœurs du processeur

**Workflow simple** : Dessiner la scène dans l'éditeur → Cliquer sur "Render" → Obtenir une belle image !

---

## 💡 Ce Que Ça M'a Apporté

### **Compétences Techniques**

**C++ Moderne**
- Programmation orientée objet (classes, héritage)
- Gestion de la mémoire (pointeurs, smart pointers)
- STL (vector, map, filesystem)

**OpenGL**
- Pipeline de rendu (shaders GLSL, VAO/VBO)
- Gestion d'objets 3D et de la caméra
- Matrices de transformation

**Mathématiques 3D**
- Vecteurs et produits scalaire/vectoriel
- Intersections rayon-sphère et rayon-plan
- Transformations dans l'espace

**Physique & Optique**
- Réflexion de la lumière
- Réfraction (loi de Snell)
- Équations de Fresnel

**JSON**
- Sauvegarde et chargement de données
- Sérialisation de scènes 3D

**Optimisation**
- Multi-threading pour accélérer le rendu
- Structures de données efficaces

**Organisation de Projet**
- Architecture modulaire (séparation éditeur / ray tracer)
- Code propre et maintenable
- Build system (Makefiles)

### **Compétences Transversales**

- **Résolution de problèmes** : Debugging d'algorithmes complexes (intersections, réfractions)
- **Apprentissage autonome** : Étude de concepts avancés de graphiques 3D
- **Gestion de projet** : Développement itératif, tests et validation
- **Persévérance** : Surmonter les défis mathématiques et techniques

---

## 📸 Suggestions de Captures d'Écran

### 1. **Interface de l'Éditeur**
*Légende* : "Éditeur 3D interactif : prévisualisation OpenGL en temps réel et panneau ImGui pour ajuster les propriétés des objets (position, couleur, matériau)."

### 2. **Rendu Photoréaliste Final**
*Légende* : "Image générée par le ray tracer : sphères métalliques avec rugosité, verre avec réfraction, et néons émissifs sur fond sombre."

### 3. **Comparaison Matériaux**
*Légende* : "Système de matériaux : métal poli, métal brossé, verre transparent, diffus mat, néon émissif."

### 4. **Profondeur de Champ**
*Légende* : "Effet de profondeur de champ : focus sur l'objet central, flou artistique sur l'arrière-plan."

### 5. **Photo de Fond Importée**
*Légende* : "Intégration d'une photo de fond dans l'éditeur pour composer la scène 3D."

---

## 💼 Pour LinkedIn

Fier de présenter **Rayt**, mon projet de rendu 3D développé en C++ ! 🎨

🖥️ **Éditeur 3D interactif** (OpenGL + ImGui) type mini-Blender  
📸 **Ray tracer performant** avec matériaux réalistes (métal, verre, néons)  
⚡ **Rendu multi-threadé** pour des performances optimales  
🎬 **Effets visuels** : profondeur de champ, anti-aliasing  
💾 **Import de photos** et sauvegarde JSON  

**Compétences développées :**
- C++ moderne (OOP, pointeurs, STL)
- OpenGL (shaders, pipeline de rendu)
- Mathématiques 3D et physique optique
- Multi-threading et optimisation
- Organisation de projets complexes

Un super projet pour allier math, physique et programmation ! 💻

#ComputerGraphics #RayTracing #CPlusPlus #OpenGL #3D #ENSEEIHT

---

## 🌐 Pour GitHub README

# 🎨 Rayt - 3D Ray Tracer & Scene Editor

A 3D rendering project combining an interactive scene editor (mini-Blender) with a photorealistic ray tracer, built in C++.

## ✨ Features

### Interactive 3D Editor
- ✅ Real-time OpenGL preview
- ✅ ImGui interface for easy scene creation
- ✅ Orbital camera controls (rotate, zoom, pan)
- ✅ Import background images
- ✅ Save/load scenes in JSON

### Ray Tracer
- ✅ Multiple materials: Diffuse, Metal, Glass, Emissive, Mirror
- ✅ Realistic lighting and shadows
- ✅ Anti-aliasing for smooth renders
- ✅ Depth of field effect
- ✅ Multi-threaded rendering

## 🛠️ Tech Stack

- **C++** - Modern C++ with OOP
- **OpenGL** - Real-time 3D preview
- **ImGui** - User interface
- **GLM** - Mathematics library
- **nlohmann/json** - Scene persistence

## 📚 What I Learned

- C++ programming (OOP, pointers, STL)
- OpenGL graphics (shaders, rendering pipeline)
- 3D mathematics (vectors, intersections, transformations)
- Physics calculations (optics, refraction, Snell's law)
- Multi-threading and performance optimization
- Project organization and clean architecture

## 🚀 Workflow

1. Design your scene in the OpenGL editor
2. Adjust materials and lighting
3. Hit "Render" to generate a photorealistic image

---

🎓 **Engineering Student** - ENSEEIHT (Imaging & Multimedia)  
📧 Contact: alex.amedro@gmail.com

---

## ✅ Points Clés pour CV

**Rayt - Ray Tracer 3D & Éditeur de Scène**
- Développement d'un éditeur 3D interactif (OpenGL, ImGui) avec caméra orbitale et import d'images
- Implémentation d'un moteur de ray tracing performant avec 5 types de matériaux (diffus, métal, verre, émissif, miroir)
- Calculs physiques d'optique : réflexion, réfraction (loi de Snell), équations de Fresnel
- Rendu multi-threadé pour optimisation des performances
- Architecture modulaire avec séparation claire des composants
- Technologies : C++, OpenGL (shaders GLSL), ImGui, GLM, JSON
