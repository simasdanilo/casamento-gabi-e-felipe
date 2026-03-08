const giftModal = document.getElementById('gift-modal');
const closeGiftModal = document.getElementById('button-close-gift');
const presentButton = document.getElementById('gift-modal-present');

function openGiftModal(gift) {

    document.getElementById('gift-modal-image').src = gift.photo;
    document.getElementById('gift-modal-description').textContent = gift.description;
    document.getElementById('gift-modal-value').textContent = formatToMoney(gift.value);

    presentButton.onclick = null;
    presentButton.onclick = () => {
        window.open(gift.link, "_blank", "noopener,noreferrer");
    };

    copyToClipboard(gift.pix);
    showToast("✓ Pix copiado");

    giftModal.classList.add('active');


    // 👇 impede scroll da página atrás do modal
    document.body.style.overflow = "hidden";
}

closeGiftModal.addEventListener('click', () => {
    giftModal.classList.remove('active');
    // 👇 reativa scroll
    document.body.style.overflow = "";
});

giftModal.addEventListener('click', (e) => {
    if (e.target === giftModal) {
        giftModal.classList.remove('active');
        // 👇 reativa scroll
        document.body.style.overflow = "";
    }
});