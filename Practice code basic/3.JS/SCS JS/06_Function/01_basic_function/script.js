// FUNCTIONS

// what is function 

// agar code likh diya toh wo direct chal jaata hain 

// syntax

// function syntax

// Function Declaration Syntax

// function functionName(parameters) {
//   // code block (statements)
//   return value;   // (optional)
// }

// // Example:
// function greet(name) {
//   return "Hello, " + name + "!";
// }

// console.log(greet("Aayush"));  
// // Output: Hello, Aayush!


// // ................................................................................................................

// //  🔹 Function Expression Syntax

// let functionName = function(parameters) {
//   // code block
//   return value;   // (optional)
// };

// // Example:
// let add = function(a, b) {
//   return a + b;
// }

// console.log(add(5, 7));  // calling function 
// // Output: 12

// // ................................................................................................................


// // 🔹 Arrow Function Syntax (Modern ES6+) / fat arrow function 

// let functionName = (parameters) => {
//   // code block
//   return value;
// };

// Example:
// let multiply = (x, y) => {
//   return x * y;
// };

// console.log(multiply(4, 6));  
// // Output: 24

// ................................................................................................................


// parameter and argument 

// function dance(v1) {
//   console.log(`${v1} naach rha hain`);
// }

// dance("ghoda");
// dance("hiran");
// dance("bhaish");
// dance("ghadha");

// function add(v1, v2){
//   console.log(v1 + v2);
// }

// add(1,2);  // 1 and 2 are the arguments 
// add(1,25);
// add(11,23);

// ................................................................................................................

// Default,rest,and spread parameters 

// Default Parameter

// Default parameters allow you to set a default value for a function parameter if no argument is passed or if the argument is undefined.

// function add(v1=0,  v2=0){

//   console.log(v1 + v2);
// }
// add(); 

// ...........................................................................

// Rest Parameters

// 👉 Rest parameters allow a function to accept any number of arguments as an array.
// It is written with ... (three dots) in front of the last parameter.

// jab argument kae saare ho toh humein utne hi parameter banaane padenge isase bachne ke liye hum rest ka use krte hain... 

// Agar ... function ke parameter space main lage toh wo rest operator  hain agar vo arrays and objects main lage to wo spread operator hain 

// function abcd(...val){
//   console.log(val);
// }

// abcd(1,2,3,4,5,6,7,8,9,10);



// ...........................................................................




