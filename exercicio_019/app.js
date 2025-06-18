/* ----------------------------------------------------------------------------

Exercício: 019
Enunciado:
    Está declarado um array de frutos.
    Ao inserir uma palavra no input text e clicando em pesquisar, o sistema deverá
    indicar se a palavra existe ou não no array e indicar o resultado SIM ou NAO no
    elemento com o id = "resultado"

    NOTA: Não podes usar um ciclo neste exercício.
---------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    let frutos = ['laranja', 'maçã', 'pêra', 'morango', 'ananás', 'limão', 'banana'];

    document.getElementById('pesquisar').addEventListener('click', function(){
        let palavra = document.getElementById('text_palavra').value.trim().toLowerCase();
        let resultado = frutos.includes(palavra) ? 'Sim' : 'Não';
        document.getElementById('resultado').innerHTML = resultado;
    });
});