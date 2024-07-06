document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const images = document.querySelectorAll(".slider img");
    const sliderWidth = slider.clientWidth;
    let currentIndex = 0;
  
    function slideNext() {
      currentIndex++;
      if (currentIndex >= images.length) {
        // If last image is fully visible, immediately transition back to the first image
        if (currentIndex === images.length) {
          currentIndex = 0;
          slider.style.transition = 'none'; // Disable transition for immediate jump
          slider.style.transform = `translateX(0)`;
          setTimeout(() => {
            slider.style.transition = 'transform 0.5s ease'; // Re-enable transition
          }, 50); // Adding a slight delay to ensure smooth transition re-enabling
        }
      } else {
        // Slide 1/3 of the slider width for larger screens, full width for smaller screens
        slider.style.transition = 'transform 0.5s ease';
        if (window.innerWidth > 768) {
          slider.style.transform = `translateX(-${currentIndex * (sliderWidth /6)}px)`;
        } else {
          slider.style.transform = `translateX(-${currentIndex * sliderWidth/6}px)`;
        }
      }
    }
  
    setInterval(slideNext, 3000); // Change image every 3 seconds
  });
  