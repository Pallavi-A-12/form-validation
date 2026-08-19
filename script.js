
//  Login / SignUp Switching

const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

loginTab.addEventListener("click", () => {

    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");

    loginTab.classList.add("active");
    signupTab.classList.remove("active");

});

signupTab.addEventListener("click", () => {

    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");

    signupTab.classList.add("active");
    loginTab.classList.remove("active");

});

// Email Validation Function

function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}

// LOGIN VALIDATION

// Login inputs
const loginEmail =
    document.getElementById("loginEmail");

const loginPsd =
    document.getElementById("loginPsd");


// Login error messages
const loginEmailError =
    document.getElementById("loginEmailError");

const loginPsdError =
    document.getElementById("loginPsdError");


// Login form submit
loginForm.addEventListener("submit", (event) => {

    // Stop page reload
    event.preventDefault();

    let isValid = true;


    // Clear previous errors
    loginEmailError.textContent = "";
    loginPsdError.textContent = "";

    // Email Validation

    if (loginEmail.value.trim() === "") {

        loginEmailError.textContent =
            "Email is required.";

        isValid = false;

    }
    else if (!isValidEmail(loginEmail.value.trim())) {

        loginEmailError.textContent =
            "Please enter a valid email address.";

        isValid = false;

    }

    // Password Validation

    if (loginPsd.value.trim() === "") {

        loginPsdError.textContent =
            "Password is required.";

        isValid = false;

    }
    else if (loginPsd.value.length < 8) {

        loginPsdError.textContent =
            "Password must be at least 8 characters.";

        isValid = false;

    }

    // Login Success

    if (isValid) {

        alert("Successfully Login!");

        loginForm.reset();

    }

});

// SIGNUP VALIDATION

// Signup inputs
const signupName =
    document.getElementById("signupName");

const signupEmail =
    document.getElementById("signupEmail");

const signupPsd =
    document.getElementById("signupPsd");

const confirmPsd =
    document.getElementById("confirmPsd");


// Signup error messages
const signupNameError =
    document.getElementById("signupNameError");

const signupEmailError =
    document.getElementById("signupEmailError");

const signupPsdError =
    document.getElementById("signupPsdError");

const confirmPsdError =
    document.getElementById("confirmPsdError");


// Signup form submit
signupForm.addEventListener("submit", (event) => {

    // Stop page reload
    event.preventDefault();

    let isValid = true;


    // Clear previous errors
    signupNameError.textContent = "";
    signupEmailError.textContent = "";
    signupPsdError.textContent = "";
    confirmPsdError.textContent = "";

    // Full Name Validation

    if (signupName.value.trim() === "") {

        signupNameError.textContent =
            "Full name is required.";

        isValid = false;

    }

    // Email Validation

    if (signupEmail.value.trim() === "") {

        signupEmailError.textContent =
            "Email is required.";

        isValid = false;

    }
    else if (!isValidEmail(signupEmail.value.trim())) {

        signupEmailError.textContent =
            "Please enter a valid email address.";

        isValid = false;

    }

    // Password Validation

    if (signupPsd.value === "") {

        signupPsdError.textContent =
            "Password is required.";

        isValid = false;

    }
    else if (signupPsd.value.length < 8) {

        signupPsdError.textContent =
            "Password must be at least 8 characters.";

        isValid = false;

    }

    // Confirm Password Validation

    if (confirmPsd.value === "") {

        confirmPsdError.textContent =
            "Please confirm your password.";

        isValid = false;

    }
    else if (confirmPsd.value !== signupPsd.value) {

        confirmPsdError.textContent =
            "Passwords do not match.";

        isValid = false;

    }

    // Signup Success

    if (isValid) {

        alert("Successfully Account Created!");

        signupForm.reset();

    }

});