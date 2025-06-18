/* ----------------------------------------------------------------------------

Exercício: 015
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão.

    As palavras e frases mais recentes devem ficar no topo.
---------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const text_post = document.querySelector('#text_post');
    const adicionar = document.querySelector('#adicionar');
    const posts = document.querySelector('#posts');

    let count = 0;

    adicionar.addEventListener('click', () => {
        const valor = text_post.value.trim();

        if(valor === '') {
            alert ('Digite algo antes de clicar em adicionar');
            return;
        }

        const proibidas = ['teste', 'obrigado', 'hoje'];
        const valorLower = valor.toLowerCase();

        for (const palavras of proibidas){
            if(valorLower.includes(palavras)) {
                alert(`A palavra ${palavras} não é permitida no post`);
                text_post.focus;
                return;
            }
        }

        count++;
        const novoPost = document.createElement('p');
        novoPost.textContent = `${count} ${valor}`;
        novoPost.classList.add('border', 'p-2', 'mb-2', 'rounded', 'bg-light');

        posts.insertBefore(novoPost, posts.firstChild);

        text_post.value = '';
        text_post.focus();
    })
})