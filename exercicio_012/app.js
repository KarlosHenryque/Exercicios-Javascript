/* ----------------------------------------------------------------------------

Exercício: 012
Enunciado:
    Ao clicar no botão "Adicionar", se o input de texto não estiver vazio, adicionar
    um parágrafo com esse texto por baixo do botão.
---------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const text_post = document.querySelector('#text_post');
    const adicionar = document.querySelector('#adicionar');
    const posts = document.querySelector('#posts')

    adicionar.addEventListener('click', (e) => {
       const valor = text_post.value.trim();

       if(valor !== '') {
        const novoPost = document.createElement('p');
        novoPost.textContent = valor;
        novoPost.classList.add('border', 'p-2', 'mb-2', 'rounded', 'bg-light');

        posts.appendChild(novoPost);
        text_post.value = '';
       } else {
        alert('Digite algo antes de clicar em adicionar');
       }
    })
})