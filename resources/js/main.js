document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const navbar = document.querySelector('nav');

window.addEventListener('scroll', function() {
    if(window.scrollY > 700) { 
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});


document.getElementById("navToggle").addEventListener("click", function() {
    const navItems = document.getElementById("navItems");
    navItems.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", function() {
    const fills = document.querySelectorAll(".fill");
    fills.forEach(fill => {
        const percentage = fill.getAttribute("data-percent");
        fill.style.width = percentage + "%";
    });
});
