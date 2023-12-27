// Basic JavaScript functionality (not fully functional, for demonstration purposes)
// You can add interactive features, form validations, etc.
document.addEventListener('DOMContentLoaded', function() {
  const redeemButtons = document.querySelectorAll('.redeem-button');
  redeemButtons.forEach(button => {
    button.addEventListener('click', function() {
      alert('Offer redeemed! Enjoy your discount.');
      // Add logic for offer redemption here
    });
  });

  // Add more JavaScript functionalities as needed
});

// JavaScript for form submission (example using console.log, not an actual submission)
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
      const formData = new FormData(contactForm);
      const formDataObject = Object.fromEntries(formData.entries());
      console.log('Form data submitted:', formDataObject);
      // Here you could implement the actual form submission logic (e.g., using AJAX)
      // ... (send form data to the server)
    });
  });