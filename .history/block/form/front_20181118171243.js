let swiperContainer = document.querySelector('.swiper-container');
let attributes = JSON.parse(swiperContainer.getAttribute("data-script"));
window.mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  loop: true,
  
  width: attributes.width,
  height: attributes.height,
});
mySwiper.navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
pagination: {
  el: '.swiper-pagination',
  clickable: true,
},