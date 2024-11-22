document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Validate passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Get existing users or initialize empty array
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if email already exists
    if (users.some(user => user.email === email)) {
        alert('Email already registered! Please login.');
        window.location.href = 'login.html';
        return;
    }
    
    // Add new user
    users.push({
        fullName,
        email,
        password
    });
    
    // Save updated users array
    localStorage.setItem('users', JSON.stringify(users));
    
    // Show success message and redirect to login
    alert('Registration successful! Please login.');
    window.location.href = 'login.html';
});
