const form = document.getElementById('headerfrom');
const submitButton = document.querySelector('.submitheaderfrom');
submitButton.addEventListener('mouseover', () => {
    const isFormValid = Array.from(form.elements).every(input => input.validity.valid);
    submitButton.style.cursor = isFormValid ? 'pointer' : 'not-allowed';
});