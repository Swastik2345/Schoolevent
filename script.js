// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If target is another page, just follow the link
      window.location.href = this.getAttribute('href');
    }
  });
});

// Simple alert on form submission
const form = document.querySelector('form[name="club-registration"]');
if(form) {
  form.addEventListener('submit', function(e) {
    alert('Thank you for registering! Your submission has been received.');
  });
}

// Optional: Highlight current page in navigation
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  if(link.href === window.location.href) {
    link.style.fontWeight = 'bold';
    link.style.textDecoration = 'underline';
  }
});