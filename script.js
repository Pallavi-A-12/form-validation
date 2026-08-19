
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

// Email Validation

function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}

// Login Validation

const loginEmail =
    document.getElementById("loginEmail");

const loginPsd = document.getElementById("loginPsd");

const loginEmailError = document.getElementById("loginEmailError");

const loginPsdError = document.getElementById("loginPsdError");

loginForm.addEventListener("submit", (event) => {

    event.preventDefault();

    let isValid = true;

    loginEmailError.textContent = "";
    loginPsdError.textContent = "";


    if (loginEmail.value.trim() === "") {

        loginEmailError.textContent =
            "Email is required.";

        isValid = false;

    } else if (!isValidEmail(loginEmail.value.trim())) {

        loginEmailError.textContent =
            "Please enter a valid email address.";

        isValid = false;
    }


    if (loginPsd.value.trim() === "") {

        loginPsdError.textContent =
            "Password is required.";

        isValid = false;

    } else if (loginPsd.value.length < 8) {

        loginPsdError.textContent =
            "Password must be at least 8 characters.";

        isValid = false;
    }


    if (isValid) {

        alert("Login validation successful!");

    }

});

// Signup Validation

const signupName = document.getElementById("signupName");
const signupEmail = document.getElementById("signupEmail");
const signupPsd = document.getElementById("signupPsd");
const confirmPsd = document.getElementById("confirmPsd");

const signupNameError = document.getElementById("signupNameError");
const signupEmailError = document.getElementById("signupEmailError");
const signupPsdError = document.getElementById("signupPsdError");
const confirmPsdError = document.getElementById("confirmPsdError");

signupForm.addEventListener("submit", (event) => {

    event.preventDefault();

    let isValid = true;

    // Clear previous errors

    signupNameError.textContent = "";
    signupEmailError.textContent = "";
    signupPsdError.textContent = "";
    confirmPsdError.textContent = "";

    // Validate name

    if (signupName.value.trim() === "") {

        signupNameError.textContent =
            "Full name is required.";

        isValid = false;
    }

    // Validate email

    if (signupEmail.value.trim() === "") {

        signupEmailError.textContent =
            "Email is required.";

        isValid = false;

    } else if (!isValidEmail(signupEmail.value.trim())) {

        signupEmailError.textContent =
            "Please enter a valid email address.";

        isValid = false;
    }

    // Validate password

    if (signupPsd.value === "") {

        signupPsdError.textContent =
            "Password is required.";

        isValid = false;

    } else if (signupPsd.value.length < 8) {

        signupPsdError.textContent =
            "Password must be at least 8 characters.";

        isValid = false;
    }

    // Validate confirm password

    if (confirmPsd.value === "") {

        confirmPsdError.textContent =
            "Please confirm your password.";

        isValid = false;

    } else if (confirmPsd.value !== signupPsd.value) {

        confirmPsdError.textContent =
            "Passwords do not match.";

        isValid = false;
    }

    // Successful validation

    if (isValid) {

        alert("Account created successfully!");

        signupForm.reset();
    }

});