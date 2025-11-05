# 🎨 BAXTO Stilo - Portafolio Profesional de Tatuajes

Una aplicación web de una sola página (SPA) moderna y profesional para un portafolio de tatuajes con estética chicano gótica, fondo 3D dinámico y diseño mobile-first.

## ✨ Características Principales

### 🎯 Diseño y Estética
- **Estilo Chicano Gótico**: Tipografía Metal Mania y Creepster para títulos
- **Tema Oscuro Profesional**: Fondo negro (#0a0a0a) con acentos cian (#00ffff)
- **Diseño Mobile-First**: Completamente responsivo y optimizado para todos los dispositivos
- **Efecto Glass Morphism**: Elementos con efecto de vidrio esmerilado y blur

### 🌌 Fondo 3D Dinámico
- **Three.js Integration**: Fondo 3D con partículas de pigmento y agujas animadas
- **Paralaje Reactivo**: Responde al movimiento del dispositivo (DeviceOrientationEvent)
- **Partículas Animadas**: 150 partículas de pigmento en colores cian, azul, púrpura y blanco
- **Agujas Rotativas**: 20 agujas de tatuaje girando dinámicamente en el espacio 3D

### 📱 Funcionalidades
- **Carrusel de Portfolio**: 4 trabajos de tatuaje con navegación por flechas, puntos y gestos táctiles
- **Navegación Suave**: Scroll smooth a todas las secciones
- **Botones Flotantes**: Acceso rápido a redes sociales (Instagram, Facebook, TikTok)
- **Botón de Contacto Rápido**: WhatsApp Business flotante en esquina inferior
- **Animaciones Interactivas**: Efectos hover, fade-in, glow y ripple

### 📄 Secciones de Contenido
1. **Header Sticky**: Navegación fija con logo y menú
2. **Hero Section**: Presentación principal con CTAs
3. **Portfolio**: Carrusel de 4 trabajos destacados
4. **Acerca de Mí**: Información del artista con estadísticas animadas
5. **Blog**: 4 artículos recientes sobre tatuajes
6. **Cuidados**: Guía completa de cuidados post-tatuaje
7. **Footer**: Enlaces rápidos y contacto

### 🎮 Interactividad
- Navegación por teclado (flechas izquierda/derecha en carrusel)
- Gestos táctiles (swipe en carrusel)
- Auto-avance del carrusel cada 8 segundos
- Animación de números en estadísticas
- Efecto de glow dinámico en títulos
- Scroll spy para navegación activa

## 📁 Estructura del Proyecto

```
baxto-stilo/
├── index.html                 # Archivo principal HTML
├── js/
│   ├── three-background.js   # Fondo 3D con Three.js
│   ├── carousel.js           # Funcionalidad del carrusel
│   └── interactions.js       # Interacciones y efectos
├── README.md                 # Este archivo
└── assets/                   # (Opcional) Carpeta para assets locales
```

## 🚀 Cómo Usar

### Opción 1: Abrir Directamente
1. Descarga o clona el proyecto
2. Abre `index.html` en tu navegador web
3. ¡Disfruta la experiencia!

### Opción 2: Servidor Local (Recomendado)
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con Live Server en VS Code
# Instala la extensión "Live Server" y haz clic derecho > "Open with Live Server"
```

Luego accede a `http://localhost:8000` en tu navegador.

## 🎨 Personalización

### Cambiar Colores
Edita los valores de color en `index.html`:
- Color principal: `#00ffff` (cian)
- Fondo: `#0a0a0a` (negro)
- Texto: `#ffffff` (blanco)

### Cambiar Contenido
- **Nombre del Artista**: Busca "BAXTO Stilo" y reemplaza
- **Número de WhatsApp**: Reemplaza `525512345678` en todos los enlaces `wa.me`
- **Imágenes del Portfolio**: Reemplaza las URLs de Unsplash con tus propias imágenes
- **Textos**: Edita el contenido en español directamente en el HTML

### Agregar Más Slides al Carrusel
1. Copia un `<div class="carousel-slide">` existente
2. Cambia la imagen y contenido
3. Agrega un nuevo `<div class="carousel-dot">` en la navegación
4. Actualiza el número total en `carousel.js` si es necesario

## 🔧 Dependencias

- **Tailwind CSS**: Framework CSS (CDN)
- **Three.js**: Librería 3D (CDN)
- **Google Fonts**: Tipografías Metal Mania y Creepster (CDN)
- **Vanilla JavaScript**: Sin dependencias adicionales

Todas las dependencias se cargan desde CDN, no requiere instalación.

## 📱 Compatibilidad

- ✅ Chrome/Chromium (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Navegadores móviles (iOS Safari, Chrome Mobile)
- ✅ Tablets

## 🎯 Características Técnicas

### Performance
- Optimizado para dispositivos móviles
- Renderizado 3D eficiente con Three.js
- Lazy loading de imágenes
- Animaciones GPU-aceleradas

### Accesibilidad
- Navegación por teclado
- Soporte para lectores de pantalla
- Contraste de colores WCAG AA
- Atributos ARIA donde es necesario

### SEO
- Meta tags apropiados
- Estructura semántica HTML5
- Títulos descriptivos

## 🌐 Despliegue

### Netlify
1. Conecta tu repositorio de GitHub
2. Configura el comando de build (no necesario)
3. Deploy automático

### Vercel
1. Importa el proyecto
2. Deploy con un clic

### GitHub Pages
1. Sube a un repositorio
2. Activa GitHub Pages en settings
3. Accede a `https://tu-usuario.github.io/baxto-stilo`

## 📞 Contacto y Enlaces

- **WhatsApp**: https://wa.me/525512345678
- **Instagram**: https://instagram.com
- **Facebook**: https://facebook.com
- **TikTok**: https://tiktok.com

## 📝 Contenido Mock Data

El proyecto incluye datos ficticios realistas:
- Artista con 10+ años de experiencia
- 500+ tatuajes realizados
- 100% satisfacción de clientes
- 4 trabajos destacados en portfolio
- 4 artículos de blog
- Guía completa de cuidados

## 🎓 Aprendizaje

Este proyecto demuestra:
- Uso de Three.js para gráficos 3D
- DeviceOrientationEvent para paralaje móvil
- Tailwind CSS para estilos
- Vanilla JavaScript sin frameworks
- Diseño responsive
- Animaciones CSS y JavaScript
- Interactividad avanzada

## 📄 Licencia

Proyecto de demostración. Libre para usar y modificar.

## 🙏 Créditos

- **Imágenes**: Unsplash (placeholder)
- **Tipografías**: Google Fonts
- **Librería 3D**: Three.js
- **Framework CSS**: Tailwind CSS

---

**Creado con ❤️ para BAXTO Stilo**

*Transformando historias en obras de arte que se lucen en la piel.*