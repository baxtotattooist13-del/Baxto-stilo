# 🎨 Guía de Personalización - BAXTO Stilo

Esta guía te ayudará a personalizar completamente el portafolio para tu negocio de tatuajes.

## 📝 Cambios Básicos

### 1. Nombre del Artista y Estudio

**Archivo**: `index.html`

Busca y reemplaza:
```html
<!-- Antes -->
<span class="text-white">BAXTO</span>
<span class="cyan-glow"> Stilo</span>

<!-- Después -->
<span class="text-white">TU NOMBRE</span>
<span class="cyan-glow"> Tu Estudio</span>
```

### 2. Lema/Tagline

**Archivo**: `index.html`

Busca la sección Hero y reemplaza:
```html
<!-- Antes -->
"Cada historia en BAXTO Stilo se transforma en obras de arte que se lucen en la piel."

<!-- Después -->
"Tu lema personalizado aquí"
```

### 3. Número de WhatsApp

**Archivo**: `index.html`

Reemplaza todas las instancias de `525512345678` con tu número:
```html
<!-- Antes -->
https://wa.me/525512345678

<!-- Después -->
https://wa.me/TU_NUMERO_AQUI
```

**Nota**: El formato debe ser: código de país + número sin espacios ni guiones
- México: 52 + número (ej: 525512345678)
- Colombia: 57 + número
- Argentina: 54 + número

### 4. Información de Contacto

**Archivo**: `index.html` (Footer)

Busca y actualiza:
```html
<p class="text-gray-400 mb-2">📱 +52 55 1234 5678</p>
<p class="text-gray-400 mb-4">📧 info@baxtostilo.com</p>
```

## 🖼️ Cambiar Imágenes del Portfolio

### Opción 1: Usar URLs de Unsplash (Recomendado)

1. Ve a https://unsplash.com
2. Busca imágenes de tatuajes
3. Copia la URL de la imagen
4. Reemplaza en `index.html`:

```html
<!-- Antes -->
<img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop" alt="Tatuaje Chicano">

<!-- Después -->
<img src="https://images.unsplash.com/photo-TU-ID-AQUI?w=500&h=500&fit=crop" alt="Tu Descripción">
```

### Opción 2: Usar Tus Propias Imágenes

1. Crea una carpeta `images` en el proyecto
2. Sube tus fotos de tatuajes
3. Reemplaza las URLs:

```html
<img src="images/tatuaje-1.jpg" alt="Mi Tatuaje">
```

## 📄 Actualizar Contenido del Portfolio

**Archivo**: `index.html` (Sección Portfolio)

Para cada slide del carrusel:

```html
<h3 class="text-2xl font-bold mb-4 cyan-glow">Nombre del Tatuaje</h3>
<p class="text-gray-300 mb-6">
    Descripción detallada de tu trabajo...
</p>
<div class="flex gap-4">
    <span class="text-sm bg-cyan-900 bg-opacity-50 px-3 py-1 rounded text-cyan-300">Estilo</span>
    <span class="text-sm bg-cyan-900 bg-opacity-50 px-3 py-1 rounded text-cyan-300">Tamaño</span>
    <span class="text-sm bg-cyan-900 bg-opacity-50 px-3 py-1 rounded text-cyan-300">Técnica</span>
</div>
```

## 👤 Actualizar Sección "Acerca de Mí"

**Archivo**: `index.html` (Sección About)

Reemplaza el contenido:

```html
<p class="text-gray-300 mb-4 leading-relaxed">
    Soy [TU NOMBRE], un artista del tatuaje con [AÑOS] años de experiencia...
</p>
```

Actualiza las estadísticas:

```html
<div class="text-3xl font-bold cyan-glow">10+</div>
<div class="text-sm text-gray-400">Años de Experiencia</div>
```

Cambia la imagen:

```html
<img src="https://images.unsplash.com/photo-TU-ID?w=500&h=500&fit=crop" alt="Tu Nombre">
```

## 📰 Actualizar Blog

**Archivo**: `index.html` (Sección Blog)

Para cada artículo:

```html
<div class="blog-card">
    <div class="blog-date">TU FECHA</div>
    <h3 class="text-2xl font-bold mt-4 mb-4">Tu Título</h3>
    <p class="text-gray-300 mb-6">
        Tu contenido del artículo...
    </p>
    <a href="https://wa.me/525512345678" class="text-cyan-400 hover:text-cyan-300 transition">Leer más →</a>
</div>
```

## 🏥 Actualizar Sección de Cuidados

**Archivo**: `index.html` (Sección Care)

Personaliza los consejos de cuidado:

```html
<div class="care-item">
    <h4>🧼 Tu Consejo</h4>
    <p class="text-gray-300">
        Tu descripción del cuidado...
    </p>
</div>
```

