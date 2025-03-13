// Typing Animation
const typedText = document.querySelector('.typed-text');
const textArray = ["Akshay Jambhulkar", "Data Scientist", "ML Engineer"];
let textIndex = 0;
let charIndex = 0;

const type = () => {
    if (charIndex < textArray[textIndex].length) {
        typedText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Adjust typing speed here
    } else {
        setTimeout(erase, 2000); // Wait before erasing
    }
};

const erase = () => {
    if (charIndex > 0) {
        typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50); // Adjust erasing speed here
    } else {
        textIndex = (textIndex + 1) % textArray.length; // Loop through textArray
        setTimeout(type, 500); // Wait before typing next text
    }
};

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000); // Start typing after 1 second
});

// Scroll-Triggered Animation
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'; // Darken background on scroll
        header.style.padding = '10px 0'; // Reduce padding on scroll
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.padding = '20px 0';
    }
});

// Particles.js Configuration
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js loaded');
});