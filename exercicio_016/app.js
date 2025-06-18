/* ----------------------------------------------------------------------------

Exercício: 016
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão. 
    Não importa a ordem das palavras e frases.
    Quando clicar em "Limpar", todas as palavras e frases devem desaparecer
    e o input deve ficar limpo e receber o focus.

    NOTA: O HTML não pode ser alterado.
---------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const text_post = document.querySelector('#text_post');
    const adicionar = document.querySelector('#adicionar');
    const limpar = document.querySelector('#limpar');
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
    });

    limpar.addEventListener('click', () => {
        posts.innerHTML = '';
    })
})