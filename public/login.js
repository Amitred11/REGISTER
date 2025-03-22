document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let appId = "ID" + Math.floor(100000 + Math.random() * 900000); 
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let agree = document.getElementById("agree").checked;

    if (!agree) {
        document.getElementById("message").textContent = "You must agree to the terms!";
        return;
    }

    let data = { appId, name, email, password };

    fetch("https://script.google.com/macros/s/AKfycbzBwjSI2jQ5gZ8fHiMM_DO18p-fRJXt9OvPUQvclAzu05r5SVEVnI5cw0kz7EmtVERc/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(() => {
        document.getElementById("message").textContent = "";
        document.getElementById("registerForm").reset();
        openSuccess();
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("message").textContent = "Error registering. Try again.";
    });
});

// Terms & Conditions Modal (Overlay)
// Open the modal
function openTerms() {
    document.getElementById("termsModal").classList.remove("hidden");
}

// Close the modal
function closeTerms() {
    document.getElementById("termsModal").classList.add("hidden");
}

// Agree function (closes modal and can trigger further actions)
function agreeTerms() {
    closeTerms();
}


// Success Modal (Overlay)
function openSuccess() {
    document.getElementById("successModal").classList.remove("hidden");
}
function closeSuccess() {
    document.getElementById("successModal").classList.add("hidden");
}
