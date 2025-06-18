/* ----------------------------------------------------------------------------

Exercício: 020
Enunciado:
    Existem 4 inputs na página.
    Sempre que o focus de um input for alterado, a cor de fundo do input
    deve ficar amarela, indicando que o input está ativo. 
    Os inativos devem ficar a branco.
---------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input[type="text"]');

    inputs.forEach(input => {
    input.addEventListener('focus', () => {
        inputs.forEach(i => i.style.backgroundColor = 'white');
        input.style.backgroundColor = 'yellow';
    });
    });
});