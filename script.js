// smooth scroll for navigation links 
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
// Role Animation (Fade-in and Fade-out) 
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

// Project Filtering and Skills Filtering
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove active class from all buttons
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.dataset.filter.toLowerCase();

            // Handle Project Filtering
            document.querySelectorAll("#projects-grid > div").forEach(card => {
                if (filter === "all" || card.dataset.category.toLowerCase() === filter) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });

            // Handle Skills Filtering
            document.querySelectorAll("#skills-grid .col-md-3").forEach(card => {
                if (filter === "all" || card.dataset.category.toLowerCase() === filter) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});

// Contact Form Animations and Validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#contact form');
    const inputs = form.querySelectorAll('input, textarea');
    
    // Add floating label effect
    inputs.forEach(input => {
        const placeholder = input.placeholder;
        input.placeholder = '';
        
        const label = document.createElement('label');
        label.textContent = placeholder;
        input.parentNode.insertBefore(label, input.nextSibling);
        
        input.addEventListener('focus', () => {
            label.classList.add('active');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                label.classList.remove('active');
            }
        });
    });
    
    // Form submission handling
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual form submission)
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
            submitBtn.classList.add('submit-success');
            
            // Reset form
            setTimeout(() => {
                form.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.classList.remove('submit-success');
            }, 3000);
        }, 1500);
    });
});


