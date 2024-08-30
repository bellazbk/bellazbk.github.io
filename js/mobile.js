function setupMobileNav() {
    if (window.innerWidth <= 768) {
        const navToggle = document.querySelector('.nav-toggle');
        const navClose = document.querySelector('.nav-close');
        const navMenu = document.querySelector('nav ul');
        const navLinks = document.querySelectorAll('nav ul li a');

        // Alterna o menu quando o ícone de hambúrguer é clicado
        navToggle.addEventListener('click', (e) => {
            navMenu.classList.toggle('active');
            navToggle.style.display = 'none';
            navClose.style.display = 'block';
            e.stopPropagation(); // Impede o clique de se propagar e fechar imediatamente o menu
        });

        // Fecha o menu ao clicar em um link de navegação
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.style.display = 'block';
                navClose.style.display = 'none';
            });
        });

        // Fecha o menu ao clicar no ícone de fechar (X)
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navClose.style.display = 'none';
            navToggle.style.display = 'block';
        });
    }
}

// Execute na primeira vez que o site carrega
setupMobileNav();

// Reavalie a cada redimensionamento de tela
window.addEventListener('resize', setupMobileNav);
