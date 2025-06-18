/* ----------------------------------------------------------------------------

Exercício: 023
Enunciado:
    Existem 4 checkboxes referentes a um conjunto de permissões de usuário.
    Cada checkbox pode ser checkada individualmente.
    Por baixo existem duas opções: todas e nenhuma.
    Ao clicar em todas, todas as checkboxes devem ser checkadas.
    Ao clicar em nenhuma, todas as checkboxes devem ser descheckadas.
---------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    
    const allBtn = document.getElementById('all');
    const noneBtn = document.getElementById('none');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    allBtn.addEventListener('click', () => {
        checkboxes.forEach(checkbox => {
            checkbox.checked = true;
        })
    })

    noneBtn.addEventListener('click', () => {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        })
    })
});