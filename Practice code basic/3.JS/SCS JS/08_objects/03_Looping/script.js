//Objcet Destructuring


// Basic Syntax

// Syntax
const { key1, key2 } = objectName;

// key1 and key2 must match property names inside objectName



// Example 1: Basic Destructuring

let person = {
    name: "Aayush",
    age: 21,
    city: "Indore"
};

// Destructuring
const { name, age } = person;

console.log(name); // Output: Aayush
console.log(age);  // Output: 21




// Example 2: Rename Variables while Destructuring


let student = {
    id: 101,
    fullName: "Neeraj",
    grade: "A"
};

// Renaming while destructuring
const { fullName: studentName, grade: studentGrade } = student;

console.log(studentName);  // Output: Neeraj
console.log(studentGrade); // Output: A




// Example 3: Default Values


let user = {
    username: "Ashok"
};

// If property doesn’t exist → use default value
const { username, email = "not_provided@example.com" } = user;

console.log(username); // Output: Ashok
console.log(email);    // Output: not_provided@example.com


// Example 4: Nested Object Destructuring


let employee = {
    id: 202,
    details: {
        firstName: "Resham",
        lastName: "Kumar",
        role: "Developer"
    }
};

// Nested destructuring
const { details: { firstName, role } } = employee;

console.log(firstName); // Output: Resham
console.log(role);      // Output: Developer

// Example 5: Destructuring in Function Parameters


let product = {
    name: "Laptop",
    price: 45000,
    brand: "Dell"
};

// Function with destructuring
function showProduct({ name, price }) {
    console.log(`Product: ${name}, Price: ${price}`);
}

showProduct(product); 
// Output: Product: Laptop, Price: 45000



/** 
 * 
1. `{ key } = object` → extracts properties.
2. `{ key: newName }` → rename variables.
3. `{ key = defaultValue }` → default values.
4. Nested destructuring works for objects inside objects.
5. Can be used directly in **function parameters**.

*/

