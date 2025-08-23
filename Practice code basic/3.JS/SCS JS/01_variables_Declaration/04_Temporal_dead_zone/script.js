// Temporal Dead Zone (TDZ) 


//  tdz - Utna area jitna mein js ko pata to hian ki variable exits karta hain par wo aapko value nahi de skta hain 

// tdz - let and const ke sath hota hain but var ke sath nahi hota hain


console.log(a);

let a = 10; 



// TDZ is the time between entering a scope and declaring a variable with let or const.
// You cannot access the variable before its declaration.

// Uncommenting the next line will throw a ReferenceError:

// console.log(a); // Error: Cannot access 'a' before initialization

// let a = 10;  'a' is declared here, TDZ ends

// console.log(a);  // Output: 10

// With var, there is no TDZ. It is hoisted and initialized as undefined.
// console.log(b); // undefined
// var b = 20;
// console.log(b); // 20

// Summary:
// - let/const: TDZ exists, cannot access before declaration
// - var: No TDZ, but value is undefined before assignment












