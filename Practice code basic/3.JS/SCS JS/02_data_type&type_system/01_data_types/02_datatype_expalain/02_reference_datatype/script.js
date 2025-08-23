// reference data types in JavaScript
// aisi saari values jinko copy krne par real copy nhi milti but reference milega parent ka 
//  array[], object{}, function()

// 1. Array
let arr1 = [1,2,3]; // array        
let arr2 = arr1; // copy of reference
arr2.pop(3); // add element to array       
console.log(arr1); // Output: [1,2]

// 2. Object
let obj1 = {name: "aayush", age: 21}; // object     
let obj2 = obj1; // copy of reference
obj2.age = 22; // modify property of object
console.log(obj1); // Output: {name: "aayush", age:

// 3. Function
function greet() { // function      
    console.log("Hello, World!");
}   
let greet2 = greet; // copy of reference
greet2(); // call the function
// Output: Hello, World!
greet(); // call the function
// Output: Hello, World!