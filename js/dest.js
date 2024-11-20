document.addEventListener("DOMContentLoaded", function() {
    const contentElements = document.querySelectorAll('.content > *');

    // Add the visible class to each element to trigger the animation
    contentElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 200); // Stagger the animations by 200ms for each element
    });
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
    const textElements = document.querySelectorAll('.text3, .text4');
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
    const text3 = document.querySelector('.text3');
    const text4 = document.querySelector('.text4');

    if (isElementInViewport(text3)) {
        text3.classList.add('visible');
    }
    if (isElementInViewport(text4)) {
        text4.classList.add('visible');
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