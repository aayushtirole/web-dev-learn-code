// IIFE (Immediately Invoked Function Expression)

// IIFE = Function that executes immediately and helps keep your code clean & safe

// Basic Syntax

(function() {
})(); 

// How it works?

// 1.We wrap the function inside parentheses (...) → this makes it a function expression (not a normal function declaration).

// 2.Then we add () at the end → this immediately calls the function.

// Example with Explanation

// IIFE Example
(function() {
    let message = "Hello from IIFE!";
    console.log(message);
})();  

// console.log(message); ❌ Error (because 'message' is private inside IIFE)

// IIFE with Parameters

(function(name) {
    console.log("Hello " + name + "!");
})("Aayush");

// ...........................................................................

// Hoisting difference between declaration and expression




// 👉 Hoisting means **JavaScript moves function and variable declarations to the top of their scope before execution**.
// But **functions behave differently** depending on whether they are **declarations** or **expressions**.

// 1. Function Declaration


// Function Declaration
function greet() {
    console.log("Hello from declaration!");
}

greet(); // ✅ Works even if called before declaration


// Hoisting Behavior

// * Entire function is hoisted** (name + body).
// * You can call the function **before it is defined.

// Example:


sayHello(); // ✅ Works due to hoisting

function sayHello() {
    console.log("Hi, I am hoisted!");
}


//  2. Function Expression


// Function Expression
const greet = function() {
    console.log("Hello from expression!");
};

greet(); // Works only after this line


// Hoisting Behavior

// * Only the **variable declaration** is hoisted, **not the function definition**.
// * The variable is set to `undefined` at the top.
// * You **cannot call** the function before the line it is defined.

// Example:


sayHello(); // ❌ Error: sayHello is not a function

var sayHello = function() {
    console.log("Hi, I am NOT hoisted properly!");
};




// Summary

// Declaration → fully hoisted (can call before defining).
// Expression → partially hoisted (variable is hoisted as `undefined`, but function isn’t available until assignment).


