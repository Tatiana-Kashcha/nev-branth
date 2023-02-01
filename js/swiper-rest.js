var swiper = new Swiper(".mySwiper", {
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 34,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 87,
    },
  },
  speed: 500,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next-rest",
    prevEl: ".swiper-button-prev-rest",
  },
});
