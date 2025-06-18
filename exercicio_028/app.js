/* ----------------------------------------------------------------------------

Exercício: 028
Enunciado:
    Existe um botão o qual, ao ser clicado, cria 20 números aleatórios entre 1 e 1000.
    Esses números devem ser apresentados cada um em sua própria linha dentro do elemento
    cujo id é igual a "numeros".
---------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('button');
    const container = document.getElementById('numeros');

    btn.addEventListener('click', () => {
    container.innerHTML = ''; 

    for (let i = 0; i < 20; i++) {
        const num = Math.floor(Math.random() * 1000) + 1;
        const div = document.createElement('div');
        div.textContent = num;
        container.appendChild(div);
    }
    });

})