// JavaScript for additional functionality or interactivity
document.getElementById('login-form').addEventListener('submit', function(event) {
  // Simulating login functionality
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // You can implement your login logic here
  // For example, check credentials, authentication, etc.

  if (email === 'user@example.com' && password === 'password') {
    alert('Login successful! Redirecting to dashboard...');
    // Redirect to dashboard or main page after successful login
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid email or password. Please try again.');
    // Prevent form submission
    event.preventDefault();
  }
});

function forgotPassword() {
  // Perform actions when the "Forgot Password" button is clicked
  // For example, show a message or redirect to a forgot password page
  alert("Forgot Password feature is under construction.");
  // You can also redirect the user to a forgot password page using window.location.href
  // Example: window.location.href = "forgot_password.html";
}