// target :-  jispe event hua 

// Definition:
// event.target batata hai kis element par event trigger hua.

// Step 1: Saare button elements select kar lete hain
const buttons = document.querySelectorAll(".btn");

// Step 2: Har button par event listener lagate hain
buttons.forEach((button) => {
  button.addEventListener("click", function(event) {
    // event.target → jis button par click hua wo element milta hai
    console.log("You clicked on:", event.target);
    
    // event.target.textContent → button ke andar ka text
    console.log("Button text is:", event.target.textContent);

    // Color change karte hain just to show action
    event.target.style.backgroundColor = "lightgreen";
  });
});
