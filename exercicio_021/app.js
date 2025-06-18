/* ----------------------------------------------------------------------------

Exercício: 021
Enunciado:
    Existem 4 inputs na página.
    1. Coloca o focus automaticamente no input acima e à esquerda.
    2. Sempre que pressionares a tecla Enter (return), o focus deverá
    passar para o input seguinte, mesmo que não tenhas escrito qualquer texto.
---------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input[type="text"]');

    if(inputs.length > 0) {
        inputs[0].focus();
    }

    inputs.forEach(input => {

    input.addEventListener('focus', () => {
        inputs.forEach(i => i.style.backgroundColor = 'white');
        input.style.backgroundColor = 'yellow';
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const nextInput = input[index + 1];
            if (nextInput) {
                nextInput.focus();
            }
        }
    });

    });
});