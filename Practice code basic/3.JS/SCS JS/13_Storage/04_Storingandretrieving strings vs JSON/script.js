//Storing & Retrieving JSON

//To store complex data (objects or arrays), use JSON.stringify() and JSON.parse().

// Object to store
let user = { name: "Aayush", age: 21 };

// ✅ Store as JSON string
localStorage.setItem("user", JSON.stringify(user));

// ✅ Retrieve & convert back to object
let data = JSON.parse(localStorage.getItem("user"));
console.log(data.name); // Output: Aayush

