const form = document.getElementById("form");
const email = document.getElementById("email");

function handleSubmit(e) {
    e.preventDefault();
    const emailError = document.getElementById("email-error");

    if (!validateEmail(email.value)) {
        email.classList.add("error");
        emailError.textContent = "Valid email required";
    } else {
        emailError.classList.remove("error");
        emailError.textContent = "";
        const encodedEmail = encodeURIComponent(email.value);
        window.location.href = `success-state.html?email=${encodedEmail}`;
    }
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

form.addEventListener("submit", handleSubmit);