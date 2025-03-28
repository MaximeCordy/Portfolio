// Sélectionner l'image à l'intérieur de la div footer-logo-star
const star = document.querySelector(".footer-logo-star .star");

// Exemple pour ajuster la vitesse de rotation via JavaScript
function changerVitesse(vitesse) {
  star.style.animationDuration = `${4}s`; // Vitesse en secondes
}

changerVitesse(4);

// const video = document.getElementById("mainVideo");
// const videoWorks = document.querySelectorAll(".video-work");

// videoWorks.forEach((item) => {
//   item.addEventListener("mouseover", function () {
//     let videoId = this.id; // Utilisation de `id`
//     let newVideo = videoId + ".mp4"; // Créez un chemin en fonction de l'id
//     video.querySelector("source").setAttribute("src", newVideo);
//     video.load();
//     video.play();
//   });
// });

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
