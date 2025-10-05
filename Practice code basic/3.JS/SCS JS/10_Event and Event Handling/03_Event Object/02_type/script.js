// Definition:
// event.type batata hai kis type ka event hua (click, keydown, mouseover etc.)

// Step 1: Elements select kar lete hain
const btn = document.getElementById("clickBtn");
const input = document.getElementById("textBox");

// Step 2: Button par "click" event listener
btn.addEventListener("click", function(event) {
  console.log("Event type:", event.type); // Output: click
  alert("This is a " + event.type + " event!");
});

// Step 3: Input box par "keydown" event listener
input.addEventListener("keydown", function(event) {
  console.log("Event type:", event.type); // Output: keydown
  console.log("You pressed key:", event.key);
});
