
const video = document.getElementById('myVideo');
        
// Ensure video starts playing as soon as it's loaded
video.addEventListener('loadedmetadata', function() {
    video.play();
});



document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll(".image-slider input[type='radio']");
    let currentIndex = 0;

    function slideNext() {
        inputs[currentIndex].checked = false; // Uncheck current input
        currentIndex = (currentIndex + 1) % inputs.length; // Move to next index (circular)
        inputs[currentIndex].checked = true; // Check next input
        console.log("Moved to slide:", currentIndex + 1); // Log the current slide
    }

    // Manually trigger the first slide
    inputs[0].checked = true;

    // Start the auto-sliding
    setInterval(slideNext, 3000); // Auto-slide every 3 seconds

    console.log("Auto-sliding initialized with", inputs.length, "slides");
});

let currentIndex = 0;

function scrollLeft() {
    const container = document.querySelector('.grid-container');
    const containerWidth = container.clientWidth;
    const totalItems = container.children.length;

    if (currentIndex > 0) {
        currentIndex--;
        container.scrollTo({
            left: currentIndex * containerWidth,
            behavior: 'smooth'
        });
    }
}

function scrollRight() {
    const container = document.querySelector('.grid-container');
    const containerWidth = container.clientWidth;
    const totalItems = container.children.length;

    if (currentIndex < totalItems - 1) {
        currentIndex++;
        container.scrollTo({
            left: currentIndex * containerWidth,
            behavior: 'smooth'
        });
    }
}

// Adding event listeners to arrow buttons
document.querySelector('.arrow.left').addEventListener('click', scrollLeft);
document.querySelector('.arrow.right').addEventListener('click', scrollRight);

 
  
    
