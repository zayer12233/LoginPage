function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simulated admin login credentials
    const adminUsername = "zayer";
    const adminPassword = "008883";

    if (username === adminUsername && password === adminPassword) {
        // Success - redirect to admin dashboard (replace with your admin page)
        alert("Login successful!");
        window.location= "INDEX.html.html";
    } else {
        // Error message
        errorMessage.textContent = "Invalid username or password.";
        errorMessage.style.display = "block";
    }

    // Prevent form submission
    return false;
}
