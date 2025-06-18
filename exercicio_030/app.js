/* ----------------------------------------------------------------------------

Exercício: 030
Enunciado:
    No input de texto só podemos inserir números.
    Se clicarmos no botão "Calcular", devemos apresentar o resultado do valor
    inserido no input de texto a dividir por 3.
    Todos os resultados devem ser apresentados com uma casa decimal.
    Se o resultado de qualquer cálculo for incorreto, deve aparecer a mensagem
    "Valor inválido"
---------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('text_valor');
    const btn = document.querySelector('button');
    const resultado = document.getElementById('resultado');

    function isNumber(value) {
    return !isNaN(value) && value.trim() !== '';
    }

    input.addEventListener('input', () => {
    input.value = input.value.replace(/[^0-9.]/g, '');
    });

    btn.addEventListener('click', () => {
    const valor = input.value;

    if (isNumber(valor)) {
        const num = parseFloat(valor);
        const resultadoDiv = (num / 3).toFixed(1);
        resultado.textContent = resultadoDiv;
    } else {
        resultado.textContent = "Valor inválido";
    }
    });

})