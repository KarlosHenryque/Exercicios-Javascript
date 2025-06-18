/* ----------------------------------------------------------------------------

Exercício: 003
Enunciado: CONTADOR COM CORES PARA NEGATIVOS, ZERO E POSITIVOS
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    No caso do valor ser zero o texto deve ser branco.
    No caso do valor ser negativo o texto deve ser vermelho puro.
    No caso do valor ser positivo o texto deve ser verde puro.

---------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    
    const contador = () => {
        let decremento = document.querySelector('#btn_decremento');
        let incremento = document.querySelector('#btn_incremento');
        let valor = document.querySelector('#valor');
        let contador = 0;

        const atualizarCor = () => {
            if (contador === 0) {
                valor.style.color = 'white';
            } else if (contador > 0) {
                valor.style.color = 'green';
            } else if (contador < 0) {
                valor.style.color = 'red';
            }
        }

        const atualizarResultado = () => {
            valor.innerHTML = contador
            atualizarCor();
        }

            incremento.addEventListener('click', () => {
                contador++;
                atualizarResultado();
            });

            decremento.addEventListener('click', () => {
                contador--;
                atualizarResultado();
            });
    }
    contador();
});