// Acordeons
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const isActive = content.classList.contains('active');

        // Fechar outros acordeons
        document.querySelectorAll('.accordion-content.active').forEach(item => {
            if (item !== content) {
                item.classList.remove('active');
                item.previousElementSibling.classList.remove('active');
            }
        });

        // Toggle atual
        content.classList.toggle('active');
        this.classList.toggle('active');
    });
});

// Mobile Menu
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Modo escuro/claro automático
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (e.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});
