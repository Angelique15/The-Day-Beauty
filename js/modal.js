// Obtenemos los elementos necesarios del DOM
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const closeButton = document.getElementById("close-btn");
const memberButton = document.getElementById("member-btn");

// Función para abrir el pop-up
function openModal() {
    modal.style.display = "block";
}

// Función para cerrar el pop-up
function closeModal() {
    modal.style.display = "none";
}

// Event listener para abrir el pop-up cuando se hace clic en el botón
memberButton.addEventListener("click", openModal);

// Event listener para cerrar el pop-up cuando se hace clic en el botón de cerrar
closeButton.addEventListener("click", closeModal);

// Event listener para cerrar el pop-up cuando se hace clic fuera del contenido del pop-up
window.addEventListener("click", function (event) {
    if (event.target === modalContent) {
        closeModal();
    }
});
