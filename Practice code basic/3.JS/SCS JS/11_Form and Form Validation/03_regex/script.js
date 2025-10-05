// Select the form, input field, and message paragraph
const form = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const message = document.getElementById('message');

// Define the regex for a valid email
// ^                 -> start of the string
// [a-zA-Z0-9._%+-]+ -> username part (letters, numbers, dots, underscores, %,+,- allowed)
// @                 -> must have @ symbol
// [a-zA-Z0-9.-]+    -> domain name (letters, numbers, dots, hyphens)
// \.                -> literal dot
// [a-zA-Z]{2,}      -> domain extension (at least 2 letters, like com, org, in)
// $                 -> end of string
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Listen for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on submit

    const emailValue = emailInput.value.trim(); // Get the value and remove spaces

    // Check if the email matches the regex
    if(emailRegex.test(emailValue)) {
        message.textContent = "✅ Valid Email!";
        message.style.color = "green";
    } else {
        message.textContent = "❌ Invalid Email!";
        message.style.color = "red";
    }
});
