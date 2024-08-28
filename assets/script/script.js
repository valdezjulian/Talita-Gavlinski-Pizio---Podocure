
/* Abre e fecha o menu quando clicar no ícone de hambúrguer e no ícone de fechar (x) */
const nav = document.querySelector('#header nav') // Seleciona o elemento de navegação dentro do cabeçalho
const toggle = document.querySelectorAll('nav .toggle') // Seleciona todos os ícones de toggle (hambúrguer e x)

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show') // Adiciona ou remove a classe 'show' do menu ao clicar no ícone de toggle
    })
}

/* Quando clicar em um item do menu, esconde o menu */
const links = document.querySelectorAll('nav ul li a') // Seleciona todos os links dentro do menu

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show') // Remove a classe 'show' do menu ao clicar em um link
    })
}

/* Muda o header da página quando der scroll */
const header = document.querySelector('#header') // Seleciona o elemento do cabeçalho
const navHeight = header.offsetHeight // Obtém a altura do cabeçalho

function changeHeaderWhenScroll() {
    if (window.scrollY >= navHeight) {
        // Se o valor de scroll for maior ou igual à altura do cabeçalho, adiciona a classe 'scroll'
        header.classList.add('scroll')
    } else {
        // Se o valor de scroll for menor, remove a classe 'scroll'
        header.classList.remove('scroll')
    }
}

/* Testimoniais - carousel slider (swiper) */
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true, // Permite que o carousel rode em loop infinito
        autoplay: {
            delay: 4000, // Define o tempo de espera entre as trocas de slides (4s
        },
        pagination: {
            el: '.swiper-pagination', // Seleciona o elemento de paginação
            clickable: true, // Permite que a paginação seja clicável
        },
        navigation: {
            nextEl: '.swiper-button-next', // Seleciona o botão de próximo
            prevEl: '.swiper-button-prev', // Seleciona o botão de anterior
        },
    });
});

/* ScrollReveal - mostra elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
    origin: 'top', // Origem da animação de revelação
    distance: '30px', // Distância do efeito de animação
    duration: 700, // Duração da animação
    reset: true // Faz com que a animação aconteça sempre que o elemento entrar na visualização
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card, 
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
    { interval: 100 } // Define o intervalo de animação entre os elementos
)

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top') // Seleciona o botão de voltar para o topo

function backToTop() {
    if (window.scrollY >= 460) {
        // Se o valor de scroll for maior ou igual a 460px, mostra o botão
        backToTopButton.classList.add('show')
    } else {
        // Se for menor, esconde o botão
        backToTopButton.classList.remove('show')
    }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]') // Seleciona todas as seções com um id dentro do main

function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4 // Calcula o ponto de checagem para ativar o menu

    for (const section of sections) {
        const sectionTop = section.offsetTop // Obtém a posição do topo da seção
        const sectionHeight = section.offsetHeight // Obtém a altura da seção
        const sectionId = section.getAttribute('id') // Obtém o id da seção

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd) {
            // Se o ponto de checagem está dentro da seção, ativa o link correspondente
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.add('active')
        } else {
            // Se não está, remove a classe 'active'
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.remove('active')
        }
    }
}

/* Adiciona os ouvintes de eventos para scroll */
window.addEventListener('scroll', function () {
    changeHeaderWhenScroll() // Muda o header quando rolar
    backToTop() // Mostra ou esconde o botão de voltar para o topo
    activateMenuAtCurrentSection() // Ativa o menu conforme a seção visível
})



// --- MODE DARK --- //

//==============================================================================
//*** Inativado ***


//document.addEventListener('DOMContentLoaded', () => {
//    const toggleButton = document.getElementById('dark-mode-toggle');
//    const body = document.body;

// Função para alternar o modo escuro
//    function toggleDarkMode() {
//        body.classList.toggle('dark-mode');
// Salva a preferência no localStorage
//        localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
//    }

// Verifica a preferência do usuário ao carregar a página
//    function checkDarkModePreference() {
//        const darkModeEnabled = localStorage.getItem('dark-mode') === 'true';
//        if (darkModeEnabled) {
//            body.classList.add('dark-mode');
//        }
//    }

// Inicializa o modo escuro baseado na preferência do usuário
//    checkDarkModePreference();

// Adiciona o evento de clique no botão
//    toggleButton.addEventListener('click', toggleDarkMode);
//});


// *** Inativado ***
//==============================================================================