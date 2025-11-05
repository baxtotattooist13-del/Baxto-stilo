// Interacciones y Efectos Adicionales

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Ocultar indicador de scroll después de scrollear
let scrollIndicator = document.querySelector('.scroll-indicator');
let hasScrolled = false;

window.addEventListener('scroll', () => {
    if (!hasScrolled && window.scrollY > 100) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.pointerEvents = 'none';
        hasScrolled = true;
    } else if (hasScrolled && window.scrollY < 100) {
        scrollIndicator.style.opacity = '1';
        scrollIndicator.style.pointerEvents = 'auto';
        hasScrolled = false;
    }
});

// Animación de fade-in para elementos cuando entran en viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar secciones
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Efecto de hover en botones CTA
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Efecto de glow en elementos con clase cyan-glow
const glowElements = document.querySelectorAll('.cyan-glow');
document.addEventListener('mousemove', (e) => {
    glowElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calcular distancia
        const distance = Math.sqrt(x * x + y * y);
        
        // Si está cerca, aumentar el glow
        if (distance < 200) {
            const intensity = 1 - (distance / 200);
            element.style.textShadow = `0 0 ${20 + intensity * 20}px rgba(0, 255, 255, ${0.5 + intensity * 0.5})`;
        }
    });
});

// Animación de números en la sección "Acerca de"
function animateNumbers() {
    const numberElements = document.querySelectorAll('.cyan-glow');
    
    numberElements.forEach(element => {
        const text = element.textContent;
        const match = text.match(/\d+/);
        
        if (match) {
            const finalNumber = parseInt(match[0]);
            const isPercentage = text.includes('%');
            const isYears = text.includes('+');
            
            let currentNumber = 0;
            const increment = Math.ceil(finalNumber / 30);
            
            const counter = setInterval(() => {
                currentNumber += increment;
                
                if (currentNumber >= finalNumber) {
                    currentNumber = finalNumber;
                    clearInterval(counter);
                }
                
                let displayText = currentNumber.toString();
                if (isPercentage) displayText += '%';
                if (isYears) displayText += '+';
                
                element.textContent = displayText;
            }, 30);
        }
    });
}

// Ejecutar animación de números cuando se vea la sección
const aboutSection = document.getElementById('about');
if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                aboutObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    aboutObserver.observe(aboutSection);
}

// Efecto de parallax en scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-parallax') || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Agregar efecto de click ripple a botones
document.querySelectorAll('.cta-button, .floating-button, .quick-contact-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        // Agregar estilos al ripple
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.backgroundColor = 'rgba(0, 255, 255, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple-animation 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Agregar animación de ripple al CSS dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Detectar si es dispositivo móvil
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Ajustar comportamiento para móvil
if (isMobileDevice()) {
    // Reducir cantidad de partículas en móvil para mejor rendimiento
    document.documentElement.style.setProperty('--particle-count', '50');
    
    // Hacer más sensible el paralaje en móvil
    document.documentElement.style.setProperty('--parallax-intensity', '1.5');
}

// Agregar clase de carga cuando la página está lista
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Efecto de hover en tarjetas
document.querySelectorAll('.tattoo-card, .blog-card, .care-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Scroll spy para navegación
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-cyan-400');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('text-cyan-400');
        }
    });
});

// Prevenir comportamiento por defecto en enlaces de WhatsApp
document.querySelectorAll('a[href^="https://wa.me/"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Permitir que se abra en nueva pestaña
        if (!e.ctrlKey && !e.metaKey) {
            // En dispositivos móviles, se abrirá la app de WhatsApp
            // En desktop, se abrirá WhatsApp Web
        }
    });
});

// Agregar efecto de escritura a títulos
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Aplicar efecto de escritura al título principal (opcional)
// Descomenta si deseas activar este efecto
/*
const mainTitle = document.querySelector('.gothic-title');
if (mainTitle) {
    const originalText = mainTitle.textContent;
    typeWriter(mainTitle, originalText, 30);
}
*/

// Agregar soporte para modo oscuro/claro (opcional)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Cargar preferencia de modo oscuro
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Mejorar accesibilidad
document.querySelectorAll('button, a').forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid #00ffff';
        this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// Agregar soporte para teclado en botones flotantes
document.querySelectorAll('.floating-button, .quick-contact-btn').forEach(button => {
    button.setAttribute('tabindex', '0');
    button.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            this.click();
        }
    });
});

console.log('BAXTO Stilo - Portafolio de Tatuajes Profesional Cargado ✓');