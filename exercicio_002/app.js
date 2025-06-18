/* ----------------------------------------------------------------------------

Exercício: 002
Enunciado: CONTADOR COM INTERVALO DE VALORES
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    O valor nunca poderá ser inferior a -10 ou superior a 10.

---------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    
    const contador = () => {
        let decremento = document.querySelector('#btn_decremento');
        let incremento = document.querySelector('#btn_incremento');
        let valor = document.querySelector('#valor');
        let contador = 0;

            incremento.addEventListener('click', () => {
                if(contador < 10) {
                    contador++;
                    valor.innerHTML = contador
                }
            });

            decremento.addEventListener('click', () => {
                if(contador > -10){
                    contador--;
                    valor.innerHTML = contador
                }
            });
    }
    contador();
});