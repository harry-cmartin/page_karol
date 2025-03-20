// Listas de imagens para cada categoria
const imageSets = {
    "EU": ["assets/eu1.png", "assets/eu2.png"],
    "AMIGOS": [ "assets/amigos2.png","assets/amigos1.png", "assets/amigos3.png","assets/amigos4.png","assets/amigos5.png"],
    "MOMENTOS": [ "assets/moments2.png","assets/moments1.png", "assets/moments3.png","assets/moments4.png"],
    "VIAGENS": ["assets/viagens1.png", "assets/viagens2.png"]
};

function nextImage(button) {
    updateImage(button, 1);
}

function prevImage(button) {
    updateImage(button, -1);
}

function updateImage(button, direction) {
    const container = button.closest(".container-fotos-karol"); // Encontra o carrossel correspondente
    const imageElement = container.querySelector(".displayedImage");
    const category = container.previousElementSibling.textContent.trim(); // Pega o título da seção
    let currentIndex = parseInt(imageElement.getAttribute("data-index"));

    // Atualiza o índice
    currentIndex = (currentIndex + direction + imageSets[category].length) % imageSets[category].length;
    imageElement.setAttribute("data-index", currentIndex);
    imageElement.src = imageSets[category][currentIndex];
}

const images = [
    "assets/oqfaco1.png",
    "assets/oqfaco2.png",
    "assets/oqfaco3.png",
    "assets/oqfaco4.png",
    "assets/oqfaco5.png",
    "assets/oqfaco6.png",
    "assets/oqfaco7.png",

];
let currentIndex = 0;
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('displayedImage').src = images[currentIndex];
}
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById('displayedImage').src = images[currentIndex];
}