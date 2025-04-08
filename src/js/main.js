// Sélectionner l'image à l'intérieur de la div footer-logo-star
const star = document.querySelector(".footer-logo-star .star");

// Exemple pour ajuster la vitesse de rotation via JavaScript
function changerVitesse(vitesse) {
  star.style.animationDuration = `${4}s`; // Vitesse en secondes
}
if (star) changerVitesse(4);

const triggers = document.querySelectorAll(".trigger");
const videos = document.querySelectorAll(".videoo");

triggers.forEach((trigger, index) => {
  trigger.addEventListener("click", function () {
    videos.forEach((video) => {
      video.classList.remove("is-active");
    });
    videos[index].classList.add("is-active");
  });
});

import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3,
  spaceBetween: 30,
});

const mouse = document.querySelector("#mouse");
window.addEventListener("mousemove", (e) => {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
});

var swiper2 = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  slidesPerView: 1,
});

var swiper2 = new Swiper(".mySwiper2", {
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  slidesPerView: 1,
});
