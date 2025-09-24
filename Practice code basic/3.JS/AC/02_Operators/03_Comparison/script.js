// Comparison Operators in JavaScript

let a = 10;
let b = 5;
let c = "10";

// ---------------- BASIC COMPARISONS ----------------

console.log(a == c);   // == (equal to) → values equal hain ya nahi (10 == "10") → true
console.log(a === c);  // === (strict equal) → value + type dono same hone chahiye (10 === "10") → false

console.log(a != b);   // != (not equal) → values alag hain ya nahi (10 != 5) → true
console.log(a !== c);  // !== (strict not equal) → value ya type same nahi hai (10 !== "10") → true

// ---------------- GREATER / LESS THAN ----------------

console.log(a > b);    // > (greater than) → a b se bada hai kya (10 > 5) → true
console.log(a < b);    // < (less than) → a b se chhota hai kya (10 < 5) → false

console.log(a >= 10);  // >= (greater than or equal) → a 10 se bada ya equal hai kya (10 >= 10) → true
console.log(b <= 5);   // <= (less than or equal) → b 5 se chhota ya equal hai kya (5 <= 5) → true
