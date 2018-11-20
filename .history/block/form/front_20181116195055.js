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
    width: swiperContainer.attributes.width.value,
    height: swiperContainer.attributes.height.value,
  });