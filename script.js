let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  section.forEach(element => {
    let top = window.scrollY;
    let height = element.offsetHeight;
    let offset = element.offsetTop - 150;
    let id = element.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    }
  });
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
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768:
    {
      slidesPerView: 2,
    },
    1024:
    {
      slidesPerView: 3,
    },
  },
});


function loader()
{
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut()
{
setInterval(loader, 3000);
}

window.onload = fadeOut;