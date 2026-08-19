
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