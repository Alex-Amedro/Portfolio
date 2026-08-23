# Brief de contenu — page portfolio "Drone Speedrunner"

Ce document donne à une IA de design tout ce dont elle a besoin pour concevoir
une page de portfolio, sans connaître le projet au préalable. **Aucun template
n'est imposé** — la mise en page, la structure et le choix des sections sont
laissés à ta discrétion. En revanche, tout le contenu ci-dessous doit être
disponible quelque part sur la page, sous une forme ou une autre.

---

## Qui est le porteur du projet, et pour qui cette page est faite

Étudiant ingénieur (double diplôme France/États-Unis), candidature à des postes
de **Forward Deployed Engineer** dans des scale-ups défense/drone (type
Helsing, ARX Robotics, Quantum Systems). Le public cible de cette page est
technique : ingénieurs, recruteurs techniques, personnes qui savent lire un
tableau de résultats et qui repèrent vite un projet qui sonne creux.

**Le ton à viser :** confiant mais honnête. Montrer le résultat, montrer la
difficulté surmontée, et ne pas cacher les limites — un projet qui admet ses
limites est plus crédible qu'un projet qui prétend n'en avoir aucune.

## Contrainte importante sur les vidéos

**Il n'y aura pas de montage vidéo.** Seulement des clips courts, bruts, non
édités (quelques secondes chacun, en GIF ou vidéo courte muette). Ne pas
concevoir la page autour d'une vidéo longue narrée avec transitions — prévoir
plutôt des clips courts intégrés directement dans le flux de la page, comme des
illustrations plutôt que comme un film à regarder.

---

## Le projet, en résumé

Un quadrirotor apprend, par apprentissage par renforcement, à traverser une
forêt d'obstacles à ~12 m/s de façon totalement autonome — sans carte, sans
trajectoire pré-calculée, avec pour seule perception un LiDAR 2D, sa vitesse et
son orientation.

L'objectif n'est pas de finir une piste de longueur fixe : c'est un
**« runner infini »** — voler la plus grande distance possible sans jamais
percuter un obstacle.

Onze itérations avec l'algorithme PPO ont plafonné à 20-40 % de réussite dès
qu'il y avait des obstacles (contre 97-100 % en couloir vide) — la décision
n'était pas le problème, la perception et le contrôle l'étaient. Bascule vers
**SAC** (Soft Actor-Critic), puis quinze itérations supplémentaires jusqu'au
modèle final.

## Résultats (modèle final, 30 épisodes par configuration)

| Densité d'obstacles | Piste 50 m | Piste 100 m | Piste 150 m |
|---|---|---|---|
| Vide | 100 % | — | — |
| Faible | 95 % | 96,7 % | 90 % |
| Moyenne | 95 % | 80 % | 90 % |
| Dense | 75 % | — | — |

**Distance pure (couloir vide) :** 300 m, 500 m et 1000 m franchis à 100 % de
réussite.

**Le chiffre le plus parlant :** 486 mètres parcourus sur une piste de 500 m
avec obstacles — soit 1,7× plus loin que la plus longue piste jamais vue
pendant l'entraînement (limité à 300 m). Le modèle généralise au-delà de ce
qu'il a appris.

## Ce qui rend ce projet intéressant à raconter (pas juste les chiffres)

Quatre angles, à utiliser pour donner du relief à la page plutôt qu'un simple
alignement de métriques :

**1. Un vrai obstacle de perception, résolu par le calcul, pas par tâtonnement.**
Le LiDAR (128 rayons uniformes sur 240°) avait une résolution angulaire de
1,89° entre deux rayons. Un arbre de 30 cm de rayon vu à 20 m ne couvre que
1,72° — plus fin qu'un intervalle entre rayons. Au-delà d'environ 18 mètres, un
arbre pouvait passer entre deux rayons et **rester invisible**. Le calcul de ce
seuil a mené à un capteur "fovéal" (résolution concentrée devant, comme une
fovéa oculaire) qui règle le problème sans changer le nombre de rayons.

**2. Un bug qui ne provoquait aucune erreur.** Une pénalité de reward mal
bornée a rendu, à un moment de l'entraînement, l'immobilité totale plus
rentable qu'avancer — le drone a appris à faire du surplace. Repéré non pas par
une erreur système mais par un indicateur interne (`actor_loss`) qui est passé
positif pour la première fois du projet.

