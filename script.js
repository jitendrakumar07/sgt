// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1200, // animation duration
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  // Back to top button functionality
  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      document.getElementById("back-to-top").style.display = "block";
    } else {
      document.getElementById("back-to-top").style.display = "none";
    }
  };
  
  document.getElementById("back-to-top").onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  document.querySelector('.contact-form').addEventListener('submit', function(event) {
    let isValid = true;
  
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
  
    if (!email.includes('@') || email.trim() === '') {
      alert('Please enter a valid email address.');
      isValid = false;
    }
  
    if (message.trim() === '') {
      alert('Please enter your message.');
      isValid = false;
    }
  
    if (!isValid) {
      event.preventDefault(); // Prevent form submission if invalid
    }
  });
  