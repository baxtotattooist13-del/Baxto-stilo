// Three.js Background - Agujas y Partículas de Pigmento con Paralaje
let scene, camera, renderer;
let particles = [];
let needles = [];
let deviceOrientation = { alpha: 0, beta: 0, gamma: 0 };

function initThreeBackground() {
    const container = document.getElementById('canvas-container');
    
    // Configurar escena
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    
    // Configurar cámara
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 50;
    
    // Configurar renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    
    // Crear partículas de pigmento
    createPigmentParticles();
    
    // Crear agujas
    createNeedles();
    
    // Agregar iluminación
    const light = new THREE.PointLight(0x00ffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);
    
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    // Event listeners
    window.addEventListener('resize', onWindowResize);
    
    // Detectar orientación del dispositivo
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', handleDeviceOrientation);
    }
    
    // Iniciar animación
    animate();
}

function createPigmentParticles() {
    const geometry = new THREE.BufferGeometry();
    const particleCount = 150;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    // Colores de pigmento (cian, azul, púrpura, blanco)
    const pigmentColors = [
        { r: 0, g: 1, b: 1 },      // Cian
        { r: 0, g: 0.5, b: 1 },    // Azul
        { r: 0.5, g: 0, b: 1 },    // Púrpura
        { r: 1, g: 1, b: 1 }       // Blanco
    ];
    
    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 200;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
        
        const color = pigmentColors[Math.floor(Math.random() * pigmentColors.length)];
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
        
        particles.push({
            x: positions[i * 3],
            y: positions[i * 3 + 1],
            z: positions[i * 3 + 2],
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            vz: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 0.5 + 0.2
        });
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const material = new THREE.PointsMaterial({
        size: 0.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true
    });
    
    const points = new THREE.Points(geometry, material);
    scene.add(points);
}

function createNeedles() {
    const needleCount = 20;
    
    for (let i = 0; i < needleCount; i++) {
        const geometry = new THREE.BufferGeometry();
        
        // Crear línea de aguja
        const points = [
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, 3, 0)
        ];
        
        geometry.setFromPoints(points);
        
        const material = new THREE.LineBasicMaterial({
            color: 0x00ffff,
            linewidth: 2,
            transparent: true,
            opacity: 0.6
        });
        
        const line = new THREE.Line(geometry, material);
        
        // Posición aleatoria
        line.position.x = (Math.random() - 0.5) * 200;
        line.position.y = (Math.random() - 0.5) * 200;
        line.position.z = (Math.random() - 0.5) * 100;
        
        // Rotación aleatoria
        line.rotation.x = Math.random() * Math.PI;
        line.rotation.y = Math.random() * Math.PI;
        line.rotation.z = Math.random() * Math.PI;
        
        scene.add(line);
        
        needles.push({
            object: line,
            rotationSpeed: {
                x: (Math.random() - 0.5) * 0.01,
                y: (Math.random() - 0.5) * 0.01,
                z: (Math.random() - 0.5) * 0.01
            },
            positionOffset: {
                x: (Math.random() - 0.5) * 0.5,
                y: (Math.random() - 0.5) * 0.5,
                z: (Math.random() - 0.5) * 0.5
            }
        });
    }
}

function handleDeviceOrientation(event) {
    deviceOrientation.alpha = event.alpha || 0; // Z axis rotation (0-360)
    deviceOrientation.beta = event.beta || 0;   // X axis rotation (-180 to 180)
    deviceOrientation.gamma = event.gamma || 0; // Y axis rotation (-90 to 90)
}

function animate() {
    requestAnimationFrame(animate);
    
    // Actualizar posiciones de partículas
    const positionAttribute = scene.children[0].geometry.attributes.position;
    const positions = positionAttribute.array;
    
    particles.forEach((particle, index) => {
        // Movimiento natural
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;
        
        // Rebote en los límites
        if (Math.abs(particle.x) > 100) particle.vx *= -1;
        if (Math.abs(particle.y) > 100) particle.vy *= -1;
        if (Math.abs(particle.z) > 50) particle.vz *= -1;
        
        // Aplicar paralaje basado en orientación del dispositivo
        const parallaxX = (deviceOrientation.gamma / 90) * 5;
        const parallaxY = (deviceOrientation.beta / 90) * 5;
        
        positions[index * 3] = particle.x + parallaxX;
        positions[index * 3 + 1] = particle.y + parallaxY;
        positions[index * 3 + 2] = particle.z;
    });
    
    positionAttribute.needsUpdate = true;
    
    // Actualizar agujas
    needles.forEach(needle => {
        needle.object.rotation.x += needle.rotationSpeed.x;
        needle.object.rotation.y += needle.rotationSpeed.y;
        needle.object.rotation.z += needle.rotationSpeed.z;
        
        // Aplicar paralaje
        const parallaxX = (deviceOrientation.gamma / 90) * 2;
        const parallaxY = (deviceOrientation.beta / 90) * 2;
        
        needle.object.position.x += needle.positionOffset.x + parallaxX;
        needle.object.position.y += needle.positionOffset.y + parallaxY;
    });
    
    // Aplicar paralaje a la cámara
    const cameraParallaxX = (deviceOrientation.gamma / 90) * 3;
    const cameraParallaxY = (deviceOrientation.beta / 90) * 3;
    
    camera.position.x = cameraParallaxX;
    camera.position.y = cameraParallaxY;
    camera.lookAt(scene.position);
    
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThreeBackground);
} else {
    initThreeBackground();
}