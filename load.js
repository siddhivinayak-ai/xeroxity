document.addEventListener('DOMContentLoaded', function() {
  // Simulate loading process for 4 seconds, then redirect
  setTimeout(() => {
    window.location.href = 'first.html';
  }, 4000); // 4 seconds loading before redirect
});
