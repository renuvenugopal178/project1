document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting immediately

    let isValid = true;

    const name = document.getElementById('name').value;
    const admissionNumber = document.getElementById('admissionNumber').value;
    const nameError = document.getElementById('nameError');
    const admissionNumberError = document.getElementById('admissionNumberError');

    // Reset error messages
    nameError.style.display = 'none';
    admissionNumberError.style.display = 'none';

    // Name validation: only alphabets
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        nameError.textContent = "Name should only contain alphabets.";
        nameError.style.display = 'block';
        isValid = false;
    }

    // Admission number validation: must be exactly 4 digits
    if (!/^\d{4}$/.test(admissionNumber)) {
        admissionNumberError.textContent = "Admission Number must be exactly 4 digits.";
        admissionNumberError.style.display = 'block';
        isValid = false;
    }

    // Redirect to the department page if validation passes
    if (isValid) {
        window.location.href = 'departments.html'; // Make sure this matches your actual department page
    }
});