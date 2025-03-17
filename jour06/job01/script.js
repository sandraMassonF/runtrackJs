document.addEventListener("DOMContentLoaded", function () {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Récupération des formulaires
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    // Ajouter les écouteurs sur les champs pour la validation asynchrone
    if (loginForm) {
        document.getElementById("loginEmail").addEventListener("input", validateLoginEmail);
        document.getElementById("loginPassword").addEventListener("input", validateLoginPassword);
    }

    if (registerForm) {
        document.getElementById("lastName").addEventListener("input", validateNotEmpty);
        document.getElementById("firstName").addEventListener("input", validateNotEmpty);
        document.getElementById("registerEmail").addEventListener("input", validateRegisterEmail);
        document.getElementById("registerPassword").addEventListener("input", validateRegisterPassword);
        document.getElementById("address").addEventListener("input", validateNotEmpty);
        document.getElementById("postalCode").addEventListener("input", validatePostalCode);
    }

    // --- Fonctions de validation pour chaque champ ---

    function validateLoginEmail(e) {
        const email = e.target.value;
        const errorElem = document.getElementById("loginEmailError");
        if (!emailRegex.test(email)) {
            errorElem.textContent = "Veuillez entrer un email valide.";
        } else {
            errorElem.textContent = "";
        }
    }

    function validateLoginPassword(e) {
        const password = e.target.value;
        const errorElem = document.getElementById("loginPasswordError");
        if (password.length < 8) {
            errorElem.textContent = "Le mot de passe doit contenir au moins 8 caractères.";
        } else {
            errorElem.textContent = "";
        }
    }

    function validateNotEmpty(e) {
        const value = e.target.value;
        const errorElem = document.getElementById(e.target.id + "Error");
        if (value.trim() === "") {
            errorElem.textContent = "Ce champ est requis.";
        } else {
            errorElem.textContent = "";
        }
    }

    function validateRegisterEmail(e) {
        const email = e.target.value;
        const errorElem = document.getElementById("registerEmailError");
        if (!emailRegex.test(email)) {
            errorElem.textContent = "Veuillez entrer un email valide.";
        } else {
            errorElem.textContent = "";
        }
    }

    function validateRegisterPassword(e) {
        const password = e.target.value;
        const errorElem = document.getElementById("registerPasswordError");
        if (password.length < 8) {
            errorElem.textContent = "Le mot de passe doit contenir au moins 8 caractères.";
        } else {
            errorElem.textContent = "";
        }
    }

    function validatePostalCode(e) {
        const postalCode = e.target.value;
        const errorElem = document.getElementById("postalCodeError");
        if (!/^\d{5}$/.test(postalCode)) {
            errorElem.textContent = "Le code postal doit contenir 5 chiffres.";
        } else {
            errorElem.textContent = "";
        }
    }

});
