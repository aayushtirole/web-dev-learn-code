console.log("Hoisting impact per variable type:");

// Example with var
// 'var' declarations are hoisted and initialized with 'undefined'
console.log("var before declaration:", a); // Output: undefined (because 'a' is hoisted but not yet assigned)
var a = 10;
console.log("var after declaration:", a); // Output: 10 (now 'a' has been assigned)

// Example with let
// 'let' declarations are hoisted but NOT initialized, so accessing before declaration throws ReferenceError
try {
    console.log("let before declaration:", b); // Throws ReferenceError
} catch (e) {
    // Output: let before declaration: Error - Cannot access 'b' before initialization
    console.log("let before declaration: Error -", e.message);
}
let b = 20;
console.log("let after declaration:", b); // Output: 20

// Example with const
// 'const' behaves like 'let' in terms of hoisting, but must also be initialized at declaration
try {
    console.log("const before declaration:", c); // Throws ReferenceError
} catch (e) {
    // Output: const before declaration: Error - Cannot access 'c' before initialization
    console.log("const before declaration: Error -", e.message);
}
const c = 30;
console.log("const after declaration:", c); // Output: 30