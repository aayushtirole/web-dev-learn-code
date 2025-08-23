// Type coercion ( == vs ===)

// type coercion -> automatic or implicit conversion of values from one data type to another
// type coercion => automatic conversion of one data type to another

// == aur === ka use karke type coercion ko samjha rahe hain

console.log('5' == 5);    // true, kyunki '5' (string) ko JS number 5 main convert kar deta hai (type coercion hoti hai)
console.log('5' === 5);   // false, kyunki yahan type check bhi hota hai (string vs number), isliye dono alag hain

// - operator ke case main string ko number main convert kar deta hai
console.log('10' - 2);    // 8, '10' ko number 10 main convert kar diya

// + operator ke case main agar ek operand string hai to doosre ko bhi string bana deta hai
console.log('10' + 2);    // '102', 2 ko string bana diya aur concatenate kar diya

// true ko number main convert karne par 1 hota hai
console.log(true + 1);    // 2, true ko 1 bana diya

// false ko number main convert karne par 0 hota hai
console.log(false == 0);  // true, kyunki false ko 0 bana diya aur 0 == 0 ho gaya


// Truthy and Falsy values in JavaScript

// Falsy values: false, 0, "", null, undefined, NaN, document.all
// Truthy values: koi bhi value jo falsy na ho

// Example: Checking truthy and falsy values

// "hello" is a non-empty string, which is a truthy value in JavaScript.
// So, the code inside this if block will run.
if ("hello") {
    console.log("This is truthy");
}       
// Output: This is truthy

// 0 is a falsy value in JavaScript.
// So, the code inside this if block will NOT run.
if (0) {
    console.log("This is truthy");
}   
// Output: (nothing, because 0 is falsy)

// More examples:

// Empty string "" is falsy
if ("") {
    console.log("Empty string is truthy");
} else {
    console.log("Empty string is falsy");
}
// Output: Empty string is falsy

// null is falsy
if (null) {
    console.log("null is truthy");
} else {
    console.log("null is falsy");
}
// Output: null is falsy

// undefined is falsy
if (undefined) {
    console.log("undefined is truthy");
} else {
    console.log("undefined is falsy");
}
// Output: undefined is falsy

// NaN is falsy
if (NaN) {
    console.log("NaN is truthy");
} else {
    console.log("NaN is falsy");
}
// Output: NaN is falsy

// Any non-zero number is truthy
if (42) {
    console.log("42 is truthy");
}
// Output: 42 is truthy

// An empty array [] is truthy
if ([]) {
    console.log("Empty array is truthy");
}
// Output: Empty array is truthy

// An empty object {} is also truthy
if ({}) {
    console.log("Empty object is truthy");
}
// Output: Empty object is truthy

                                                