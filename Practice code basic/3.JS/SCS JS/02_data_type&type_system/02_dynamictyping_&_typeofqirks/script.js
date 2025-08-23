// Dynamic Typing & typeof Quirks in JavaScript
// Dynamic Typing -> variable can hold any type of data at different times
// js main static typing nhi hain but dynamic typing hain jiska mtlb hain ki data ko change kr skte hain kyonki js dynamically type hai

// example of dynamic typing
let data = 42; // initially a number
console.log(typeof data); // Output: number
data = "Hello, World!"; // now a string
console.log(typeof data); // Output: string
data = true; // now a boolean
console.log(typeof data); // Output: boolean    


// typeof quirks (e.g., typeif null === "object")
// values ke type ko check krne ke liye hum typeof operator use karte hain

                                                                                                                   
console.log(typeof 42); // Output: "number"
console.log(typeof "Hello"); // Output: "string"
console.log(typeof null); // Output: "object" (quirk)
console.log(typeof undefined); // Output: "undefined"         

