const form = document.querySelector("form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const passwordErrorText = document.querySelector(".password-error-text");


password.addEventListener("input", () => {
    validatePassword();
});

confirmPassword.addEventListener("input", () => {
    validatePassword();
});

function validatePassword() {
    console.log("validating");
    
    if (password.value === confirmPassword.value) {
        passwordErrorText.textContent = "";
        password.style.borderColor = "inherit";
        confirmPassword.style.borderColor = "inherit";
    }
    else {
        passwordErrorText.textContent = "*Passwords do not match";
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
    } 
}
