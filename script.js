const maxWidth = 550;

function updateGaugeReseaux(value) {
    const fill = document.querySelector('.gauge-fill-reseaux');
    const label = document.querySelector('.gauge-label-reseaux');

    // Limiter la valeur entre 0 et 100
    const percentage = Math.max(0, Math.min(value, 100));
    
    // Mettre à jour la largeur du remplissage et le texte
    const width = (percentage / 100) * maxWidth;
    fill.setAttribute('width', width);
    label.textContent = `${percentage}%`;
  }

const fixedPercentageReseaux = 70;

function updateGaugeTelec(value) {
  const fill = document.querySelector('.gauge-fill-telec');
  const label = document.querySelector('.gauge-label-telec');

  // Limiter la valeur entre 0 et 100
  const percentage = Math.max(0, Math.min(value, 100));
  
  // Mettre à jour la largeur du remplissage et le texte
  const width = (percentage / 100) * maxWidth;
  fill.setAttribute('width', width);
  label.textContent = `${percentage}%`;
}

const fixedPercentageTelec = 75;

function updateGaugeProg(value) {
  const fill = document.querySelector('.gauge-fill-prog');
  const label = document.querySelector('.gauge-label-prog');

  // Limiter la valeur entre 0 et 100
  const percentage = Math.max(0, Math.min(value, 100));
  
  // Mettre à jour la largeur du remplissage et le texte
  const width = (percentage / 100) * maxWidth;
  fill.setAttribute('width', width);
  label.textContent = `${percentage}%`;
}

const fixedPercentageProg = 90;

// Appeler la fonction après que le DOM soit chargé
document.addEventListener("DOMContentLoaded", () => {
  updateGaugeReseaux(fixedPercentageReseaux);
  updateGaugeTelec(fixedPercentageTelec);
  updateGaugeProg(fixedPercentageProg);
});