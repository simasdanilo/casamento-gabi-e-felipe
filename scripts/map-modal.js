const openMap = document.getElementById('button-open-map');
const closeMap = document.getElementById('button-close-map');
const modal = document.getElementById('map-modal');


function lockScroll() {
  document.body.style.overflow = "hidden";
}

function unlockScroll() {
  document.body.style.overflow = "";
}

openMap.addEventListener('click', () => {
  modal.classList.add('active');
  lockScroll();
});

closeMap.addEventListener('click', () => {
  modal.classList.remove('active');
  unlockScroll();
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    unlockScroll();
  }
});