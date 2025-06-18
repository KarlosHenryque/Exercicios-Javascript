/* ----------------------------------------------------------------------------

Exercício: 027
Enunciado:
    Existe um input de texto no qual, sempre que for alterado o seu conteúdo,
    o mesmo deve ser apresentado em tempo real no div cujo id é igual a "conteudo".
    Contudo, se o texto contém a palavra "olá", a cor do texto deve ser verde.
    Caso contrário deverá ser sempre branca.
---------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('inputTexto');
    const conteudo = document.getElementById('conteudo');

    input.addEventListener('input', () => {
        const texto = input.value;
        conteudo.textContent = texto;

        if (texto.toLowerCase().includes('ola')) {
        conteudo.style.color = 'green';
        } else {
        conteudo.style.color = 'white';
        }
    });
});
