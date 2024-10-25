      
// Function to handle User form submission
document.getElementById('user-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the default form submissi

  // Validation: Check if all fields are filled
  if (!userName || !userEmail || !userPhone || !userPassword) {
      document.getElementById('error-message').innerText = "Please fill in all fields.";
      return;
  }

  // Redirect to the success page
  window.location.href = 'success.html';
});