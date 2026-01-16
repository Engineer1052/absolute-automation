import { inject } from '@vercel/analytics';
import './style.css'

inject();
import { initNavigation } from './logic/navigation.js';
import { Modal } from './components/Modal.js';

// Initialize Logic
initNavigation();
new Modal();

// Reveal body after styles/logic are ready
window.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';
});

// Interactive Shader Canvas Background
const canvas = document.getElementById('shader-canvas');
const ctx = canvas.getContext('2d');
let width, height;
let particles = [];
let mouse = { x: -100, y: -100 };

class Particle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1; // Larger particles
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.life = Math.random() * 100 + 100;
        this.alpha = Math.random() * 0.3; // Max 30% opacity
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;

        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
            this.vx -= dx * 0.0001;
            this.vy -= dy * 0.0001;
        }

        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
            this.reset();
        }
    }
    // Draw moved to animate loop for dynamic coloring
}

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    init();
}

function init() {
    particles = [];
    for (let i = 0; i < 150; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);

    // Subtle energy drift in background
    const time = Date.now() * 0.0005; // Note: 'time' was unused in original code but kept for potential use

    // Dynamic Color Shift based on Scroll
    const scrollPercent = Math.min(window.scrollY / (document.body.scrollHeight - window.innerHeight), 1);

    // Interpolate from Blue (0, 100, 255) to Lighter Blue (0, 180, 255)
    // Target Lighter Blue
    const startR = 0, startG = 100, startB = 255;
    const endR = 0, endG = 180, endB = 255;

    const currentR = startR + (endR - startR) * scrollPercent;
    const currentG = startG + (endG - startG) * scrollPercent;
    const currentB = startB + (endB - startB) * scrollPercent;

    // Update CSS Variables
    document.documentElement.style.setProperty('--primary-r', Math.round(currentR));
    document.documentElement.style.setProperty('--primary-g', Math.round(currentG));
    document.documentElement.style.setProperty('--primary-b', Math.round(currentB));

    // Update Canvas Gradient & Particles
    const grad = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width);
    grad.addColorStop(0, 'rgba(3, 3, 5, 0)');
    grad.addColorStop(1, `rgba(${currentR}, ${currentG}, ${currentB}, 0.03)`);

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    particles.forEach(p => {
        p.update();
        // Use dynamic color for particles too
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${currentR}, ${currentG}, ${currentB}, ${p.alpha})`;
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

// Event Listeners
window.addEventListener('resize', resize);
window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

// Initialize
if (canvas) {
    resize();
    animate();
}

// Smooth reveal on scroll (Simple Intersection Observer)
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, observerOptions);

document.querySelectorAll('.bento-item').forEach(el => {
    el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
    observer.observe(el);
});
