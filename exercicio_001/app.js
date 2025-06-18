/* ----------------------------------------------------------------------------

Exercício: 001
Enunciado: CONTADOR
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento. Ao clicar em cada
    um dos botões, o utilizador irá aumentar ou diminuir o valor em uma unidade.

---------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    
    const contador = () => {
        let decremento = document.querySelector('#btn_decremento');
        let incremento = document.querySelector('#btn_incremento');
        let valor = document.querySelector('#valor');
        let contador = 0;

            incremento.addEventListener('click', () => {
                contador++;
                valor.innerHTML = contador
            });

            decremento.addEventListener('click', () => {
                contador--;
                valor.innerHTML = contador
            });
    }
    contador();
});