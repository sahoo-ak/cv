const toggleButton = document.getElementById('toggle-nav');
const navMenu = document.getElementById('nav-menu');

toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// JavaScript to toggle the visibility of the navigation menu
const leftNav = document.getElementById('left-nav');

toggleButton.addEventListener('click', () => {
    leftNav.classList.toggle('open');
    // Change button text when menu is hidden
    if (leftNav.classList.contains('hidden')) {
        toggleButton.innerHTML = ' ☰ ';
    } else {
        toggleButton.innerHTML = ' ☰ ';
    }
});

// JavaScript for Scroll Effect
window.addEventListener('scroll', function () {
    const topNav = document.getElementById('top-nav');
    if (window.scrollY > 50) {
        topNav.classList.add('opaque-nav');
    } else {
        topNav.classList.remove('opaque-nav');
    }
});

// JavaScript for password
function accessPDF(event, pdfUrl) {
    event.preventDefault(); // Prevent the default click action of the link
    const password = prompt("Please enter the password or email me (aloka_s@ph.iitr.ac.in) to access this file:");

    // Replace 'getpdf' with your desired password
    if (password === "getpdf") {
        window.open(pdfUrl, "_blank"); // Opens the PDF file in a new tab
    } else {
        alert("Incorrect password! Access denied.");
    }
}