// Particle.js Configuration
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#00ffcc" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#00ffcc", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out" }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Enhanced Explore My Work Button
const exploreBtn = document.getElementById('explore-btn');
exploreBtn.addEventListener('click', () => {
    const portfolioSection = document.getElementById('portfolio');
    
    // Add a temporary glow effect on click
    exploreBtn.style.boxShadow = '0 0 30px rgba(0, 255, 204, 1)';
    setTimeout(() => {
        exploreBtn.style.boxShadow = '0 0 20px rgba(0, 255, 204, 0.8)';
    }, 300);

    // Scroll to portfolio with animation
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
    
    // Trigger portfolio item animations on scroll
    setTimeout(() => {
        document.querySelectorAll('.portfolio-item').forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(50px)';
            setTimeout(() => {
                item.style.transition = 'all 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 600);
});