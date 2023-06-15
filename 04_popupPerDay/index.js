// Show PopUp only one time a day
document.addEventListener("DOMContentLoaded", function() {
        
    // pega a data atual
    var data = new Date();
    var popup = localStorage.getItem("popup");

    // Se popup está vazio
    if(localStorage.getItem('popup') == null) {

        // exibe o modal quando abre a página
        $('#exampleModal').modal('show');

        // insere a data de hoje no localStorage
        localStorage.setItem("popup", data.toLocaleDateString());

    } else {

        // verifica se a data do popup é igual a data de hoje
        if( popup == data.toLocaleDateString() ) {
            
            // Se for igual, não exibe o Popup
            document.getElementById("exampleModal").display = "none";

        } else {

            // Se as datas forem difetentes, exibe o modal novamente
            $('#exampleModal').modal('show');

            // insere a data de hoje no localStorage
            localStorage.setItem("popup", data.toLocaleDateString());

        }
    }
});