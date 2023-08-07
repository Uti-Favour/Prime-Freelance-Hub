document.addEventListener('DOMContentLoaded', function() {
   // Variables
  let currentPage = 1;
  const totalPages = 4;
  const carouselInterval = 5000; // Change this value to set the carousel interval (in milliseconds)

  // Function to show the current page and hide others
  function showCurrentPage() {
    for (let i = 1; i <= totalPages; i++) {
      const page = document.querySelector(`.landing_page_section:nth-child(${i})`);
      if (i === currentPage) {
        page.style.display = 'block';
      } else {
        page.style.display = 'none';
      }
    }
  }

  // Function to switch to the next page
  function goToNextPage() {
    currentPage++;
    if (currentPage > totalPages) {
      currentPage = 1;
    }
    showCurrentPage();
  }

  // Function to start the carousel
  function startCarousel() {
    showCurrentPage();
    setInterval(goToNextPage, carouselInterval);
  }

  // Start the carousel when the document has finished loading
  document.addEventListener('DOMContentLoaded', startCarousel);
   
});