// Enhanced header.js with data visualization elements
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-links li a');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinksContainer = document.querySelector('.nav-links');
    
    // Replace font awesome icon with spans for custom hamburger
    if (mobileMenu) {
        mobileMenu.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
    }
    
    // Add scroll event for header style changes
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Check scroll position on page load
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    }
    
    // Mobile menu toggle function
    window.toggleMobileMenu = function(navLinks) {
        mobileMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Toggle body scroll when menu is open
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };
    
    window.closeMobileMenu = function(navLinks) {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    };
    
    // Add active class to nav links based on section in view
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Mobile menu toggle on click
    if (mobileMenu && navLinksContainer) {
        mobileMenu.addEventListener('click', () => {
            window.toggleMobileMenu(navLinksContainer);
        });
    }
});