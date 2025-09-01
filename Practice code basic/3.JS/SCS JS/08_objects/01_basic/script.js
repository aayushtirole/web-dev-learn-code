// objects 

// ------------------- Object in JavaScript -------------------

// ✅ Basic Syntax:
// let objectName = {
//     key1: value1,     // property (key-value pair)
//     key2: value2,
//     key3: function() {   // method (function inside object)
//         // some code
//     }
// };

// ------------------------------------------------------------

// ------------------- Object in JavaScript -------------------

// ✅ Create an object using literal syntax
let person = {
    name: "Aayush",       // string property
    age: 21,              // number property
    isStudent: true,      // boolean property
    address: {            // nested object
        city: "Indore",
        state: "Madhya Pradesh"
    },
};

// ------------------- Accessing Object Properties -------------------

// 1) Using Dot Notation (most common & simple)
console.log(person.name);      // Output: Aayush
console.log(person.age);       // Output: 21

// 2) Using Bracket Notation (useful when key is dynamic or not a valid identifier)
console.log(person["isStudent"]);  // Output: true

// Example with dynamic property
let prop = "age";
console.log(person[prop]);     // Output: 21

// 3) Accessing Nested Object
console.log(person.address.city);   // Output: Indore
console.log(person.address.state);  // Output: Madhya Pradesh

// 4) Adding a New Property
person.email = "aayush@example.com";
console.log(person.email);  // Output: aayush@example.com

// 5) Updating an Existing Property
person.age = 22;
console.log(person.age);    // Output: 22

// 6) Deleting a Property
delete person.isStudent;
console.log(person.isStudent);  // Output: undefined

// 7) Accessing All Keys, Values, Entries
console.log(Object.keys(person));   // Output: [ 'name', 'age', 'address', 'greet', 'email' ]
console.log(Object.values(person)); // Output: [ 'Aayush', 22, { city: 'Indore', state: 'Madhya Pradesh' }, [Function: greet], 'aayush@example.com' ]
console.log(Object.entries(person));// Output: [ [ 'name', 'Aayush' ], [ 'age', 22 ], ... ]




