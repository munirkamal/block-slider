let swiperContainer = document.querySelector('.swiper-container');

window.mySwiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  loop: true,
  
  //width: swiperContainer.width,
  //height: swiperContainer.height,
});