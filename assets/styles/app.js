const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const header = document.querySelector('#header');

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener("scroll", function() {
        let scrollPosition = window.scrollY > 200;

        header.classList.toggle('rolagem', scrollPosition);

        // Alterar cor do ícone de hambúrguer e das palavras
        if (scrollPosition) {
            hamburger.classList.add('scroll-hamburger');
            nav.classList.add('scroll-nav');
        } else {
            hamburger.classList.remove('scroll-hamburger');
            nav.classList.remove('scroll-nav');
        }
    });

    // Verificar a largura da tela na carga inicial
    handleResize();
    window.addEventListener("resize", handleResize);
});

function handleResize() {
    let isMobile = window.innerWidth < 750;

    if (isMobile) {
        hamburger.classList.add('mobile-hamburger');
    } else {
        hamburger.classList.remove('mobile-hamburger');
    }
}