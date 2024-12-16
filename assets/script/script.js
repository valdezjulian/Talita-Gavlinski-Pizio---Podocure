/* ========== SELETORES GLOBAIS ========== */
const header = document.querySelector('#header');
const nav = document.querySelector('#header nav');
const backToTopButton = document.querySelector('.back-to-top');
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
const sections = document.querySelectorAll('main section[id]');
const navLinksItems = document.querySelectorAll('.nav-links a');

/* ========== NAVEGAÇÃO MOBILE ========== */
function initMobileNav() {
    // Toggle do menu ao clicar no botão hamburguer
    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            menuButton.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Fecha o menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!menuButton.contains(e.target) && !navLinks.contains(e.target)) {
            menuButton.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

/* ========== HEADER SCROLL ========== */
function changeHeaderWhenScroll() {
    const navHeight = header.offsetHeight;
    window.scrollY >= navHeight 
        ? header.classList.add('scroll')
        : header.classList.remove('scroll');
}

/* ========== BACK TO TOP ========== */
function backToTop() {
    const aboutSection = document.querySelector('#about');
    if (!aboutSection) return;
    
    window.scrollY >= aboutSection.offsetTop
        ? backToTopButton.classList.add('show')
        : backToTopButton.classList.remove('show');
}

function initBackToTop() {
    // Adiciona o evento de clique para rolagem suave até o topo
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ========== MENU ATIVO NA SEÇÃO ========== */
function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        const checkpointStart = checkpoint >= sectionTop;
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

        const menuItem = document.querySelector(`nav ul li a[href*=${sectionId}]`);
        
        if (menuItem) {
            checkpointStart && checkpointEnd
                ? menuItem.classList.add('active')
                : menuItem.classList.remove('active');
        }
    });
}

/* ========== SLIDER TESTIMONIALS ========== */
function initTestimonialsSlider() {
    new Swiper('.testimonials.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        }
    });
}

/* ========== SCROLL REVEAL ========== */
function initScrollReveal() {
    ScrollReveal({
        origin: 'top',
        distance: '30px',
        duration: 700,
        reset: true
    }).reveal(
        `#home .image, #home .text,
        #about .image, #about .text,
        #services header, #services .card, 
        #testimonials header, #testimonials .testimonials,
        #contact .text, #contact .links,
        footer .brand, footer .social`,
        { interval: 100 }
    );
}

/* ========== INICIALIZAÇÃO ========== */
function init() {
    // Inicializa todas as funcionalidades
    initMobileNav();
    initBackToTop();
    initTestimonialsSlider();
    initScrollReveal();

    // Eventos de scroll
    window.addEventListener('scroll', () => {
        changeHeaderWhenScroll();
        backToTop();
        activateMenuAtCurrentSection();
    });

    // Verifica o estado inicial do botão back-to-top
    document.addEventListener('DOMContentLoaded', backToTop);
}

// Inicia a aplicação
init();