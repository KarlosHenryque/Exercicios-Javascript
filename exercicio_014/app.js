/* ----------------------------------------------------------------------------

Exercício: 014
Enunciado:
    Ao clicar no botão "Adicionar", se o input de texto não estiver vazio, adicionar
    um parágrafo com esse texto por baixo do botão. 
    Depois da inserção com sucesso, o input deve ser limpo e receber o focus para
    nova inserção.
    Não são permitidas as palavras "teste", "obrigado" e "hoje"
---------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const text_post = document.querySelector('#text_post');
    const adicionar = document.querySelector('#adicionar');
    const posts = document.querySelector('#posts');

    let count = 0;

    adicionar.addEventListener('click', () => {
        const valor = text_post.value.trim();

        if (valor === '') {
            alert('Digite algo antes de clicar em adicionar');
            return; 
        }
        const proibidas = ['teste', 'obrigado', 'hoje'];
        const valorLower = valor.toLowerCase();

        for (const palavra of proibidas) {
            if (valorLower.includes(palavra)) {
                alert(`A palavra "${palavra}" não é permitida`);
                text_post.focus();
                return; 
            }
        }

        count++;
        const novoPost = document.createElement('p');
        novoPost.textContent = `${count}. ${valor}`;
        novoPost.classList.add('border', 'p-2', 'mb-2', 'rounded', 'bg-light');

        posts.appendChild(novoPost);

        text_post.value = '';
        text_post.focus();
    });
});

