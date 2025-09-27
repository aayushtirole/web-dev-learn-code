// First Class Functions 

// Functions ko values ki tarah treat kar skte hain 
 function abcd(val){
          val();
 }

 abcd(function(){
     console.log("hello");
})

// // explaination of code 

// ek function banaya jiska naam 'abcd' hai
//  ye ek parameter 'val' leta hai
// function abcd(val) {
      // yaha par 'val' ko function ki tarah call kar rahe hain
//     // matlab jo bhi function argument ke रूप में milega, usse execute karega
//     val();
// }

// // ab 'abcd' function ko call kiya
// // isme ek anonymous function (nameless function) argument ke रूप में diya
// abcd(function() {
//     // jab 'val()' chalega to ye console.log execute hoga
//     console.log("hello");
// }); 


// high order functions 

//hof wo function hota hain jo ki return kare function yaa fir accept kare ek function apne parameter main 

// Takes another function as an argument (callback function).
// Returns a function as its result.

// ✅ Higher Order Function Example

// Step 1: Define a function "greetUser" which accepts another function as a parameter (callback).
// function greetUser(callback) {  
//     console.log("Hello ");    // This line executes first → prints greeting message.

//     callback();  // Here we call the function that was passed as an argument (the "callback").
// }

// // Step 2: Call greetUser and pass another function as an argument.
// // The function we are passing here is called a "callback function".
// greetUser(function() {
//     console.log("aayush");  // This runs when "callback()" is executed inside greetUser.
// });
