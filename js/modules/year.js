// export function setCurrentYear() {
//     document.getElementById('current-year').textContent = new Date().getFullYear();
// }


// js/modules/year.js
function setCurrentYear() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

// Make function globally available:
window.setCurrentYear = setCurrentYear;