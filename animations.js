// Scroll Animation Handler
document.addEventListener('DOMContentLoaded', () => {
    // Elements to animate
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Mobile menu toggle
    mobileMenuBtn?.addEventListener('click', () => {
        navLinks?.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.mobile-menu') && !e.target.closest('.nav-links')) {
            navLinks?.classList.remove('active');
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all scroll reveal elements
    scrollRevealElements.forEach(el => {
        observer.observe(el);
    });

    // Add stagger delay to grid items
    const addStaggerDelay = () => {
        // Course cards
        document.querySelectorAll('.course-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });

        // Trainer cards
        document.querySelectorAll('.trainer-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });

        // Pricing cards
        document.querySelectorAll('.pricing-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    };

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Close mobile menu
                navLinks?.classList.remove('active');
                
                // Smooth scroll
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    }

    // Initialize animations
    addStaggerDelay();

    // Add scroll reveal class to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (!section.classList.contains('hero')) {
            section.classList.add('scroll-reveal');
        }
    });
});
