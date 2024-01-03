const initSlider = () => {

  const cardList = document.querySelector(".slider-wrapper .card-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const cardItem = document.querySelectorAll(".slider-wrapper .card");
  const maxScrollLeft = cardList.scrollWidth - cardList.clientWidth;

  slideButtons.forEach( button => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = cardList.clientWidth * direction;
      cardList.scrollBy({ 
        top: 100,
        left: scrollAmount,
        behavior: "smooth"
      });
    });
  });

  cardItem.forEach( item => {
    item.addEventListener("click", () => {

      // Obtém a posição do cartão em relação à janela de visualização
      // Retorna a distância, em pixels, entre o canto superior esquerdo do elemento (no caso, card1) e o canto esquerdo da janela de visualização (ou seja, a borda da área visível do navegador).
      const rect = item.getBoundingClientRect();
      // console.log(rect.left);

      // Calcula o ponto médio horizontal do cartão. Estamos dividindo o elemento em duas partes iguais e pegando o centro do elemento.
      // Aqui estamos pegando o valor acima e adicionando metade do valor da largura do elemento, ou seja, (rect.width/2) = 150
      const cardMidpoint = rect.left + rect.width / 2;
      // console.log('centro do card', cardMidpoint);

      // Calcula o ponto médio horizontal da janela de visualização
      const viewportMidpoint = window.innerWidth / 2;
      // console.log('tamanho janela', viewportMidpoint);

      // Decide a direção com base na posição do cartão
      const direction = cardMidpoint < viewportMidpoint ? -1 : 1;

      const scrollAmount = (item.clientWidth + 50) * direction;

      cardList.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    });
  });


  const handleSlideButtons = () => {

    if(cardList.scrollLeft > 0) {
      slideButtons[0].classList.remove('sliderbutton--hover');
    } else {
      slideButtons[0].classList.add('sliderbutton--hover');
    }

    if(cardList.scrollLeft >= maxScrollLeft) {
      slideButtons[1].classList.add('sliderbutton--hover');
    } else {
      slideButtons[1].classList.remove('sliderbutton--hover');
    }
    
  }

  cardList.addEventListener("scroll", () => {
    handleSlideButtons();
  })

}

window.addEventListener("load", initSlider);