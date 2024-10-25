// Function to redirect to the homepage
function redirectToHome() {
  window.location.href = 'index2.html';
}




document.addEventListener('DOMContentLoaded', function() {
  // Simulate loading process for 4 seconds, then redirect
  setTimeout(() => {
    window.location.href = 'index2.html';
  }, 1500); 
});