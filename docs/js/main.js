// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Button Click Event
const button = document.querySelector('.button');
if (button) {
    button.addEventListener('click', function() {
        alert('Thank you for your interest in our water services!');
    });
}

// Simple Form Validation
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        const nameInput = document.querySelector('#name');
        const emailInput = document.querySelector('#email');

        if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
            e.preventDefault(); // Prevent form submission
            alert('Please fill in all fields.');
        } else {
            alert('Form submitted successfully!');
        }
    });
}
