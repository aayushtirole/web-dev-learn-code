// Function -> A block of code designed to perform a particular task
// Function Declaration
function greet() {
    console.log("Hello, World!");
}  
greet(); // Output: Hello, World!

// Function with Parameters
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Output: 8
console.log(add(10, 20)); // Output: 30

// Function Expression  
const multiply = function(x, y) {
    return x * y;
}   
console.log(multiply(4, 5)); // Output: 20
console.log(multiply(7, 6)); // Output: 42

// Arrow Function
const subtract = (m, n) => m - n;
console.log(subtract(10, 4)); // Output: 6
console.log(subtract(20, 5)); // Output: 15

// Function with Default Parameters
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}
console.log(power(3)); // Output: 9 (3^2)
console.log(power(2, 3)); // Output: 8 (2^3)
console.log(power(4, 4)); // Output: 256 (4^4)
console.log(power(5)); // Output: 25 (5^2)  

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("This function runs immediately!");
})(); // Output: This function runs immediately!


// Function as First-Class Citizens
function operate(operation, x, y) {
    return operation(x, y);
}
console.log(operate(add, 5, 3)); // Output: 8
console.log(operate(multiply, 4, 5)); // Output: 20



// Nested Functions
function outerFunction(a, b) {
    function innerFunction(x, y) {
        return x + y;
    }
    return innerFunction(a, b);
}   
console.log(outerFunction(10, 15)); // Output: 25

// Recursion
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}   

console.log(factorial(5)); // Output: 120 (5!)


// Function Hoisting
hoistedFunction(); // Output: This function is hoisted!
function hoistedFunction() {
    console.log("This function is hoisted!");
}   
// Note: Function expressions and arrow functions are not hoisted   
// console.log(notHoistedFunction()); // Error: notHoistedFunction is not defined

const notHoistedFunction = function() {
    console.log("This function is not hoisted!");
}
notHoistedFunction(); // Output: This function is not hoisted!

// Rest Parameters

function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumAll(1, 2, 3));   
// Output: 6

console.log(sumAll(5, 10, 15, 20));   
// Output: 50   

// Callback Functions
function fetchData(callback) {
    setTimeout(() => {
        const data = "Sample Data";
        callback(data);
    }, 1000);
}   
fetchData((data) => {
    console.log("Received:", data);
}       
);
// Output (after 1 second): Received: Sample Data

// Function Returning Functions
function makeMultiplier(factor) {
    return function(x) {
        return x * factor;
    }

}

const double = makeMultiplier(2);
console.log(double(5)); // Output: 10   

const triple = makeMultiplier(3);
console.log(triple(5)); // Output: 15












