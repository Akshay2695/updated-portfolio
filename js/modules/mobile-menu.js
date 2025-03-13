// export function toggleMobileMenu(navLinks) {
//     navLinks.classList.toggle('active');
// }

// export function closeMobileMenu(navLinks) {
//     navLinks.classList.remove('active');
// }

// js/modules/mobile-menu.js
function toggleMobileMenu(navLinks) {
    navLinks.classList.toggle('active');
}

function closeMobileMenu(navLinks) {
    navLinks.classList.remove('active');
}

// Make functions globally available:
window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;