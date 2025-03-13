// js/app.js

document.addEventListener('DOMContentLoaded', () => {
    function loadContent(url, containerId) {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = data;

                let content;

                if (url === 'header.html' || url === 'footer.html') {
                    content = tempDiv.querySelector('.container');
                    if (content) {
                        document.getElementById(containerId).innerHTML = content.outerHTML;
                    } else {
                        console.error('No .container found in', url);
                        document.getElementById(containerId).innerHTML = '<p>Error: No container found.</p>';
                    }
                } else {
                    content = tempDiv.querySelector('.container');
                    if (content) {
                        const sectionId = url.replace('.html', '').replace('-section', '');
                        document.getElementById(containerId).innerHTML = `<section id="${sectionId}">${content.outerHTML}</section>`;
                    } else {
                        console.error('No .container found in', url);
                        document.getElementById(containerId).innerHTML = '<p>Error: No container found.</p>';
                    }
                }
            })
            .catch(error => {
                console.error('Error loading content:', url, error);
                document.getElementById(containerId).innerHTML = '<p>Error loading content. Please try again.</p>';
            });
    }

    const loadHeader = loadContent('header.html', 'header-container');
    const loadHero = loadContent('hero.html', 'hero-section');
    const loadAbout = loadContent('about.html', 'about-section');
    const loadProjects = loadContent('projects.html', 'projects-section');
    const loadExperience = loadContent('experience.html', 'experience-section');
    const loadContact = loadContent('contact.html', 'contact-section');
    const loadFooter = loadContent('footer.html', 'footer-container');

    Promise.all([loadHeader, loadHero, loadAbout, loadProjects, loadExperience, loadContact, loadFooter])
        .then(() => {
            const mobileMenu = document.querySelector('.mobile-menu');
            const navLinks = document.querySelector('.nav-links');

            if (mobileMenu && navLinks) {
                mobileMenu.addEventListener('click', () => {
                    window.toggleMobileMenu(navLinks);
                });

                const navItems = document.querySelectorAll('.nav-links li a');
                navItems.forEach(item => {
                    item.addEventListener('click', () => {
                        window.closeMobileMenu(navLinks);
                    });
                });
            } else {
                console.warn('Mobile menu elements not found after header load.');
            }
            window.enableSmoothScroll();
            window.setCurrentYear();
        })
        .catch(err => console.error("Error during initial loading:", err));
});