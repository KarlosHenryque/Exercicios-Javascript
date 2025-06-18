/* ----------------------------------------------------------------------------

Exercício: 013
Enunciado:
    Ao clicar no botão "Adicionar", se o input de texto não estiver vazio, adicionar
    um parágrafo com esse texto por baixo do botão. O texto deve apresentar uma numeração
    sequencial e depois de inserido, o input deve ser limpo e receber o focus para
    nova inserção.
---------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const text_post = document.querySelector('#text_post');
    const adicionar = document.querySelector('#adicionar');
    const posts = document.querySelector('#posts');

    let count = 0;

    adicionar.addEventListener('click', () => {
        const valor = text_post.value.trim();

        if(valor !== '') {
            count++;
            const novoPost = document.createElement('p');
            novoPost.textContent = `${count}. ${valor}`;
            novoPost.classList.add('border', 'p-2', 'mb-2', 'rounded', 'bg-light');

            posts.appendChild(novoPost);

            text_post.value = '';
            text_post.focus();
        } else {
            alert('Digite algo antes de clicar em adicionar');
        }
    });
});
