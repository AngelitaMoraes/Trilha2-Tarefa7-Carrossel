document.addEventListener('DOMContentLoaded', function () {
    const imagens = document.querySelectorAll('.imagem-container1 img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let imagemAtual = 0;

    function mostrarImagem(indice) {
        imagens[imagemAtual].classList.remove('mostrar');
        imagens[indice].classList.add('mostrar');
        imagemAtual = indice;
    }

    prevButton.addEventListener('click', () => {
        let novoIndice = (imagemAtual - 1 + imagens.length) % imagens.length;
        mostrarImagem(novoIndice);
    });

    nextButton.addEventListener('click', () => {
        let novoIndice = (imagemAtual + 1) % imagens.length;
        mostrarImagem(novoIndice);
    });

    mostrarImagem(imagemAtual);
});