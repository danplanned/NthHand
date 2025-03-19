document.getElementById('signup-form').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const passwordWarning = document.getElementById('password-warning');
    
    if (password !== confirmPassword) {
        passwordWarning.style.display = 'block';
        event.preventDefault();
    } else {
        passwordWarning.style.display = 'none';
    }
});
