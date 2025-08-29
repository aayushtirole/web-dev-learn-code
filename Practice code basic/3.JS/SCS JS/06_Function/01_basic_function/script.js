// FUNCTIONS

// what is function 

// agar code likh diya toh wo direct chal jaata hain 

// syntax

// function syntax

// Function Declaration Syntax

// function functionName(parameters) {
//   // code block (statements)
//   return value;   // (optional)
// }

// // Example:
// function greet(name) {
//   return "Hello, " + name + "!";
// }

// console.log(greet("Aayush"));  
// // Output: Hello, Aayush!


// // ................................................................................................................

// //  🔹 Function Expression Syntax

// let functionName = function(parameters) {
//   // code block
//   return value;   // (optional)
// };

// // Example:
// let add = function(a, b) {
//   return a + b;
// }

// console.log(add(5, 7));  // calling function 
// // Output: 12

// // ................................................................................................................


// // 🔹 Arrow Function Syntax (Modern ES6+) / fat arrow function 

// let functionName = (parameters) => {
//   // code block
//   return value;
// };

// Example:
// let multiply = (x, y) => {
//   return x * y;
// };

// console.log(multiply(4, 6));  
// // Output: 24

// ................................................................................................................


// parameter and argument 

// function dance(v1) {
//   console.log(`${v1} naach rha hain`);
// }

// dance("ghoda");
// dance("hiran");
// dance("aayu");
// dance("ghadha");

// function add(v1, v2){
//   console.log(v1 + v2);
// }

// add(1,2);  // 1 and 2 are the arguments 
// add(1,25);
// add(11,23);

// ................................................................................................................

// Default,rest,and spread parameters 

// Default Parameter

// Default parameters allow you to set a default value for a function parameter if no argument is passed or if the argument is undefined.

// function add(v1=0,  v2=0){

//   console.log(v1 + v2);
// }
// add(); 

// ...........................................................................

// Rest Parameters

// 👉 Rest parameters allow a function to accept any number of arguments as an array.
// It is written with ... (three dots) in front of the last parameter.

// jab argument kae saare ho toh humein utne hi parameter banaane padenge isase bachne ke liye hum rest ka use krte hain... 

// Agar ... function ke parameter space main lage toh wo rest operator  hain agar vo arrays and objects main lage to wo spread operator hain 

// function abcd(...val){
//   console.log(val);
// }

// abcd(1,2,3,4,5,6,7,8,9,10);



// ...........................................................................

// 3. Spread Operator

// 👉 Spread (...) is used to expand an array/object into individual elements.
// It is kind of the opposite of rest parameters.

// // Example 1: Using Spread with Arrays

// let numbers = [1, 2, 3];

// // Spread breaks the array into individual values
// console.log(...numbers);  // Output: 1 2 3

// // Example: Math.max needs individual numbers, not an array

// console.log(Math.max(...numbers)); // Output: 3

// // Example 2: Combining Arrays

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// // Spread merges arrays
// let combined = [...arr1, ...arr2];
// console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// // Example 3: Copying Arrays

// let original = [10, 20, 30];
// let copy = [...original]; // Creates a shallow copy

// copy.push(40);
// console.log(original); // Output: [10, 20, 30]
// console.log(copy);     // Output: [10, 20, 30, 40]

// // Example 4: Using Spread with Objects

// let obj1 = { a: 1, b: 2 };
// let obj2 = { c: 3, d: 4 };

// // Merge objects using spread
// let merged = { ...obj1, ...obj2 };
// console.log(merged); // Output: { a: 1, b: 2, c: 3, d: 4 }

// RETURN

// Return means jaha se aaye ho wahi daal denge 

// function abcd(){
//   return 12;
// }

// let val = abcd();
// console.log(val);


// Ek function define kar rahe hain jiska naam 'abcd' hai
// Abhi tak function run nahi hua, sirf define hua hai
// function abcd() {
//   // Jab bhi function call hoga to yeh '12' value return karega
//   return 12;
// }

// // Yaha par function ko call kar rahe hain abcd()
// // Matlab function execute hoga aur return kiya hua value (12) wapas milega
// // Us value ko 'val' variable me store kar rahe hain
// let val = abcd();

// // Ab console.log ke through 'val' ki value print karenge
// // val ke andar 12 hai, to output hoga: 12
// console.log(val);

