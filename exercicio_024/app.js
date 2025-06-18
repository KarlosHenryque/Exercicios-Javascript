/* ----------------------------------------------------------------------------

Exercício: 024
Enunciado:
    Existem 8 checkboxes referentes a um conjunto de permissões de usuário.
    Cada uma delas pode ser checkada individualmente.
    Por baixo, existe um select com 3 perfis de usuário: administrador, coordenador
    e operador.
    Ao selecionar um perfil, as checkboxes devem ser checkadas de acordo com o
    perfil selecionado.

    Administrador: 
        Todas as permissões

    Coordenador: 
        Coordenação dos trabalhos
        Gestão de calendário
        Utilização das máquinas
        Utilização das ferramentas

    Operador:
        Utilização das máquinas
        Utilização das ferramentas

    NOTA: sem perfil, todas as checkboxes devem estar descheckadas.

---------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const permissoes = {
        "check_1": "Gestão de usuários",
        "check_2": "Gestão de armazém",
        "check_3": "Gestão de finanças",
        "check_4": "Visualização de estatística",
        "check_5": "Coordenação dos trabalhos",
        "check_6": "Gestão de calendário",
        "check_7": "Utilização das máquinas",
        "check_8": "Utilização das ferramentas"
    }

    const perfil = {
        administrador: Object.keys(permissoes),
        coordenador: ["check_5", "check_6", "check_7", "check_8"],
        operador: ["check_7", "check_8"]
    }

    function resetarCheckboxes() {
        for (const id in permissoes) {
            document.getElementById(id).checked = false;
        }
    }

    document.getElementById('select_perfil').addEventListener('change', (event) => {
    const perfilSelecionado = event.target.value; 

    resetarCheckboxes();

    if(perfil[perfilSelecionado]) {
        perfil[perfilSelecionado].forEach(id => {
            const checkbox = document.getElementById(id);
            if(checkbox) {
                checkbox.checked = true;
            }
        });
    }
});

})