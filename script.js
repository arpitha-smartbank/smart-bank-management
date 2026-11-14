
// =================================
// SMART BANK MANAGEMENT SYSTEM
// JavaScript Main File
// =================================

document.addEventListener("DOMContentLoaded", function () {

    // Signup Form
    const signupForm = document.querySelector("#signupForm");

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const password = document.querySelector("#password").value;
            const confirmPassword = document.querySelector("#confirmPassword").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            alert("Demo Signup Successful!");
        });
    }

    // Login Form
    const loginForm = document.querySelector("#loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Demo Login Successful!");
            window.location.href = "dashboard.html";
        });
    }

    // Contact Form
    const contactForm = document.querySelector("#contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Thank you for contacting Smart Bank!");
            contactForm.reset();
        });
    }

    // Logout Button
    const logoutButton = document.querySelector("#logoutButton");

    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            window.location.href = "login.html";
        });
    }

});
