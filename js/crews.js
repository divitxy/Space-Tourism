document.addEventListener("DOMContentLoaded", function() {
    const cont = document.querySelector('.cont');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                cont.style.opacity = '1';
                cont.style.transform = 'translateX(0)'; 
                observer.unobserve(cont); 
            }
        });
    });

    observer.observe(cont); 
});

window.addEventListener('load', function() {
    const subCrew = document.querySelector('.sub-crew');
    subCrew.classList.add('visible'); // Add the visible class to trigger the animation
});



document.addEventListener("DOMContentLoaded", function() {
    const options = {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add the visible class
                observer.unobserve(entry.target); // Stop observing once it has been revealed
            }
        });
    }, options);

    // Select the elements to observe
    const textElements = document.querySelectorAll('.circle');
    textElements.forEach(element => {
        observer.observe(element); // Start observing each element
    });
});

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    const text3 = document.querySelector('.circle');

    if (isElementInViewport(text3)) {
        text3.classList.add('visible');
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check in case elements are already in view
handleScroll();





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