const maxWidth = 550;
const fixedPercentageReseaux = 70;
const fixedPercentageTelec = 75;
const fixedPercentageProg = 90;

function updateGauge(value, jaugefill, jaugelabel) {
    const fill = document.querySelector(jaugefill);
    const label = document.querySelector(jaugelabel);

    // Limiter la valeur entre 0 et 100
    const percentage = Math.max(0, Math.min(value, 100));
    
    // Mettre à jour la largeur du remplissage et le texte
    const width = (percentage / 100) * maxWidth;
    fill.setAttribute('width', width);
    label.textContent = `${percentage}%`;
  }

// Appeler la fonction après que le DOM soit chargé
document.addEventListener("DOMContentLoaded", () => {
  updateGauge(fixedPercentageReseaux, '.gauge-fill-reseaux', '.gauge-label-reseaux');
  updateGauge(fixedPercentageTelec, '.gauge-fill-telec', '.gauge-label-telec');
  updateGauge(fixedPercentageProg, '.gauge-fill-prog', '.gauge-label-prog');
});
