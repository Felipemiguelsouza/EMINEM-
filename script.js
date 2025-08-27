document.addEventListener('DOMContentLoaded', function () {
    // Seleção dos elementos
    const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const botaoAumentarFonte = document.getElementById('aumentar-fonte');
    const botaoDiminuirFonte = document.getElementById('diminuir-fonte');
    const botaoContraste = document.getElementById('alterna-contraste');

    // Variáveis de controle de fonte
    let tamanhoFonteAtual = 1; // em rem
    const TAMANHO_MAX = 1.8;
    const TAMANHO_MIN = 0.8;

    /* ===== Menu de Acessibilidade ===== */
    botaoAcessibilidade.addEventListener('click', function () {
        // Toggle de classes para animação e exibição do menu
        botaoAcessibilidade.classList.toggle('rotacao-botao');
        opcoesAcessibilidade.classList.toggle('apresenta-lista');

        // Atualiza o atributo aria-expanded para acessibilidade
        const estaExpandido = botaoAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoAcessibilidade.setAttribute('aria-expanded', !estaExpandido);
    });

    /* ===== Controle de Tamanho da Fonte ===== */
    botaoAumentarFonte.addEventListener('click', function () {
        if (tamanhoFonteAtual < TAMANHO_MAX) {
            tamanhoFonteAtual += 0.1;
            document.body.style.fontSize = `${tamanhoFonteAtual.toFixed(1)}rem`;
        }
    });

    botaoDiminuirFonte.addEventListener('click', function () {
        if (tamanhoFonteAtual > TAMANHO_MIN) {
            tamanhoFonteAtual -= 0.1;
            document.body.style.fontSize = `${tamanhoFonteAtual.toFixed(1)}rem`;
        }
    });

    /* ===== Alternar Modo Alto Contraste ===== */
    botaoContraste.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste');
    });

    /* ===== Animações com ScrollReveal ===== */
    ScrollReveal().reveal('#inicio', {
        delay: 500,
        distance: '50px',
        origin: 'bottom',
        duration: 1000
    });

    ScrollReveal().reveal('#eminem', {
        delay: 500,
        distance: '50px',
        origin: 'left',
        duration: 1000
    });

    ScrollReveal().reveal('#galeria', {
        delay: 500,
        distance: '50px',
        origin: 'right',
        duration: 1000
    });

    ScrollReveal().reveal('#contato', {
        delay: 500,
        distance: '50px',
        origin: 'bottom',
        duration: 1000
    });
});
