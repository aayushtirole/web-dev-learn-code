// FUNCTIONS

// what is function 

// agar code likh diya toh wo direct chal jaata hain 

// syntax

// function syntax

// Function Declaration Syntax

function functionName(parameters) {
  // code block (statements)
  return value;   // (optional)
}

// Example:
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Aayush"));  
// Output: Hello, Aayush!


// ................................................................................................................

//  🔹 Function Expression Syntax

let functionName = function(parameters) {
  // code block
  return value;   // (optional)
};

// Example:
let add = function(a, b) {
  return a + b;
}

console.log(add(5, 7));  // calling function 
// Output: 12

// ................................................................................................................


// 🔹 Arrow Function Syntax (Modern ES6+)

let functionName = (parameters) => {
  // code block
  return value;
};

Example:
let multiply = (x, y) => {
  return x * y;
};

console.log(multiply(4, 6));  
// Output: 24

// ................................................................................................................


// 🔹 Anonymous Function (No name)

(function() {
  console.log("I am anonymous!");
})();