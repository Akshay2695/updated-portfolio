// Create a new file: js/modules/theme-toggle.js

/**
 * Theme Toggle functionality
 * Handles switching between light and dark mode
 */

// Check for saved theme preference or use the system preference
function initThemeToggle() {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // If we have a saved preference, use it
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        // Otherwise check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
    
    // Update toggle button state if it exists
    updateToggleState();
}

// Toggle between light and dark theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Update DOM and save preference
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update button state
    updateToggleState();
}

// Update the toggle button visual state
function updateToggleState() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (themeToggleBtn) {
        // Update the toggle icon based on current theme
        if (currentTheme === 'dark') {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
        } else {
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
        }
    }
}

// Add event listener to toggle button if it exists
function setupToggleButton() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
        updateToggleState();
    }
}

// Initialize 
window.initThemeToggle = initThemeToggle;
window.toggleTheme = toggleTheme;
window.setupToggleButton = setupToggleButton;

// Export for module usage
export { initThemeToggle, toggleTheme, setupToggleButton };