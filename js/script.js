const form = document.querySelector('.newsletter');
const button = form.querySelector('button');

button.addEventListener('mouseenter', () => {
    form.style.borderColor = 'darkgreen';
});

button.addEventListener('mouseleave', () => {
    form.style.borderColor = '#fff'; // or original color
});