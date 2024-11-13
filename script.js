// Helper function to show error
function showError(input, message) {
    const errorText = input.nextElementSibling;
    errorText.style.display = 'block';
    errorText.textContent = message;
}

// Helper function to hide error
function hideError(input) {
    const errorText = input.nextElementSibling;
    errorText.style.display = 'none';
    errorText.textContent = '';
}

// Validate Name
function validateName() {
    const fullName = document.getElementById('fullName');
    if (fullName.value.length < 5) {
        showError(fullName, "Name must be at least 5 characters long.");
        return false;
    }
    hideError(fullName);
    return true;
}

// Validate Email
function validateEmail() {
    const email = document.getElementById('email');
    if (!email.value.includes('@')) {
        showError(email, "Please enter a valid email address with '@'.");
        return false;
    }
    hideError(email);
    return true;
}

// Validate Phone Number
function validatePhone() {
    const phone = document.getElementById('phone');
    if (phone.value === "123456789" || phone.value.length !== 10 || isNaN(phone.value)) {
        showError(phone, "Please enter a valid 10-digit phone number.");
        return false;
    }
    hideError(phone);
    return true;
}

// Validate Password
function validatePassword() {
    const password = document.getElementById('password');
    const fullName = document.getElementById('fullName').value;
    if (password.value.length < 8 || password.value.toLowerCase() === "password" || password.value.toLowerCase() === fullName.toLowerCase()) {
        showError(password, "Password must be at least 8 characters and should not be 'password' or your name.");
        return false;
    }
    hideError(password);
    return true;
}

// Validate Confirm Password
function validateConfirmPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword');
    if (confirmPassword.value !== password) {
        showError(confirmPassword, "Passwords do not match.");
        return false;
    }
    hideError(confirmPassword);
    return true;
}

// Main Form Validation on Submit
function validateForm(event) {
    event.preventDefault(); // Prevent form from submitting if invalid

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
        alert("Form submitted successfully!");
        // Here you can add code to process form submission, like sending data to a server
    } else {
        alert("Please fix the errors in the form before submitting.");
    }
}
