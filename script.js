let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let heigth = sec.offsetHeigth;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + heigth) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .skills-box, .projects-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content p', { origin: 'rigth' });

const typed = new Typed('.moviment-text',{
    strings: [ 'Full Stack Developer!' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000, 
    loop: true 


})


const services = new Typed('.service-moviment', {
    strings: [ 'Servicios!' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000, 
    loop: true 
})


const skills = new Typed('.skills-moviment', {
    strings: [ 'Habilidades!' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000, 
    loop: true 
})


const projects = new Typed('.projects-moviment', {
    strings: [ 'Proyectos!' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000, 
    loop: true 
})


const contact = new Typed('.contact-moviment', {
    strings: [ 'tame!' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000, 
    loop: true 
})