## 🎨 Cambiar Colores

### Cambiar Color Principal (Cian)

**Archivo**: `index.html` (en la sección `<style>`)

Busca todas las instancias de `#00ffff` y reemplaza:

```css
/* Antes */
color: #00ffff;
border-color: #00ffff;

/* Después */
color: #TU_COLOR_HEX;
border-color: #TU_COLOR_HEX;
```

**Colores sugeridos**:
- Púrpura: `#9d4edd`
- Rosa: `#ff006e`
- Verde: `#00f5ff`
- Naranja: `#ff6b35`

### Cambiar Fondo

Busca `background-color: #0a0a0a` y reemplaza con tu color.

## 🔗 Actualizar Enlaces de Redes Sociales

**Archivo**: `index.html` (Social Dock)

```html
<a href="https://instagram.com/tu-usuario" target="_blank" class="floating-button" title="Instagram">
    <!-- SVG -->
</a>
```

## 📱 Agregar Más Slides al Carrusel

1. Copia un slide completo:

```html
<div class="carousel-slide">
    <div class="grid md:grid-cols-2 gap-8 p-8">
        <!-- Contenido -->
    </div>
</div>
```

2. Agrega un nuevo punto de navegación:

```html
<div class="carousel-dot" onclick="goToSlide(4)"></div>
```

3. Actualiza el número de slides en `js/carousel.js`:

```javascript
const totalSlides = 5; // Cambiar según el número de slides
```

## 🎯 Cambiar Tipografía

**Archivo**: `index.html` (en `<head>`)

Reemplaza las fuentes de Google Fonts:

```html
<!-- Antes -->
<link href="https://fonts.googleapis.com/css2?family=Metal+Mania&family=Creepster&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">

<!-- Después -->
<link href="https://fonts.googleapis.com/css2?family=TU_FUENTE_1&family=TU_FUENTE_2&display=swap" rel="stylesheet">
```

Luego actualiza las clases CSS:

```css
.gothic-title {
    font-family: 'Tu Nueva Fuente', cursive;
}
```

## 🌐 Cambiar Dominio y Metadatos

**Archivo**: `index.html` (en `<head>`)

```html
<title>Tu Nombre - Portafolio de Tatuajes Profesional</title>
<meta name="description" content="Tu descripción aquí">
```

## 🚀 Desplegar tu Sitio

### Opción 1: Netlify (Recomendado)

1. Ve a https://netlify.com
2. Conecta tu repositorio de GitHub
3. Netlify desplegará automáticamente

### Opción 2: Vercel

1. Ve a https://vercel.com
2. Importa tu proyecto
3. Deploy con un clic

### Opción 3: GitHub Pages

1. Sube a GitHub
2. Ve a Settings → Pages
3. Selecciona la rama main
4. Tu sitio estará en `https://tu-usuario.github.io/baxto-stilo`

## 📊 Usar el Archivo config.json

El archivo `config.json` contiene toda la configuración. Puedes usarlo para:

1. Centralizar cambios
2. Facilitar actualizaciones futuras
3. Integrar con un CMS

Ejemplo de uso en JavaScript:

```javascript
fetch('config.json')
    .then(response => response.json())
    .then(config => {
        console.log(config.artist.name);
        console.log(config.contact.whatsapp);
    });
```

## ✅ Checklist de Personalización

- [ ] Cambiar nombre del artista
- [ ] Actualizar número de WhatsApp
- [ ] Cambiar imágenes del portfolio
- [ ] Actualizar descripción personal
- [ ] Cambiar información de contacto
- [ ] Actualizar artículos del blog
- [ ] Personalizar sección de cuidados
- [ ] Cambiar colores si lo deseas
- [ ] Actualizar enlaces de redes sociales
- [ ] Probar en dispositivos móviles
- [ ] Desplegar en producción

## 🆘 Solución de Problemas

### Las imágenes no cargan
- Verifica que la URL sea correcta
- Asegúrate de que la imagen sea accesible públicamente
- Intenta con una URL de Unsplash

### El carrusel no funciona
- Verifica que los archivos JavaScript estén en la carpeta `js/`
- Abre la consola del navegador (F12) para ver errores
- Recarga la página

### Los colores no cambian
- Asegúrate de reemplazar TODOS los valores hex
- Usa un editor de búsqueda y reemplazo (Ctrl+H)
- Limpia el caché del navegador

### El sitio se ve lento
- Optimiza las imágenes (usa herramientas como TinyPNG)
- Reduce el número de partículas en `three-background.js`
- Usa un CDN para servir archivos estáticos

## 📞 Soporte

Para más ayuda:
1. Revisa el README.md
2. Consulta la documentación de Three.js
3. Busca en Stack Overflow
4. Contacta a un desarrollador web

---

**¡Disfruta personalizando tu portafolio!** 🎨