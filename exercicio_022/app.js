/* ----------------------------------------------------------------------------

Exercício: 022
Enunciado:
    Está disponível um elemento select com 3 opções.
    Por baixo existem 4 checkboxes.
    Quando é selecionada a opção 3 no select, as checkboxes devem ficar ativas.
    Qualquer outra opção, devem desativar as checkboxes.
---------------------------------------------------------------------------- */


document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.querySelector('select');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    function atualizarCheckboxes() {
        if (selectElement.value === '3') {
            checkboxes.forEach(checkbox => checkbox.disabled = false);
        } else {
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
                checkbox.disabled = true;
            });
        }
    }

    selectElement.addEventListener('change', atualizarCheckboxes);
    atualizarCheckboxes();
});
