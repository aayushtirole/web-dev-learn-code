//keydown event tab fire hota hai jab koi key press karte hi dabai jaati hai.Ye event pehle trigger hota hai — matlab key dabate hi JavaScript code chal jaata hai.
// keyup event tab fire hota hai jab user koi key chhodta hai (release karta hai).

//1.Pehle keydown trigger hoga jab aap key dabate ho.
//2.Fir jab aap key chhodte ho, keyup trigger hota hai.

// keyup event fire hota hai jab key chhodi jaati hai
window.addEventListener("keyup", function(event) {

  // show which key was released
  document.getElementById("msg").textContent = 
    `Key Up: ${event.key} released`;

  // Example: agar Escape chhoda gaya toh alert do
  if (event.key === "Escape") {
    alert("You released Escape key!");
  }
});
