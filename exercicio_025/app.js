/* ----------------------------------------------------------------------------

Exercício: 025
Enunciado:
    O input number text_numero é o multiplicando. O seu valor só pode variar
    entre 1 e 20. Ao alterar o valor, deve ser apresentada a tabuada do número definido
    no div cujo id = resultados.
---------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const inputNumero = document.getElementById('text_numero');
    const resultados = document.getElementById('resultados');

    function gerarTabuada() {
        let num = parseInt(inputNumero.value);

        if (num < 1) num = 1;
        if (num > 20) num = 20;

        inputNumero.value = num;

        let texto = '';
        for (let i = 1; i <= 10; i++) {
            texto += `${num} x ${i} = ${num * i}<br>`;
        }

        resultados.innerHTML = texto;
    }

    gerarTabuada();

    inputNumero.addEventListener('input', gerarTabuada);
})
