// JavaScript to handle the carousel/slideshow
document.addEventListener('DOMContentLoaded', function() {
  const carouselItems = document.querySelectorAll('.landing_text .carousel-item');
  const intervalDuration = 5000; // Time interval between slide transitions (in milliseconds)
  let currentSlide = 0;

  function showSlide(slideIndex) {
    for (let i = 0; i < carouselItems.length; i++) {
      carouselItems[i].style.display = 'none';
    }
    carouselItems[slideIndex].style.display = 'block';
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % carouselItems.length;
    showSlide(currentSlide);
  }

  // Hide all carousel items except the first one
  showSlide(currentSlide);

  // Start the slideshow
  setInterval(nextSlide, intervalDuration);
});
