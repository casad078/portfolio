// Function to set a random background image
function setRandomBackground(containerId) {
    const container = document.getElementById(containerId);
    const images = container.querySelectorAll('.background-image');
    
    // Hide all images
    images.forEach(img => img.classList.remove('visible'));

    // Get a random index
    const randomIndex = Math.floor(Math.random() * images.length);

    // Show the random image
    images[randomIndex].classList.add('visible');
}

// Set an interval to change the background for both containers
setInterval(() => setRandomBackground('background-container-1'), 800);
setInterval(() => setRandomBackground('background-container-2'), 800);

// Optionally, set an initial background image for both containers
setRandomBackground('background-container-1');
setRandomBackground('background-container-2');
