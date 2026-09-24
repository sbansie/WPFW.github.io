const contactForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const formStatus = document.querySelector("#form-status");

function showFieldError(field, errorElementId, message) {
    const errorElement = document.getElementById(errorElementId);
    errorElement.textContent = message;
    field.setAttribute("aria-invalid", "true");
}

function clearFieldError(field, errorElementId) {
    const errorElement = document.getElementById(errorElementId);
    errorElement.textContent = "";
    field.removeAttribute("aria-invalid");
}

function validateName() {
    const isValid = nameInput.value.trim().length >= 2;

    if (!isValid) {
        showFieldError(nameInput, "name-error", "Vul een naam van minimaal 2 tekens in.");
        return false;
    }

    clearFieldError(nameInput, "name-error");
    return true;
}

function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(emailInput.value.trim());

    if (!isValid) {
        showFieldError(emailInput, "email-error", "Vul een geldig e-mailadres in.");
        return false;
    }

    clearFieldError(emailInput, "email-error");
    return true;
}

function validateMessage() {
    const isValid = messageInput.value.trim().length >= 10;

    if (!isValid) {
        showFieldError(messageInput, "message-error", "Schrijf een bericht van minimaal 10 tekens.");
        return false;
    }

    clearFieldError(messageInput, "message-error");
    return true;
}

function validateForm() {
    const nameValid = validateName();
    const emailValid = validateEmail();
    const messageValid = validateMessage();
    return nameValid && emailValid && messageValid;
}

function resetValidation() {
    clearFieldError(nameInput, "name-error");
    clearFieldError(emailInput, "email-error");
    clearFieldError(messageInput, "message-error");
}

function handleSubmit(event) {
    event.preventDefault();
    formStatus.textContent = "";

    if (!validateForm()) {
        formStatus.textContent = "Controleer de velden hierboven.";
        return;
    }

    formStatus.textContent = "Bedankt! Je formulier is geldig en klaar om te worden verzonden.";
    contactForm.reset();
    resetValidation();
}

contactForm.addEventListener("submit", handleSubmit);
nameInput.addEventListener("blur", validateName);
emailInput.addEventListener("blur", validateEmail);
messageInput.addEventListener("blur", validateMessage);
