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
