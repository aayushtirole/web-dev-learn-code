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

// splice() - adds/removes elements from the array
// Removing 1 element at index 1
fruits.splice(1, 1);
console.log("After splice (removal): ", fruits); // Output: ["avocado", "cherry"]

// Adding "blueberry" at index 1    
fruits.splice(1, 0, "blueberry");
console.log("After splice (addition): ", fruits); // Output: ["avocado", "blueberry", "cherry"]

// slice() - returns a shallow copy of a portion of an array into a new array object
let citrus = fruits.slice(0, 2);
console.log("Sliced array: ", citrus); // Output: ["avocado", "blueberry"]
// Note: The original array remains unchanged



