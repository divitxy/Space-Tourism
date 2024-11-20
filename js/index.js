document.addEventListener("DOMContentLoaded", function() {
    const spaceElement = document.querySelector('.space');
    const exploreElement = document.querySelector('.explore');

    // Add the visible class to trigger the animation
    spaceElement.classList.add('visible');
    exploreElement.classList.add('visible');
});

// For mobile screen size 
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const hamburgers = document.querySelector('.hamburgers');
    const bar = document.querySelector('.bar');

    hamburger.addEventListener('click', function() {
        bar.classList.add('show'); // Show the bar
        hamburgers.style.display = 'block'; // Show the close icon
        hamburger.style.display = 'none'; // Hide the hamburger icon
    });

    hamburgers.addEventListener('click', function() {
        bar.classList.remove('show'); // Hide the bar
        hamburgers.style.display = 'none'; // Hide the close icon
        hamburger.style.display = 'block'; // Show the hamburger icon
    });
});