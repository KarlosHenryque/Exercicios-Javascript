/* ----------------------------------------------------------------------------

Exercício: 005
Enunciado: TRÊS SLIDERS COM VALORES INDEPENDENTES - VERSÃO CÓDIGO REDUZIDO
    
    O exercício anterior, mas com quantidade de código JS reduzida.

---------------------------------------------------------------------------- */


function setupRange(rangeId, valueId) {
    const range = document.querySelector(rangeId);
    range.setAttribute('min', 0);
    range.setAttribute('max', 100);
    range.value = 0;
    range.addEventListener('input', (e) => {
        document.querySelector(valueId).textContent = e.target.value;
    });
}

setupRange('#range_1', '#value_1');
setupRange('#range_2', '#value_2');
setupRange('#range_3', '#value_3');