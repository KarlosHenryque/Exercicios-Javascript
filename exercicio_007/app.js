/* ----------------------------------------------------------------------------

Exercício: 006
Enunciado:
    O mesmo exercício do vídeo anterior, mas com código mais sintético.
---------------------------------------------------------------------------- */


document.addEventListener('DOMContentLoaded', function() {
    const tabs = ['tab1', 'tab2', 'tab3'];
    const infos = ['info1', 'info2', 'info3'];

    function esconderArea() {
        infos.forEach(info => document.getElementById(info).style.display= 'none');
    }

    function mostrarInfo(index) {
        esconderArea();
        document.getElementById(infos[index]).style.display = 'block';
    }

    tabs.forEach((tab, index) => 
        document.getElementById(tab).addEventListener('click', () => mostrarInfo(index))
    );

    mostrarInfo(0);
})