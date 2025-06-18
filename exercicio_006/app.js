/* ----------------------------------------------------------------------------

Exercício: 006
Enunciado:
    Existem 3 botões no layout. Cada botão está associado a uma área de
    informação. O objetivo é criar a lógica que permite apresentar cada
    uma das áreas de acordo com o botão clicado.
    A área de informação um deve estar visível por padrão.

    NOTA: quando uma área é apresentada, as outras devem ficar escondidas
---------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', function() {
    const tab1 = document.getElementById('tab1');
    const tab2 = document.getElementById('tab2');
    const tab3 = document.getElementById('tab3');

    const info1 = document.getElementById('info1');
    const info2 = document.getElementById('info2');
    const info3 = document.getElementById('info3');

    function esconderArea() {
        info1.style.display = 'none';
        info2.style.display = 'none';
        info3.style.display = 'none';
    }

    info1.style.display = 'block';

    function mostrarInfo(area) {
        esconderArea();
        area.style.display = 'block';
    }

    tab1.addEventListener('click', function() {
        mostrarInfo(info1);
    });

    tab2.addEventListener('click', function() {
        mostrarInfo(info2);
    });

    tab3.addEventListener('click', function() {
        mostrarInfo(info3);
    });
})