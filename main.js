// Typing Animation
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer", "Python Programmer", "BCA Student"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Scroll Motion Observer
const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-skills');
        }
    });
}, observerOptions);

document.querySelectorAll('#skills').forEach(section => observer.observe(section));

// DARK MODE TOGGLE
const darkModeIcon = document.getElementById('darkMode-icon');
darkModeIcon.onclick = () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        darkModeIcon.classList.replace('bx-moon', 'bx-sun');
    } else {
        darkModeIcon.classList.replace('bx-sun', 'bx-moon');
    }
};