# 📑 Índice de Archivos - BAXTO Stilo

## 📂 Estructura Completa del Proyecto

```
baxto-stilo/
├── 📄 index.html                    (802 líneas) - Aplicación principal
├── 📁 js/
│   ├── three-background.js         (226 líneas) - Fondo 3D dinámico
│   ├── carousel.js                 (92 líneas)  - Carrusel de portfolio
│   └── interactions.js             (309 líneas) - Interacciones y efectos
├── ⚙️ config.json                   - Configuración centralizada
├── 📖 README.md                     - Documentación principal
├── 🎨 PERSONALIZACION.md            - Guía de personalización
├── 🚀 INICIO_RAPIDO.md              - Guía de inicio rápido
├── 📊 RESUMEN_PROYECTO.md           - Resumen del proyecto
└── 📑 INDEX.md                      - Este archivo

Total: 1,429 líneas de código | 96 KB
```

---

## 📄 Descripción de Archivos

### 🎯 index.html (802 líneas)
**Archivo principal de la aplicación**

Contiene:
- ✅ Estructura HTML5 completa
- ✅ Estilos CSS incrustados (~400 líneas)
- ✅ Todas las secciones de contenido
- ✅ Carrusel de portfolio
- ✅ Formularios y CTAs
- ✅ Botones flotantes
- ✅ Footer con contacto

**Secciones principales:**
1. Header sticky con navegación
2. Hero section con presentación
3. Portfolio con carrusel
4. Acerca de mí con estadísticas
5. Blog con 4 artículos
6. Cuidados con 6 consejos
7. Footer con enlaces

---

### 🌌 js/three-background.js (226 líneas)
**Fondo 3D dinámico con Three.js**

Características:
- ✅ Inicialización de escena 3D
- ✅ 150 partículas de pigmento animadas
- ✅ 20 agujas rotativas
- ✅ Iluminación dinámica
- ✅ Paralaje reactivo (DeviceOrientationEvent)
- ✅ Animación continua
- ✅ Responsive al redimensionar ventana

**Funciones principales:**
- `initThreeBackground()` - Inicializa la escena
- `createPigmentParticles()` - Crea partículas
- `createNeedles()` - Crea agujas
- `handleDeviceOrientation()` - Detecta inclinación
- `animate()` - Loop de animación

---

### 🎠 js/carousel.js (92 líneas)
**Funcionalidad del carrusel**

Características:
- ✅ Navegación por flechas
- ✅ Navegación por puntos
- ✅ Auto-avance cada 8 segundos
- ✅ Navegación por teclado
- ✅ Gestos táctiles (swipe)
- ✅ Transiciones suaves

**Funciones principales:**
- `showSlide(n)` - Muestra un slide específico
- `nextSlide()` - Siguiente slide
- `previousSlide()` - Slide anterior
- `goToSlide(n)` - Ir a slide específico
- `handleSwipe()` - Maneja gestos táctiles

---

### ✨ js/interactions.js (309 líneas)
**Interacciones y efectos avanzados**

Características:
- ✅ Scroll suave
- ✅ Animaciones en scroll
- ✅ Efecto glow dinámico
- ✅ Animación de números
- ✅ Paralaje en scroll
- ✅ Efecto ripple en clics
- ✅ Scroll spy
- ✅ Accesibilidad mejorada

**Funciones principales:**
- `animateNumbers()` - Anima números
- `handleSwipe()` - Maneja swipe
- `isMobileDevice()` - Detecta dispositivo
- Múltiples event listeners

---

### ⚙️ config.json (4 KB)
**Configuración centralizada**

Contiene:
- ✅ Información del artista
- ✅ Datos de contacto
- ✅ Enlaces de redes sociales
- ✅ Paleta de colores
- ✅ Portfolio (4 trabajos)
- ✅ Blog (4 artículos)
- ✅ Configuración de características

**Estructura:**
```json
{
  "artist": { ... },
  "contact": { ... },
  "social": { ... },
  "colors": { ... },
  "portfolio": [ ... ],
  "blog": [ ... ],
  "features": { ... }
}
```

---

## 📖 Archivos de Documentación

### README.md (6 KB)
**Documentación principal del proyecto**

Secciones:
- Características principales
- Estructura del proyecto
- Cómo usar
- Personalización
- Dependencias
- Compatibilidad
- Características técnicas
- Despliegue
- Créditos

**Ideal para:** Entender qué es el proyecto y cómo funciona

---

### PERSONALIZACION.md (7.9 KB)
**Guía completa de personalización**

Secciones:
- Cambios básicos (nombre, lema, WhatsApp)
- Cambiar imágenes
- Actualizar contenido
- Cambiar colores
- Cambiar tipografía
- Agregar más slides
- Despliegue
- Solución de problemas

**Ideal para:** Personalizar el proyecto para tu negocio

