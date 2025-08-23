// data types in JS

// 1. primitive data types
// aisi saari values jinko copy krne par real copy mil jaaye 
// number, string, boolean, undefined, null, symbol, bigint



// 2.reference data types
// aisi saari values jinko copy krne par real copy nhi milti but reference milega parent ka 
//  array[], object{}, function()


// example
// primitive data type example
let num1 = 6; // primitive data type
let num2 = num1; // copy of value
num1++;
console.log(num1); // 7 
console.log(num2); // 6
// num1 and num2 alag alag memory main store hain
// num1 and num2 independent hain
// num1 and num2 ka apna apna alag alag copy hain
// num1 and num2 ka apas main koi relation nhi hain

// reference data type example

let a = [1,2,3]; // reference data type
let b = a; // copy of reference
b.pop(); // remove last element from array
console.log(a); // [1,2]
