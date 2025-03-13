// export function enableSmoothScroll() {
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function(e) {
//             e.preventDefault();
//             document.querySelector(this.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });
// }


// export function enableSmoothScroll() {
//     console.log('Enabling smooth scroll...'); // Debugging
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             // e.preventDefault();
//             const targetId = this.getAttribute('href');
//             console.log('Clicked link with target:', targetId); // Debugging
//             const targetElement = document.querySelector(targetId);
//             if (targetElement) {
//                 console.log('Scrolling to:', targetElement); // Debugging
//                 targetElement.scrollIntoView({
//                     behavior: 'smooth',
//                     block: 'start'
//                 });
//             } else {
//                 console.error('Target element not found:', targetId); // Debugging
//             }
//         });
//     });
// }


// js/modules/smooth-scroll.js
// function enableSmoothScroll() {
//     console.log('Enabling smooth scroll...');
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();  // Add this back
//             const targetId = this.getAttribute('href');
//             console.log('Clicked link with target:', targetId);
//             const targetElement = document.querySelector(targetId);
//             if (targetElement) {
//                 console.log('Scrolling to:', targetElement);
//                 targetElement.scrollIntoView({
//                     behavior: 'smooth',
//                     block: 'start'
//                 });
//             } else {
//                 console.error('Target element not found:', targetId);
//             }
//         });
//     });
// }

// // Make function globally available:
// window.enableSmoothScroll = enableSmoothScroll;


// js/modules/smooth-scroll.js
function enableSmoothScroll() {
    console.log('Enabling smooth scroll...');
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            console.log('Clicked link with target:', targetId);
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                console.log('Scrolling to:', targetElement);
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                console.error('Target element not found:', targetId);
            }
        });
    });
}

window.enableSmoothScroll = enableSmoothScroll;