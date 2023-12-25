const initSlider = () => {

  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const cardList = document.querySelector(".slider-wrapper .card-list");

  slideButtons.forEach( button => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
    });
  });

}

window.addEventListener("load", initSlider);