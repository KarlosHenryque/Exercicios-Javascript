/* ----------------------------------------------------------------------------

Exercício: 026
Enunciado:
    Existem 4 inputs de texto, cada um com um id diferente.
    Cada input só pode receber um caracter.
    O focus deve iniciar no primeiro input.
    Ao digitar um algarismo, o focus deve ir para o próximo input.
    Ao digitar o último algarismo, o focus deve ir para o primeiro input.
    Se todos os inputs estiverem preenchidos, o sistema deve verificar se o
    número constituído pela concatenacao dos 4 algarismos é igual a 1234.
    Se for igual, deve aparecer uma mensagem de sucesso, caso contrário,
    a mensagem de sucesso deve estar escondida.
---------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const inputs = [
        document.getElementById('t1'),
        document.getElementById('t2'),
        document.getElementById('t3'),
        document.getElementById('t4')
    ];
    const message = document.querySelector('.text-success');

    inputs[0].focus();

    inputs.forEach((input, index) => {
        input.maxLength = 1; 

        input.addEventListener('input', () => {
        if (!/^\d$/.test(input.value)) {
            input.value = '';
            return;
        }

        const nextIndex = (index + 1) % inputs.length;
        inputs[nextIndex].focus();

        const allFilled = inputs.every(i => i.value !== '');

        if (allFilled) {
            const number = inputs.map(i => i.value).join('');
            if (number === '1234') {
            message.style.display = 'block';
            } else {
            message.style.display = 'none';
            }
        } else {
            message.style.display = 'none';
        }
        });

        input.addEventListener('paste', e => {
        e.preventDefault();
        });
    });
});
