document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('contact-form');
    const nameInput = document.querySelector('[data-testid="test-contact-name"]');
    const emailInput = document.querySelector('[data-testid="test-contact-email"]');
    const subjectInput = document.querySelector('[data-testid="test-contact-subject"]');
    const messageInput = document.querySelector('[data-testid="test-contact-message"]');
    
    const nameError = document.querySelector('[data-testid="test-contact-error-name"]');
    const emailError = document.querySelector('[data-testid="test-contact-error-email"]');
    const subjectError = document.querySelector('[data-testid="test-contact-error-subject"]');
    const messageError = document.querySelector('[data-testid="test-contact-error-message"]');

    const successMessage = document.querySelector('[data-testid="test-contact-success"]');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let isValid = true;
        nameError.style.display = 'none';
        emailError.style.display = 'none';
        subjectError.style.display = 'none';
        messageError.style.display = 'none';
        successMessage.style.display = 'none';

        nameInput.classList.remove('invalid');
        emailInput.classList.remove('invalid');
        subjectInput.classList.remove('invalid');
        messageInput.classList.remove('invalid');

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Full name is required.';
            nameError.style.display = 'block';
            nameInput.classList.add('invalid');
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required.';
            emailError.style.display = 'block';
            emailInput.classList.add('invalid');
            isValid = false;
        } else if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            emailError.style.display = 'block';
            emailInput.classList.add('invalid');
            isValid = false;
        }

        if (subjectInput.value.trim() === '') {
            subjectError.textContent = 'Subject is required.';
            subjectError.style.display = 'block';
            subjectInput.classList.add('invalid');
            isValid = false;
        }

        if (messageInput.value.trim().length < 10) {
            messageError.textContent = 'Message must be at least 10 characters long.';
            messageError.style.display = 'block';
            messageInput.classList.add('invalid');
            isValid = false;
        }

        if (isValid) {
            successMessage.textContent = 'Thank you! Your message has been sent successfully.';
            successMessage.style.display = 'block';
            form.style.display = 'none'; 
        }
    });
});