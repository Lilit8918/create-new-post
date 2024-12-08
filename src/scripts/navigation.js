document.addEventListener('DOMContentLoaded', () => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
  
    if (!isAuthenticated && !window.location.href.includes('index.html') && !window.location.href.includes('registration.html')) {
      alert('You must be logged in to view this page!');
      window.location.href = 'index.html';
    }
  
    if (isAuthenticated && (window.location.href.includes('index.html') || window.location.href.includes('registration.html'))) {
      window.location.href = 'home.html';
    }
  });
  