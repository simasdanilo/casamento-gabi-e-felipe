const openMap = document.getElementById('button-open-map');
const closeMap = document.getElementById('button-close-map');
const modal = document.getElementById('map-modal');

openMap.addEventListener('click', () => {
  modal.classList.add('active');

  // 👇 impede scroll da página atrás do modal
  document.body.style.overflow = "hidden";
});

closeMap.addEventListener('click', () => {
  modal.classList.remove('active');

  // 👇 reativa scroll
  document.body.style.overflow = "";
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});