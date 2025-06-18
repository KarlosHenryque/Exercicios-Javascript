/* ----------------------------------------------------------------------------

Exercício: 008
Enunciado:
    Existem 5 botões, cada um com uma cor diferente do Bootstrap.
    A ideia é criar o código javascript que permita que o clique em cada
    um dos botões altere o texto acima para a cor de fundo do botão.
---------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    let btn3 = document.getElementById('btn3');
    let btn4 = document.getElementById('btn4');
    let btn5 = document.getElementById('btn5');
    let text = document.getElementById('text');

    btn1.addEventListener('click', () => {
        text.style.color = '#2a9fd6';
    });

    btn2.addEventListener('click', () => {
        text.style.color = '#93c';
    });

    btn3.addEventListener('click', () => {
        text.style.color = '#77b300';
    });

    btn4.addEventListener('click', () => {
        text.style.color = '#c00';
    });

    btn5.addEventListener('click', () => {
        text.style.color = '#f80';
    });
});