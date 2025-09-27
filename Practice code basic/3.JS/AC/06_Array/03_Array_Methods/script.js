//Array Methods 

let fruits = ["apple", "banana", "cherry"];     
console.log("Original array: ", fruits); // Output: ["apple", "banana", "cherry"]

// push() - adds an element to the end of the array
fruits.push("date");
console.log("After push: ", fruits); // Output: ["apple", "banana", "cherry", "date"]

// pop() - removes the last element from the array
let lastFruit = fruits.pop();
console.log("After pop: ", fruits);     // Output: ["apple", "banana", "cherry"]
console.log("Popped element: ", lastFruit); // Output: "date"

// shift() - removes the first element from the array
let firstFruit = fruits.shift();
console.log("After shift: ", fruits); // Output: ["banana", "cherry"]

