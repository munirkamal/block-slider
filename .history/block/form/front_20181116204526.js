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
  simulateTouch:false
  // width: attributes.width.value,
  // height: attributes.height.value,
});