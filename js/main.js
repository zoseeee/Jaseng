const Main = new Swiper(".Main", {
  loop: true,
  autoplay: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const card = new Swiper(".card", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

const review = new Swiper(".review", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    autoplay: true,
    speed: 1000,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
