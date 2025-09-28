// map array method
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// It takes three arguments
// 1. currentValue :- The current element being processed in the array
// 2. index (optional) :- The index of the current element being processed in the array
// 3. array (optional) :- The array that map() is being applied to

// syntax of map

        // let newArray = array.map(function(element, index, array) {
  // har element ke liye chalne wala code
// });

// Example of map method

let arr = [1, 2, 3, 4, 5];

let squaredArr = arr.map(function(num) { //each value at each index is passed to the function
    return num * num; // squaring each element
});
console.log(squaredArr); // Output: [1, 4, 9, 16, 25]

// Creating new array

let doubledArr = arr.map((num) => num * 2); // Using arrow function to double each element
console.log(doubledArr); // Output: [2, 4, 6, 8, 10]    