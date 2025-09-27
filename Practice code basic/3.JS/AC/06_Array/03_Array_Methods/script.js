//Array Methods 

let fruits = ["apple", "banana", "cherry"];     
console.log("Original array: ", fruits); // Output: ["apple", "banana", "cherry"]

// push() - adds an element to the end of the array
fruits.push("date");
console.log("After push: ", fruits); // Output: ["apple", "banana", "cherry", "date"]

// pop() - removes the last element from the array
let lastFruit = fruits.pop();
console.log("After pop: ", fruits);     // Output: ["apple", "banana", "cherry"]


// shift() - removes the first element from the array
let firstFruit = fruits.shift();
console.log("After shift: ", fruits); // Output: ["banana", "cherry"]


// unshift() - adds an element to the beginning of the array
fruits.unshift("avocado");
console.log("After unshift: ", fruits); // Output: ["avocado", "banana", "cherry"]

// indexOf() - returns the index of the first occurrence of a specified value
let index = fruits.indexOf("banana");
console.log("Index of banana: ", index); // Output: 1