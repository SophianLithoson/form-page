const form = document.querySelector("form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const passwordErrorText = document.querySelector(".password-error-text");


function validatePassword() {
    if (password.value != confirmPassword.value) {
        passwordErrorText.textContent = "Passwords do not match";
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
    }
    else {
        passwordErrorText.textContent = "";
        password.style.borderColor = "inherit";
        confirmPassword.style.borderColor = "inherit";
    }
}

password.addEventListener("input", (event) => {
    validatePassword();
});

confirmPassword.addEventListener("input", (event) => {
    validatePassword();
});