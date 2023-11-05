const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < 3) { // Cambia el número al número de tarjetas - 1
    currentIndex++;
    updateCarousel();
  }
});

function updateCarousel() {
  const cardWidth = document.querySelector('.card').offsetWidth;
  carousel.style.transform = `translateX(-${currentIndex * (cardWidth + 20)}px)`;
}
function showCard2() {
    const card2 = document.getElementById("card2");
    card2.style.display = "block";
}

function hideCard2() {
    const card2 = document.getElementById("card2");
    card2.style.display = "none";
}
