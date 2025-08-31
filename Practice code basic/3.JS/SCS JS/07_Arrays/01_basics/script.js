// Array 

// > Array = Collection of multiple values in a single variable.

// > Indexing starts from 0.
// > You can add, change, remove, or access values easily.

// Creating an array using square brackets []
let arr = [element1, element2, element3];

// OR using new Array() constructor
let arr2 = new Array(element1, element2, element3);

// example1

// Creating an array of numbers
let numbers = [10, 20, 30, 40, 50];  

// Accessing elements of the array using index (index starts from 0)
console.log(numbers[0]);  // Output: 10 (first element)
console.log(numbers[2]);  // Output: 30 (third element)


// array modificaion 

// Creating an array 'num' with 5 elements
let num = [10, 20, 30, 40, 50];  

// Updating the element at index 2 (3rd element)
// Indexing starts from 0 → num[0]=10, num[1]=20, num[2]=30, ...
num[2] = 12;  // Now the array becomes [10, 20, 12, 40, 50]

// Printing the element at index 0 (1st element of array)
console.log(num[0]);  // Output: 10

// Printing the element at index 2 (3rd element of array, which we updated)
console.log(num[2]);  // Output: 12
