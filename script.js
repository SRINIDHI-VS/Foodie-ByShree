let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

document.querySelector("#search-icon").addEventListener("click", () => {
  document.querySelector("#search-form").classList.toggle("active");
});

document.querySelector("#close").addEventListener("click", () => {
  document.querySelector("#search-form").classList.remove("active");
});

var swiper = new Swiper(".home-slider", {
  spaceBetween: 47,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});


var swiper = new Swiper(".review-slider", {
  spaceBetween: 138,
  centeredSlides: true,
  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },
  loop: true,
breakpoints:
{
  0:{
    slidesPerView :1,
  },
  640:{
    slidesPerView :2,
  },
  768:
  {
    slidesPerView :2,
  },
  1024:
  {
    slidesPerView :3,
  },
},
});