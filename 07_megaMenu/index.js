var largura = window.screen.width; // pega largura da tela

// Script para exibir/ocultar barrinha azul do menu web aberto
function exibeBarrinha() {
	if( largura >= 991) { // se tela for maior que 991px

		const dropdownLink = document.querySelector('.dropdown-toggle');

	    dropdownLink.addEventListener('click', () => {
	        if (dropdownLink.classList.contains('show')) {
	            document.getElementsByClassName("hr-infra")[0].classList.remove("display-none");
	        } else {
	            document.getElementsByClassName("hr-infra")[0].classList.add("display-none");
	        }
	    });
	    
	    // quando fechar dropdown (clicar em qualquer lugar da tela), removemos a barrinha
	    window.onclick = (e) => {
	        if(!document.getElementsByClassName("dropdown-menu")[0].classList.contains("show")) {
	            document.getElementsByClassName("hr-infra")[0].classList.add("display-none");
	        }
	  }
	}
}
window.addEventListener('load', exibeBarrinha, false);
window.addEventListener('resize', exibeBarrinha, false);

var navbar = document.getElementById('container__navbar');

window.addEventListener('scroll', () => {
	if (window.scrollY >= 420) {
			navbar.classList.add('container__navbar--scroll');
			navbar.classList.remove('container__navbar--scroll-out');
	} else if(window.scrollY < 420 && window.scrollY >= 1)  {
		navbar.classList.remove('container__navbar--scroll');
		navbar.classList.add('container__navbar--scroll-out');
	}
	else {
			navbar.classList.remove('container__navbar--scroll');
			navbar.classList.remove('container__navbar--scroll-out');
	}
});