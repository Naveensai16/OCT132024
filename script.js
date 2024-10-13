document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === password) {
        // Store username in sessionStorage
        sessionStorage.setItem('username', username);
        // Redirect to home page
        window.location.href = 'home.html';
    } else {
        errorMessage.textContent = 'Username and Password must be the same!';
    }
});