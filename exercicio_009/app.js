/* ----------------------------------------------------------------------------

Exercício: 009
Enunciado:
    Exercício simples: O texto é branco e o elemento range vai servir para
    alterar a transparência do texto. Do valor mais opaco à esquerda, até
    à transparência total à direita.

    NOTA: Deves definir os valores do range.
---------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const range = document.getElementById('range');
    const texto = document.getElementById('texto');

    range.min = 0;
    range.max = 1;
    range.step = 0.01;
    range.value = 1;

    range.addEventListener('input', function () {
        const opacidade = range.value;
        texto.style.color = `rgba(255, 255, 255, ${opacidade})`;
    }); 
});

