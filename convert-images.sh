#!/bin/bash

# Script pour convertir et optimiser les images du portfolio
# Nécessite ImageMagick: sudo apt-get install imagemagick

echo "🖼️  Conversion des images du portfolio..."

# 1. Convertir et redimensionner la photo de profil en avatar
if [ -f "public/IMG_20250829_212022.jpg" ]; then
    echo "📸 Conversion de la photo de profil en avatar (400x400)..."
    convert "public/IMG_20250829_212022.jpg" \
        -resize 400x400^ \
        -gravity center \
        -extent 400x400 \
        -quality 85 \
        "public/avatar.jpg"
    echo "✅ Avatar créé : public/avatar.jpg"
fi

# 2. Convertir le fichier PPM en JPG pour le raytracer
if [ -f "public/image (3).ppm" ]; then
    echo "🎨 Conversion du rendu raytracing PPM vers JPG (1200x630)..."
    convert "public/image (3).ppm" \
        -resize 1200x630^ \
        -gravity center \
        -extent 1200x630 \
        -quality 90 \
        "public/raytracer-render.jpg"
    echo "✅ Image raytracer créée : public/raytracer-render.jpg"
    
    # Créer aussi une version 800x600 si besoin
    convert "public/image (3).ppm" \
        -resize 800x600^ \
        -gravity center \
        -extent 800x600 \
        -quality 90 \
        "public/raytracer-800x600.jpg"
    echo "✅ Version alternative créée : public/raytracer-800x600.jpg"
fi

echo ""
echo "✨ Conversion terminée !"
echo ""
echo "Fichiers créés :"
ls -lh public/*.jpg 2>/dev/null | awk '{print "  - " $9 " (" $5 ")"}'