---

### INICIO_RAPIDO.md (3.6 KB)
**Guía de inicio rápido**

Secciones:
- 5 minutos para empezar
- Probar en móvil
- Cambios más comunes
- Desplegar en 5 minutos
- Checklist
- Problemas comunes

**Ideal para:** Empezar rápidamente sin leer toda la documentación

---

### RESUMEN_PROYECTO.md (9 KB)
**Resumen completo del proyecto**

Secciones:
- Características implementadas
- Tecnologías utilizadas
- Contenido mock data
- Paleta de colores
- Compatibilidad
- Estadísticas
- Características destacadas
- Conclusión

**Ideal para:** Tener una visión general del proyecto

---

### INDEX.md (Este archivo)
**Índice de archivos del proyecto**

Proporciona:
- Estructura visual del proyecto
- Descripción de cada archivo
- Líneas de código
- Funciones principales
- Guía de navegación

**Ideal para:** Navegar rápidamente entre archivos

---

## 🗺️ Guía de Navegación

### Si quieres...

**Empezar rápidamente**
→ Lee `INICIO_RAPIDO.md`

**Entender el proyecto**
→ Lee `README.md`

**Personalizar para tu negocio**
→ Lee `PERSONALIZACION.md`

**Ver un resumen completo**
→ Lee `RESUMEN_PROYECTO.md`

**Entender la estructura de código**
→ Lee `INDEX.md` (este archivo)

**Cambiar configuración**
→ Edita `config.json`

**Modificar el HTML**
→ Edita `index.html`

**Cambiar el fondo 3D**
→ Edita `js/three-background.js`

**Cambiar el carrusel**
→ Edita `js/carousel.js`

**Agregar interacciones**
→ Edita `js/interactions.js`

---

## 📊 Estadísticas del Código

| Métrica | Valor |
|---------|-------|
| Líneas HTML | 802 |
| Líneas CSS | ~400 |
| Líneas JavaScript | 627 |
| Líneas Totales | 1,429 |
| Archivos | 8 |
| Tamaño Total | 96 KB |
| Dependencias Externas | 3 (CDN) |

---

## 🎯 Flujo de Uso

```
1. Abrir index.html
   ↓
2. Ver fondo 3D dinámico
   ↓
3. Explorar secciones
   ↓
4. Probar carrusel
   ↓
5. Hacer clic en CTAs
   ↓
6. Personalizar (opcional)
   ↓
7. Desplegar en producción
```

---

## 🔗 Enlaces Rápidos

### Documentación
- [README.md](README.md) - Documentación principal
- [PERSONALIZACION.md](PERSONALIZACION.md) - Guía de personalización
- [INICIO_RAPIDO.md](INICIO_RAPIDO.md) - Inicio rápido
- [RESUMEN_PROYECTO.md](RESUMEN_PROYECTO.md) - Resumen del proyecto

### Código
- [index.html](index.html) - Aplicación principal
- [js/three-background.js](js/three-background.js) - Fondo 3D
- [js/carousel.js](js/carousel.js) - Carrusel
- [js/interactions.js](js/interactions.js) - Interacciones

### Configuración
- [config.json](config.json) - Configuración centralizada

---

## 💡 Tips Útiles

### Para Desarrolladores
- Usa DevTools (F12) para inspeccionar elementos
- Abre la consola para ver mensajes de depuración
- Usa "Inspect Element" para ver estilos CSS
- Prueba en diferentes dispositivos

### Para Personalización
- Usa Ctrl+H para buscar y reemplazar
- Guarda copias de seguridad antes de cambios
- Prueba cambios en navegador antes de desplegar
- Usa herramientas online para optimizar imágenes

### Para Despliegue
- Verifica que todos los enlaces funcionen
- Prueba en dispositivos móviles
- Optimiza imágenes para web
- Usa un CDN para mejor rendimiento

---

## 🎓 Aprendizaje

Este proyecto es excelente para aprender:
- ✅ Three.js y gráficos 3D
- ✅ DeviceOrientationEvent
- ✅ Tailwind CSS
- ✅ Vanilla JavaScript
- ✅ Diseño responsive
- ✅ Animaciones CSS
- ✅ Buenas prácticas web

---

## 🚀 Próximos Pasos

1. **Personaliza** el proyecto con tu información
2. **Prueba** en diferentes dispositivos
3. **Optimiza** imágenes y rendimiento
4. **Despliega** en producción
5. **Comparte** con tus clientes

---

## 📞 Soporte

Para ayuda:
1. Revisa la documentación
2. Consulta los comentarios en el código
3. Busca en Stack Overflow
4. Contacta a un desarrollador web

---

**¡Gracias por usar BAXTO Stilo!** 🎨✨

*Transformando historias en obras de arte que se lucen en la piel.*