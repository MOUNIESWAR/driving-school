document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    // Handle scroll transparency
    const handleScroll = () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    // Handle mobile menu toggle
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Handle dropdown toggle in mobile view
    const dropdownLinks = document.querySelectorAll('.nav-links li.has-dropdown > a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdownItem = link.parentElement;
                
                // Close other dropdowns
                dropdownLinks.forEach(otherLink => {
                    if (otherLink !== link) {
                        otherLink.parentElement.classList.remove('active');
                    }
                });
                
                dropdownItem.classList.toggle('active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('active');
            // Close all dropdowns
            dropdownLinks.forEach(link => {
                link.parentElement.classList.remove('active');
            });
        }
    });

    // Close mobile menu when clicking a non-dropdown link
    navLinks.querySelectorAll('a:not(.has-dropdown > a)').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('active');
            // Close all dropdowns
            dropdownLinks.forEach(link => {
                link.parentElement.classList.remove('active');
            });
        });
    });
});
