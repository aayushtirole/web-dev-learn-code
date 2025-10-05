// Definition:
// event.preventDefault() kisi element ke default behavior ko rokta hai.
// e.g., form submit hone par page reload hota hai, link click hone par navigate hota hai.

// Step 1: Form aur link select karte hain
const form = document.getElementById("myForm");
const link = document.getElementById("myLink");

// Step 2: Form submit event handle karte hain
form.addEventListener("submit", function(event) {
  // Default behavior: page reload
  // Prevent karte hain
  event.preventDefault();

  const name = document.getElementById("name").value;
  console.log("Form submitted but page not reloaded!");
  console.log("Entered Name:", name);
  alert("Form submission prevented using preventDefault()");
});

// Step 3: Link click event handle karte hain
link.addEventListener("click", function(event) {
  // Link normally Google par le jata
  // Ab prevent kar rahe hain
  event.preventDefault();

  alert("Navigation prevented! You stayed on the same page.");
});
