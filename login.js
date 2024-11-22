document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Store session data
        sessionStorage.setItem('currentUser', JSON.stringify({
            email: user.email,
            name: user.name
        }));
        
        // Redirect to main page
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password');
    }
});
