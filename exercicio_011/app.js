/* ----------------------------------------------------------------------------

Exercício: 011
Enunciado:
    A grelha inicial contém dezasseis imgs sem souce.
    Quando clicamos numa das imgs, vamos apresentar o símbolo X (imagem)
    No clique seguinte, que só pode acontecer numa img que não tenha símbolo,
    vamos apresentar o símbolo 'O'.
---------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    let currentPlayer = 'x';

    const symbols = {
        X: 'x.png',
        O: 'o.png',
    }

    function handleClick(e) {
        const img = e.target;
        
        if(!img.src || img.src === window.location.href) {
            img.src = symbols[currentPlayer];

            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }

    for (let i = 1; i <= 16; i++) {
        const img = document.getElementById(`img${i}`);
        img.addEventListener('click', handleClick);
    }
})