**3. Une règle de sécurité qui punissait une compétence.** Une limite de
vitesse de rotation, posée tôt sans être vérifiée, tuait le drone dès qu'il
tournait vite — y compris pendant des manœuvres d'évitement réussies. Corrigée
en réentraînant avec la limite relâchée : +13 points de réussite sur la
configuration la plus difficile, et cette cause de mort a complètement disparu.

**4. Des comportements non programmés.** Le drone choisit parfois un évitement
plus complexe qu'un évitement direct, parce que le chemin le plus simple mène
vers une zone plus dense en arbres — il anticipe au-delà de l'obstacle
immédiat. Et il exécute des freinages de sauvetage in extremis, plutôt que de
subir la collision.

## Progression du projet (pour montrer le travail, pas juste le résultat)

| Version | Changement clé | Réussite (densité moyenne, 150 m) |
|---|---|---|
| Modèle intermédiaire | plafond de vitesse ajouté | 20 % |
| + | empilement de plusieurs trames d'observation | 3 % (régression, corrigée après) |
| + | curriculum d'entraînement élargi (30 → 300 m) | 77 % |
| Modèle final | correction du seuil de rotation | **90 %** |

Cette table montre qu'un changement (l'empilement de trames) a d'abord fait
régresser le résultat avant d'être rattrapé par le changement suivant — utile à
montrer, ça illustre une vraie démarche d'itération, pas une ligne droite vers
le succès.

## Limites assumées (à ne pas cacher)

- Simulation uniquement (MuJoCo), aucun test réel.
- Couloir de largeur fixe, obstacles cylindriques statiques et identiques —
  environnement structuré, pas un terrain naturel complexe.
- La densité d'obstacles la plus élevée testée (0,5) reste le point faible
  (75 %).
- Commandes de vol directes (poussée + couples), pas de couche de contrôle bas
  niveau — un choix assumé, pas un oubli, documenté comme piste d'amélioration.

## Ce qui vient ensuite (à mentionner brièvement, pas à développer)

Un passage prévu au multi-drone : plusieurs drones qui coordonnent
l'interception d'une cible mobile dans le même type d'environnement, avec
partage d'informations entre eux. Pas encore commencé — à présenter comme une
suite en préparation, pas comme un résultat.

---

## Assets visuels disponibles (clips courts bruts, pas de montage)

Chaque clip fait quelques secondes, sans son, sans titre incrusté. Le rendu
montre le drone dans son environnement 3D (MuJoCo), avec un survol optionnel
des rayons LiDAR superposés (rouge = obstacle le plus proche, jaune = droit
devant, vert = bords du champ de perception).

| Clip | Contenu | Usage suggéré |
|---|---|---|
| **Vol en forêt dense** | le modèle final traverse une forêt d'obstacles, esquives fluides | image/clip d'ouverture |
| **Vue LiDAR** | même scène, zoomée, rayons colorés visibles | à côté de l'explication technique du capteur |
| **Avant / après** | un modèle très ancien qui part en vrille, et le modèle final qui vole proprement, même scénario | section "progression" |
| **Comportement d'évitement complexe** | le drone choisit un chemin détourné pour éviter une zone dense plus loin | section "comportements émergents" |
| **Longue distance** | vol en couloir vide sur 1000 m | section "résultats" |
| **Échecs des premiers modèles** | quelques crashs des toutes premières versions | section "progression" ou "ce que ça donnait au début" |

Ces clips existent mais ne sont pas encore enregistrés au moment de la
rédaction de ce brief — prévoir la mise en page pour les recevoir (emplacements
GIF/vidéo courte), pas forcément les intégrer immédiatement.

---

## Ressources pour aller plus loin (liens à prévoir sur la page)

- Dépôt de code (à venir — projet en cours de préparation pour publication)
- Journal d'expériences complet : historique run par run, hypothèses écrites
  avant chaque test, résultats — la pièce la plus révélatrice de la démarche
  pour qui veut creuser
- Rapport technique complet de la phase 1 (version longue de ce résumé)

---

## Instructions finales pour la conception

- Pas de template imposé : structure, ordre des sections, style visuel — à ta
  main.
- Le contenu ci-dessus doit être exploitable dans son ensemble, mais tu peux
  reformuler, condenser, ou mettre en avant différemment selon ton jugement de
  design.
- Ne pas inventer de chiffres, de citations, ou de fonctionnalités qui ne sont
  pas mentionnées ici.
- Un visiteur qui ne lit que les gros titres et regarde les clips doit
  comprendre le projet en quelques secondes. Un visiteur qui veut creuser doit
  pouvoir le faire via les liens.
