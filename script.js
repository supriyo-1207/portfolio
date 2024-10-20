document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const roleElement = document.getElementById('role');
  const roles = ['Software Developer', 'Full Stack Developer'];
  let currentIndex = 0;

  function changeRole() {
      // Fade out the current role
      roleElement.classList.add('fade-out');
      
      // Wait for the fade-out animation to complete
      setTimeout(() => {
          currentIndex = (currentIndex + 1) % roles.length;
          roleElement.textContent = roles[currentIndex];
          
          // Prepare for fade-in
          roleElement.classList.remove('fade-out');
          roleElement.classList.add('fade-in');
          
          // Remove fade-in class after animation ends
          setTimeout(() => {
              roleElement.classList.remove('fade-in');
          }, 1000); // Match this duration with the CSS transition time
      }, 1000); // Match this duration with the CSS transition time
  }

  // Change role every 3 seconds (3000 milliseconds)
  setInterval(changeRole, 3000);
});

