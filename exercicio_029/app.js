/* ----------------------------------------------------------------------------

Exercício: 029
Enunciado:
    Começando pelo exercício 28, mas agora queremos apresentar os números numa
    sequência de quatro por cada linha. Deve aparecer com fundo branco e texto 
    de cor verde. Deve ter uma distribuição consistente da informação. 
---------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('button');
    const divNumeros = document.getElementById('numeros');

    btn.addEventListener('click', () => {
    divNumeros.innerHTML = ''; 

    const totalNumeros = 20;
    const numerosPorLinha = 4;


    for (let i = 1; i <= totalNumeros; i += numerosPorLinha) {
        const linha = document.createElement('div');
        linha.style.display = 'flex';
        linha.style.justifyContent = 'center';
        linha.style.marginBottom = '10px';
        linha.style.backgroundColor = 'white';

        for (let j = i; j < i + numerosPorLinha && j <= totalNumeros; j++) {
        const numero = document.createElement('div');
        numero.textContent = j;
        numero.style.color = 'green';
        numero.style.flex = '1';  
        numero.style.textAlign = 'center';
        numero.style.fontWeight = 'bold';
        numero.style.padding = '10px 0';
        numero.style.border = '1px solid #ccc'; 
        linha.appendChild(numero);
        }

        divNumeros.appendChild(linha);
    }
    });

})