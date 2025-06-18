/* ----------------------------------------------------------------------------

Exercício: 017
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão. 
   
    Não pode ser adicionada uma palavra ou frase repetida.
---------------------------------------------------------------------------- */


document.addEventListener('DOMContentLoaded', () => {
    const text_post = document.querySelector('#text_post');
    const adicionar = document.querySelector('#adicionar');
    const posts = document.querySelector('#posts');
    const postagens = new Set();

    adicionar.addEventListener('click', (e) => {
       const valor = text_post.value.trim();

       if (valor === '') {
        alert('Digite algo antes de clicar em adiconar');
        return;
       }

       if (postagens.has(valor)) {
        alert('Essa frase já foi adicionada');
        return;
       }

       const novoPost = document.createElement('p');
        novoPost.textContent = valor;
        novoPost.classList.add('border', 'p-2', 'mb-2', 'rounded', 'bg-light');

        posts.appendChild(novoPost);
        postagens.add(valor);
        text_post.value = '';
    });

})