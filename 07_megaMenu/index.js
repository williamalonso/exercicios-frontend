
var largura = window.screen.width; // pega largura da tela

// Script para exibir/ocultar barrinha azul do menu web aberto
if( largura >= 991) { // se tela for maior que 991px

    document.getElementsByClassName("dropdown-toggle")[0].addEventListener("click", function(){
        document.getElementsByClassName("hr-infra")[0].classList.toggle("display-none");
    });
    
    // quando fechar dropdown (clicar em qualquer lugar da tela), removemos a barrinha
    window.onclick = (e) => {
        if(!document.getElementsByClassName("dropdown-menu")[0].classList.contains("show")) {
            document.getElementsByClassName("hr-infra")[0].classList.add("display-none");
        }
  }
}