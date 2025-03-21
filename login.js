document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let appId = "ID" + Math.floor(100000 + Math.random() * 900000); 
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let data = { appId, name, email, password };

    fetch("https://script.google.com/macros/s/AKfycbzBwjSI2jQ5gZ8fHiMM_DO18p-fRJXt9OvPUQvclAzu05r5SVEVnI5cw0kz7EmtVERc/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => response.text()) // Expect text response
    .then(result => {
        document.getElementById("message").textContent = "Registration Successful!";
        document.getElementById("registerForm").reset();
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("message").textContent = "Error registering. Try again.";
    });
});   
