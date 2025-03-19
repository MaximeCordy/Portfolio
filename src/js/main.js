// Sélectionner l'image à l'intérieur de la div footer-logo-star
const star = document.querySelector(".footer-logo-star .star");

// Exemple pour ajuster la vitesse de rotation via JavaScript
function changerVitesse(vitesse) {
  star.style.animationDuration = `${4}s`; // Vitesse en secondes
}

changerVitesse(4);
