const forms = document.querySelectorAll('.newsletter'); // Select all .newsletter forms

forms.forEach(form => {
    const button = form.querySelector('button'); // Get the button inside each form

    button.addEventListener('mouseenter', () => {
        form.style.borderColor = 'darkgreen'; // Change border color on hover
    });

    button.addEventListener('mouseleave', () => {
        form.style.borderColor = '#fff'; // Reset border color when not hovering
    });
});

// Select the image element
const image = document.querySelector('.banner img');

// Create the Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Image has entered the viewport, increase its width
            image.style.width = '100%'; // Increase the width to fill the container
            observer.unobserve(entry.target); // Stop observing once the effect is triggered
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the image is in the viewport
});

// Start observing the image
observer.observe(image);
