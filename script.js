// Mobile version navigation functionality
let currentSlide = 0;
const totalSlides = document.querySelectorAll('.carousel-item').length;

// Next slide
document.querySelector('.carousel-control-next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlideVisibility();
});

// Previous slide
document.querySelector('.carousel-control-prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlideVisibility();
});

// Manual navigation through indicators
const carouselIndicators = document.querySelectorAll('.carousel-indicators li');
carouselIndicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentSlide = index;
    updateSlideVisibility();
  });
});

function updateSlideVisibility() {
  const slides = document.querySelectorAll('.carousel-item');
  carouselIndicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentSlide);
  });
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide);
  });
}
