const getFormWidth  = () => {
  
  const sliderFormContainer = document.querySelector('.slider-form-container');
  const gridColumnValue = window.getComputedStyle(sliderFormContainer).getPropertyValue('grid-template-columns');
  const columnValues = gridColumnValue.split(' ');
  const firstColumnValue = parseInt(columnValues[0], 10);

  return firstColumnValue;
}

const slideForm = (item) => {
  
  const itemId = item.id;
  const formList = document.querySelector(".left-content .slider-form-container");
  const index = parseInt(itemId.split('-').pop(), 10);
  const formWidth = getFormWidth();
  const itemPosition = (index - 1) * formWidth;

  formList.scrollTo({
    left: itemPosition,
    behavior: "smooth"
  });
}

const initSlider = () => {
  
  const cardList = document.querySelector(".tab-header .slider-item-container");
  const slideButtons = document.querySelectorAll(".tab-header .slide-button-arrow");
  const cardItem = document.querySelectorAll(".slider-item-container .slider-item");

  slideButtons.forEach( button => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = cardList.clientWidth * direction;
      cardList.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      })
    })
  })

  cardItem.forEach( item => {
    item.addEventListener("click", () => {
      const rect = item.getBoundingClientRect();
      const cardMidpoint = rect.left + rect.width / 2;
      const containerMidpoint = cardList.getBoundingClientRect().left + cardList.offsetWidth / 2;
      const direction = cardMidpoint < containerMidpoint ? -1 : 1;
      const scrollAmount = (item.clientWidth + 50) * direction;
      cardList.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
      slideForm(item);
    })
  })

}

window.addEventListener("load", initSlider);