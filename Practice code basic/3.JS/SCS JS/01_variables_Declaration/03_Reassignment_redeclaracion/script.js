// Variable Reassignment and Redeclaration in JavaScript

// 1. Using var
var a = 10; // Declaration and initialization
a = 20;     // Reassignment is allowed
var a = 30; // Redeclaration is also allowed
console.log(a); // Output: 30

// 2. Using let
let b = 40; // Declaration and initialization
b = 50;     // Reassignment is allowed
// let b = 60; // Redeclaration is NOT allowed (Uncommenting this line will cause an error)
console.log(b); // Output: 50

// 3. Using const
const c = 70; // Declaration and initialization
// c = 80;     // Reassignment is NOT allowed (Uncommenting this line will cause an error)
// const c = 90; // Redeclaration is NOT allowed (Uncommenting this line will cause an error)
console.log(c); // Output: 70

/*
Note:
- var: Reassignment and redeclaration both allowed.
- let: Only reassignment allowed, redeclaration not allowed in the same scope.
- const: Neither reassignment nor redeclaration allowed.
*/