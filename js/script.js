// Function to toggle the visibility of the login modal
function toggleLogin() {
    const modal = document.getElementById('loginModal');
    const isHidden = modal.style.display === 'flex';

    // Toggle display and aria-hidden attribute
    modal.style.display = isHidden ? 'none' : 'flex';
    modal.setAttribute('aria-hidden', isHidden ? 'true' : 'false');
}

// Select the contact form and response container
const contactForm = document.getElementById("contactForm");
const formResponse = document.getElementById("formResponse");

// Event listener for form submission
contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && subject && message) {
        // Simulating form submission success
        formResponse.textContent = "Thank you for your message! We'll get back to you shortly.";
        formResponse.style.color = "#00ff00"; // Green color for success message
        contactForm.reset(); // Clear form inputs after submission
    } else {
        formResponse.textContent = "Please fill out all fields.";
        formResponse.style.color = "#ff0000"; // Red color for error message
    }
});
