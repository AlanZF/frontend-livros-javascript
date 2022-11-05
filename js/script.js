onChangeEmail = () => {
    toggleButtonsDisable()
    toggleEmailErrors()
}

onChangePassword = () => {
    toggleButtonsDisable()
    togglePasswordErrors()
}

toggleEmailErrors = () => {
    const email = form.email.value
    form.emailRequiredError.style.display = email ? "none" : "block"
    form.emailInvalidError.style.display = validatedEmail(email) ? "none" : "block"
}

togglePasswordErrors = () => {
    const password = form.password.value
    form.passwordInvalidError.style.display = password ? "none" : "block"
}

toggleButtonsDisable = () => {
    const validEmail = isValidEmail()
    form.recoverPassword.disabled = !validEmail

    const validPassword = isValidPassword()
    form.loginButton.disabled = !validEmail || !validPassword
}

isValidPassword = () => {
    const password = form.password.value
    return password ? true : false
    // if(!password) {
    //     return false;
    // }
    // return true;
}

isValidEmail = () => {
    const email = form.email.value
    return email ? validatedEmail(email) : false
    // if(!email) {
    //     return false;
    // } 
    // return validatedEmail(email)
}

const form = {
    email: document.getElementById("input-email"),
    password: document.getElementById("input-password"),
    emailRequiredError: document.getElementById("email-required-error"),
    emailInvalidError: document.getElementById("email-invalid-error"),
    passwordInvalidError: document.getElementById("password-invalid-error"),
    recoverPassword: document.getElementById("recover-password"),
    loginButton: document.getElementById("login-button")
}