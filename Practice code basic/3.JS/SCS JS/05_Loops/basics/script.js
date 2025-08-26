// Loops

// repeat karne ko loop kahte hain 
// repeat something until a certain condition is met

// for loop , while loop , do while loop , forin loop , forof loop,foreach loop

// kaha se jaana hain -> kaha tak jaana hain -> kaise jaana hain >>>>> for loop

// kaha se jaana hain -> kab rukhna hain -> kaise jaana hain >>>>> while loop

// explain

//  1 - 40 >>>> for loop
//  20 - 50 >>> for loop
// hello naa aa jaaye >>>> while loop
// jab tak user ne exit na kar diya >>> while loop
// laal color ka ped >>>> while loop 

// .............................................

// // for loop 

// for(startTransition; endTransition; increment/decrement){
//     // code block
// }

// example 1 - 100

// for (let i = 1; i<101; i++){
//     console.log(i);
// }

// .......................................................................

// while loop

// SYNTAX 

// start
// while(end){
// code block
// change
// } 

// example 

let i = 1;

while (i < 32){
    // code 
    console.log(i);
    i++; 
}

// ...............................................................

// do while

do {
    // code block to be executed
    // this code runs at least once
} while (condition/end); // The loop continues as long as this condition is true

// example 

let number = 1; // starting point

do {
    console.log(number); // print the current number
    number++; // increase number by 1
} while (number <= 5); // loop runs until number is less than or equal to 5

// .............................................

// for...in Loop

// 👉 Used for iterating over the keys (property names) of an object.
// It gives you the property name (key), not the value directly.

for (let key in object) {
    // key → property name
    // object[key] → property value
}

// example 
// Example: Iterate over object properties using for...in

const person = {
    name: "Aayush",
    age: 21,
    profession: "Student"
};

for (let key in person) { 
    // 'key' takes each property name one by one: "name", "age", "profession"
    
    console.log("Property (key):", key);  // prints the property name
    console.log("Value:", person[key]);   // access value using object[key]
}

// Flow:

// First iteration → key = "name", value = "Aayush"

// Second iteration → key = "age", value = 21

// Third iteration → key = "profession", value = "Student"

// ...........................................................................

// for...of Loop

// 👉 Used for iterating over iterable objects like arrays, strings, maps, sets.It gives you the value directly.

for (let element of iterable) {
    // element → each value in the iterable
}

// example 

// Example: Iterate over array values using for...of

const fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {  
    // 'fruit' takes each value one by one: "Apple", "Banana", "Mango"
    
    console.log("Fruit:", fruit); 
}

// Flow:

// First iteration → fruit = "Apple"

// Second iteration → fruit = "Banana"

// Third iteration → fruit = "Mango"

// forEach() Method

// A built-in array method that executes a callback function for each array element.
// Unlike for or for...of, it’s not a loop statement but an array function.

array.forEach(function(element, index, array) {
    // element → current item
    // index → position of item
    // array → the entire array
});

// example

// Example: Iterate over array using forEach

const numbers = [10, 20, 30];

numbers.forEach(function(num, index, arr) {
    console.log("Index:", index);   // prints position → 0, 1, 2
    console.log("Value:", num);     // prints 10, 20, 30
    console.log("Full array:", arr); // shows the entire array each time
});

//  Flow:

// Callback runs once for each element in the array.

// At index 0 → num = 10

// At index 1 → num = 20

// At index 2 → num = 30

// .........................................................................

// break and continue

// break :- The break statement is used to exit (terminate) a loop immediately when a certain condition is met.
// After breaking, the control moves to the first line of code after the loop.

for(initialization; condition; update) {
    // some code

    if(condition_to_stop) {
        break; // loop ends here immediately
    }

    // some more code
}

// example for break

// Example: Find the first number greater than 5 in a loop
for (let i = 1; i <= 10; i++) {
    console.log("Checking number:", i);

    if (i > 5) {
        console.log("Found a number greater than 5:", i);
        break; // exit loop immediately
    }
}

console.log("Loop ended because of break.");


// continue :- The continue statement is used to skip the current iteration and move to the next iteration of the loop.
// The loop itself does not end, only that one iteration is skipped.

for(initialization; condition; update) {
    // some code

    if(condition_to_skip) {
        continue; // skip this iteration
    }

    // this code will NOT run when continue is hit
}

// example of continue 

// Example: Print numbers from 1 to 10, but skip number 5
for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        console.log("Skipping number:", i);
        continue; // skip the rest of this iteration
    }

    console.log("Number is:", i);
}

console.log("Loop finished with continue.");

// .........................................