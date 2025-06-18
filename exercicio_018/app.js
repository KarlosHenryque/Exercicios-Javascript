/* ----------------------------------------------------------------------------

Exercício: 018
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão. 
   
    Cada texto inserido deve ser precedido da expressão "Eliminar" com cor vermelha
    e como efeito de um mouse hover.

    Se clicar em "Eliminar" apenas poderá ser removida a palavra ou frase
    correspondente.
---------------------------------------------------------------------------- */
 
document.addEventListener('DOMContentLoaded', () => {
    const text_post = document.querySelector('#text_post');
    const adicionar = document.querySelector('#adicionar');
    const posts = document.querySelector('#posts');
    const postagens = new Set();

    adicionar.addEventListener('click', () => {
        const valor = text_post.value.trim();

        if (valor === '') {
            alert('Digite algo antes de clicar em adicionar');
            return;
        }

        if (postagens.has(valor)) {
            alert('Essa frase já foi adicionada na lista');
            return;
        }

        const container = document.createElement('div');
        container.classList.add('d-flex', 'align-items-center', 'mb-2');

        const eliminar = document.createElement('span');
        eliminar.textContent = 'Eleminiar';
        eliminar.style.color = 'red';
        eliminar.style.cursor = 'pointer';
        eliminar.classList.add('me-2');

        eliminar.addEventListener('mouseover', () => {
            eliminar.style.textDecoration = 'underline';
        });

        eliminar.addEventListener('mouseout', () => {
            eliminar.style.textDecoration = 'none';
        });

        eliminar.addEventListener('click', () => {
            posts.removeChild(container);
            postagens.delete(valor);
        });

        const novoPost = document.createElement('p');
        novoPost.textContent = valor;
        novoPost.classList.add('border', 'p-2', 'mb-0', 'rounded', 'bg-light', 'flex-grow-1');

        container.appendChild(eliminar);
        container.appendChild(novoPost);

        posts.appendChild(container);
        postagens.add(valor);
        text_post.value = '';
    });
});