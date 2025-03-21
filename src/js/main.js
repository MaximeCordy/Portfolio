// Sélectionner l'image à l'intérieur de la div footer-logo-star
const star = document.querySelector(".footer-logo-star .star");

// Exemple pour ajuster la vitesse de rotation via JavaScript
function changerVitesse(vitesse) {
  star.style.animationDuration = `${4}s`; // Vitesse en secondes
}

changerVitesse(4);

const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");

const speed = 3; // Vitesse du défilement (px par frame)
let textWidth = text1.clientWidth; // Largeur du texte
let position1 = 0;
let position2 = textWidth + 50; // Ajusté juste après le premier texte

function animate() {
  position1 -= speed;
  position2 -= speed;

  // Si un texte sort de l'écran à gauche, il réapparaît à droite
  if (position1 < -textWidth) {
    position1 = position2 + textWidth + 50;
  }
  if (position2 < -textWidth) {
    position2 = position1 + textWidth + 50;
  }

  text1.style.transform = `translateX(${position1}px)`;
  text2.style.transform = `translateX(${position2}px)`;

  requestAnimationFrame(animate);
}

// Attendre que le DOM soit chargé pour récupérer la largeur réelle des textes
window.onload = () => {
  textWidth = text1.clientWidth;
  position2 = textWidth + 50;
  animate();
};
