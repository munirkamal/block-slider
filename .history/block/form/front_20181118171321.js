let swiperContainer = document.querySelector('.swiper-container');
let attributes = JSON.parse(swiperContainer.getAttribute("data-script"));

let options = {
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  loop: true,
  
  width: attributes.width,
  height: attributes.height,
};
if(attributes.dots){
  options
}
window.mySwiper = new Swiper('.swiper-container', );