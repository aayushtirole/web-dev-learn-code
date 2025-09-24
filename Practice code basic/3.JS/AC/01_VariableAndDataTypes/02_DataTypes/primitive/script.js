// 1. Number
let num = 42;             // integer
let pi = 3.14;            // floating-point
console.log(typeof num);  // "number"

// 2. String
let str = "Hello, JS!";
console.log(typeof str);  // "string"

// 3. Boolean
let isActive = true;
console.log(typeof isActive);  // "boolean"

// 4. Undefined
let x;  // no value assigned
console.log(typeof x);  // "undefined"

// 5. Null
let empty = null;
console.log(typeof empty);  // "object" (this is a known JS quirk)

// 6. Symbol (unique identifiers)
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(typeof sym1);       // "symbol"
console.log(sym1 === sym2);     // false (each symbol is unique)

// 7. BigInt (for large integers beyond Number limit)
let big = 1234567890123456789012345678901234567890n;
console.log(typeof big);  // "bigint"
