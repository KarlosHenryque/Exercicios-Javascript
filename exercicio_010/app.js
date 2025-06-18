/* ----------------------------------------------------------------------------

Exercício: 010
Enunciado:
    Existem 4 áreas a cinza.
    Ao clicar numa das áreas a área clicada deve ficar com fundo
    amarelo e as restantes a vermelho.
---------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('#box1, #box2, #box3, #box4');

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            boxes.forEach(b => b.style.background = 'yellow');
            box.style.background = 'red';
        })
    })
})