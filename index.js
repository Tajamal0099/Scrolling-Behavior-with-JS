const navbar = document.getElementById('navbar');
const header = document.querySelector('header');
const progressBar = document.getElementById('progressBar');
let bgScroll = document.getElementById('bg-I');
const scrollBtn = document.getElementById('scrollBtn');

scrollBtn.addEventListener('click', (event) => {
    document.querySelectorAll('nav')
    event.preventDefault();
    let scrollSetup = {
        top: 0,
        behavior: 'smooth'
    }
    window.scrollTo(scrollSetup);
});
let anchorTag = document.querySelectorAll('a');
anchorTag.forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section');
    const slides = document.querySelectorAll('.slide');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6  
    };

    function intersection(options) {
        options.forEach(entry => {
            const index = [...sections].indexOf(entry.target);
            const slide = slides[index];
            if (entry.isIntersecting) {
                slide.style.opacity = '1';
                slide.style.transform = 'translateX(0)';
            } else {
                slide.style.opacity = '0';
                slide.style.transform = 'translateX(-100%)';
            }
        });
    }
    const observer = new IntersectionObserver(intersection, options);
    sections.forEach(section => {
        observer.observe(section);
    });
    
    if (window.scrollY > 70) {
        bgScroll.style.backgroundAttachment = 'fixed';
    } else {
        bgScroll.style.backgroundAttachment = 'scroll';
    }
    const progressWidth = window.scrollY / 19.3;
    progressBar.style.width = `${progressWidth}%`;

    if (window.scrollY > 300) {
        scrollBtn.classList.remove('hidden');
    } else {
        scrollBtn.classList.add('hidden');
    }
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});