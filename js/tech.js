document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.querySelector('.tech-text-toggle');
    const text = document.querySelector('.tech-text-text');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target === toggle) {
                    toggle.classList.add('visible'); // Add the visible class to toggle
                } else if (entry.target === text) {
                    text.classList.add('visible'); // Add the visible class to text
                }
            }
        });
    });

    observer.observe(toggle); // Start observing the toggle
    observer.observe(text); // Start observing the text
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