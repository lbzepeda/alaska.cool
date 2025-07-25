#!/bin/bash

# Script de optimización de medios para Alaska Cool
# Convierte imágenes a WebP y videos a WebM con configuraciones optimizadas

echo "🚀 Iniciando optimización de medios para Alaska Cool..."

# Crear directorio de salida si no existe
mkdir -p public/projects/optimized

# Función para convertir imágenes a WebP
convert_images() {
    echo "📸 Convirtiendo imágenes a WebP..."
    
    # Buscar todas las imágenes en public/projects
    find public/projects -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r file; do
        # Obtener nombre base sin extensión
        basename=$(basename "$file" | sed 's/\.[^.]*$//')
        
        # Convertir a WebP con calidad 85
        ffmpeg -i "$file" -q:v 85 -preset default "public/projects/optimized/${basename}.webp" -y
        
        echo "✅ Convertido: $file -> ${basename}.webp"
    done
}

# Función para convertir videos a WebM
convert_videos() {
    echo "🎥 Convirtiendo videos a WebM..."
    
    # Buscar todos los videos en public/projects
    find public/projects -type f \( -iname "*.mov" -o -iname "*.mp4" -o -iname "*.avi" \) | while read -r file; do
        # Obtener nombre base sin extensión
        basename=$(basename "$file" | sed 's/\.[^.]*$//')
        
        # Convertir a WebM con configuración optimizada
        ffmpeg -i "$file" \
            -c:v libvpx-vp9 \
            -crf 30 \
            -b:v 1M \
            -c:a libopus \
            -b:a 128k \
            -r 30 \
            -vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2" \
            "public/projects/optimized/${basename}.webm" -y
        
        echo "✅ Convertido: $file -> ${basename}.webm"
    done
}

# Función para generar nombres optimizados
generate_filenames() {
    echo "📝 Generando nombres de archivos sugeridos..."
    
    cat << 'EOF'
    
📋 NOMBRES SUGERIDOS PARA TUS ARCHIVOS:
    
Archivos actuales -> Nombres optimizados:
• DJI_20250514_100235_834 a.m.JPG -> vista-aerea-comercial.webp
• IMG_5571 2.MOV -> proceso-instalacion.webm
• IMG_5623.JPG -> residencial-clima.webp
• IMG_5628.JPG -> industrial-completo.webp
• IMG_5643.JPG -> precision-install.webp
• WhatsApp Image 2025-07-25 at 11.03.53 (1).jpeg -> detalle-tecnico.webp

🔧 PASOS SIGUIENTES:
1. Ejecuta este script: ./optimize-media.sh
2. Renombra los archivos en public/projects/optimized/
3. Mueve los archivos optimizados a public/projects/
4. En ProjectGallery.astro cambia: const projectMedia = getProjectMedia();
5. Elimina los archivos originales

⚡ CONFIGURACIÓN ACTUAL:
• Imágenes WebP: Calidad 85%, optimización máxima
• Videos WebM: VP9 codec, 720p, 1Mbps, 30fps
• Tamaño objetivo: <500KB imágenes, <10MB videos

EOF
}

# Verificar si ffmpeg está instalado
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ FFmpeg no está instalado."
    echo "📦 Instala con: brew install ffmpeg (macOS) o apt install ffmpeg (Ubuntu)"
    exit 1
fi

# Ejecutar conversiones
convert_images
convert_videos
generate_filenames

echo "✅ ¡Optimización completada!"
echo "📁 Archivos optimizados en: public/projects/optimized/"