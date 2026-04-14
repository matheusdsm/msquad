/**
 * MSQUAD One-Page Documentation
 * Script de Interatividade
 */

// Executor quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    inicializarNavegacao();
    inicializarScrollSuave();
    destacarSecaoAtual();
});

/**
 * Scroll suave para o topo da página
 */
function scrollParaTopo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Inicializa a navegação
 * Gerencia cliques nos links de navegação
 */
function inicializarNavegacao() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Verifica se é um link interno
            if (href.startsWith('#')) {
                e.preventDefault();
                scrollParaSecao(href);
            }
        });
    });
}

/**
 * Scroll suave para seção
 * @param {string} id - ID da seção.target
 */
function scrollParaSecao(id) {
    const secao = document.querySelector(id);
    
    if (secao) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const secaoPosition = secao.getBoundingClientRect().top + window.pageYOffset;
        const posicaoFinal = secaoPosition - headerHeight - 20;
        
        window.scrollTo({
            top: posicaoFinal,
            behavior: 'smooth'
        });
    }
}

/**
 * Inicializa scroll suave
 * Detecta scroll e destaca seção atual
 */
function inicializarScrollSuave() {
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                destacarSecaoAtual();
                ticking = false;
            });
            ticking = true;
        }
    });
}

/**
 * Destaca seção atual no menu
 * Baseado na posição do scroll
 */
function destacarSecaoAtual() {
    const secoes = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let posicaoScroll = window.pageYOffset;
    let secaoAtual = '';
    
    // Encontra qual seção está visível
    secoes.forEach(function(secao) {
        const topoSecao = secao.offsetTop - 100;
        const alturaSecao = secao.offsetHeight;
        
        if (posicaoScroll >= topoSecao && posicaoScroll < topoSecao + alturaSecao) {
            secaoAtual = secao.getAttribute('id');
        }
    });
    
    // Atualiza classe ativa nos links
    navLinks.forEach(function(link) {
        link.classList.remove('active');
        
        const href = link.getAttribute('href');
        if (href === '#' + secaoAtual) {
            link.classList.add('active');
        }
    });
}