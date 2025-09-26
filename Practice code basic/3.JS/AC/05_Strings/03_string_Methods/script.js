// String Methods

// Uppercase

let str = "hello world";
let upperStr = str.toUpperCase();
console.log(upperStr); // Output: "HELLO WORLD"

// Lowercase
let newStr="HELLO WORLD";
let lowerStr = upperStr.toLowerCase();
console.log(lowerStr); // Output: "hello world

// Trim (Remove whitespace from both ends -> Start and End)

let spacedStr = "   Hello World   ";
let trimmedStr = spacedStr.trim();
console.log(trimmedStr); // Output: "Hello World"

//Slice (Extract a section of a string)

let slicedStr = str.slice(0, 5);
console.log(slicedStr); // Output: "hello"

//concat (Join two or more strings)

let str1 = "Hello";
let str2 = "World";
let concatenatedStr = str1.concat(" ", str2);
console.log(concatenatedStr); // Output: "Hello World"

//replace (Replace a specified value with another value in a string)

let replacedStr = str.replace("world", "JavaScript");
console.log(replacedStr); // Output: "Hello JavaScript"
// Note: The replace method only replaces the first occurrence. To replace all occurrences, use a regular expression with the global flag.

let multiStr = "Hello world, welcome to the world of JavaScript";
let replacedAllStr = multiStr.replace(/world/g, "universe");
console.log(replacedAllStr); // Output: "Hello universe, welcome to the universe of JavaScript"

//charAt (Returns the character at a specified index)

let charAtIndex = str.charAt(0);
console.log(charAtIndex); // Output: "H"

//indexOf (Returns the index of the first occurrence of a specified value)

let indexOfW = str.indexOf("w");
console.log(indexOfW); // Output: 6 
// If the value is not found, it returns -1

//split (Splits a string into an array of substrings)

let csvStr = "apple,banana,cherry"; 
let fruitsArray = csvStr.split(",");
console.log(fruitsArray); // Output: ["apple", "banana", "cherry"]

//includes (Checks if a string contains a specified value)              
let includesHello = str.includes("Hello");
console.log(includesHello); // Output: true





// Note: String methods do not change the original string. They return a new string or value.