document.addEventListener('DOMContentLoaded', () => {
    const particlesContainer = document.querySelector('.space-particles');
    
    // Create stars
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        particlesContainer.appendChild(star);
    }

    // Create nebula effects
    for (let i = 0; i < 5; i++) {
        const nebula = document.createElement('div');
        nebula.className = 'nebula';
        nebula.style.left = `${Math.random() * 100}%`;
        nebula.style.top = `${Math.random() * 100}%`;
        nebula.style.transform = `scale(${Math.random() * 2 + 1})`;
        nebula.style.animationDuration = `${Math.random() * 10 + 10}s`;
        particlesContainer.appendChild(nebula);
    }
});

// Particle Effect
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random size between 2-4px
    const size = Math.random() * 2 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random position
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    
    // Add to body
    document.body.appendChild(particle);
    
    // Remove after animation
    setTimeout(() => {
        particle.remove();
    }, 3000);
}

// Create particles at intervals
function initParticles() {
    // Create initial particles
    for(let i = 0; i < 20; i++) {
        setTimeout(() => {
            createParticle();
        }, i * 100);
    }
    
    // Continue creating particles
    setInterval(createParticle, 500);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initParticles);
