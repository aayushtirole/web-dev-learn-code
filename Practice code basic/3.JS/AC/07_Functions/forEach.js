// forEach loop
// arr.forEach(callbackFunction);

// CalLback function :- here,it is a function to execute for each element in the array
// a Callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// It takes three arguments
// 1. currentValue :- The current element being processed in the array
// 2. index (optional) :- The index of the current element being processed in the array
// 3. array (optional) :- The array that forEach() is being applied to

// syntax of for each 
    
        array.forEach(function(element, index, array) {
  // har element ke liye chalne wala code
});


// Example of forEach loop

 

   let arr = ["hello","world", "this", "is", "forEach"];
    arr.forEach(function printValue(val){ //each value at each index is passed to the function
        console.log(val); // Output: 1 2 3 4 5
    });

    // Using arrow function
    arr.forEach((val) => {
        console.log(val.toUpperCase()); // Output: HELLO WORLD THIS IS FOREACH); 
    });

