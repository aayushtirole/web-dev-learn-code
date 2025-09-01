// Looping 
// for-in, object.keys, object.entries

// ------------------- Object for Example -------------------
let person = {
    name: "Aayush",
    age: 21,
    city: "Indore"
};

// ----------------------------------------------------------
// 1) for...in loop
// ----------------------------------------------------------

// 🔹 for...in ka use object ke har ek property (key) ko loop karne ke liye hota hai.
// 🔹 isme hume key milti hai, aur uskey key ke through value access karte hain.

for (let key in person) {
    console.log(key + " : " + person[key]);
}

// Output:
// name : Aayush
// age : 21
// city : Indore

// Explanation:
// - yaha `key` me har bar ek property ka naam aayega (name, age, city).
// - phir hum uskey corresponding value ko `person[key]` se nikal rahe hain.


// ----------------------------------------------------------
// 2) Object.keys()
// ----------------------------------------------------------

// 🔹 Object.keys(obj) ek array return karta hai jisme sirf keys hoti hain.
// Example: ["name", "age", "city"]

let keys = Object.keys(person);
console.log(keys); 
// Output: [ 'name', 'age', 'city' ]

// Ab is array ko hum forEach se loop kar sakte hain
keys.forEach(function(key) {
    console.log(key + " : " + person[key]);
});

// Explanation:
// - pehle keys nikali array ke form me.
// - phir har ek key se uski value ko access kiya person[key] use karke.


// ----------------------------------------------------------
// 3) Object.entries()
// ----------------------------------------------------------

// 🔹 Object.entries(obj) ek array of arrays return karta hai.
// Har ek element ka form hota hai: [key, value]
// Example: [ ['name', 'Aayush'], ['age', 21], ['city', 'Indore'] ]

let entries = Object.entries(person);
console.log(entries);  
// Output: [ ['name', 'Aayush'], ['age', 21], ['city', 'Indore'] ]

// Ab hum is array ko loop karenge
entries.forEach(function([key, value]) {
    console.log(key + " : " + value);
});

// Explanation:
// - entries array ka har element do cheezon ka pair hai [key, value].
// - humne destructuring `[key, value]` ka use kiya, direct dono values mil gayi loop ke andar.


// ----------------------------------------------------------
// 4) Object.values()  (Extra Example)
// ----------------------------------------------------------

// 🔹 Object.values(obj) ek array return karta hai jisme sirf values hoti hain.
// Example: ["Aayush", 21, "Indore"]

let values = Object.values(person);
console.log(values); 
// Output: [ 'Aayush', 21, 'Indore' ]

// values ko loop karke print karte hain
values.forEach(function(value) {
    console.log(value);
});

// Output:
// Aayush
// 21
// Indore

// Explanation:
// - sirf values milti hain, keys kaam me nahi aati.
// - agar bas values chahiye ho tab use karte hain.
