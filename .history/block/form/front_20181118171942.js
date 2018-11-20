let swiperContainer = document.querySelector('.swiper-container');
let attributes = JSON.parse(swiperContainer.getAttribute("data-script"));
console.lo
let options = {
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  loop: true,
  width: attributes.width,
  height: attributes.height,
  autoHeight:true,
};
if (attributes.dots) {
  options["pagination"] = {
    el: '.swiper-pagination',
    clickable: true,
  }
}
if (attributes.arrow) {
  options['navigation'] = {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
}
window.mySwiper = new Swiper('.swiper-container', options);