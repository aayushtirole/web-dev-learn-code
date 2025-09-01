// =============================
// 🔹 OPTIONAL CHAINING & COMPUTED PROPERTIES
// =============================

// Example: User profile system

// 1) Ek object banate hain jo user ka data store karega
let user = {
  name: "Aayush",
  address: {
    city: "Indore",
    pincode: 452001
  },
  contact: {
    email: "aayush@example.com"
  },
  greet: function() {
    return "Hello, " + this.name;
  }
};

// =============================
// 🔹 OPTIONAL CHAINING (?.)
// =============================

// Normally agar koi property exist na ho aur hum usse access karne ki koshish karein,
// to JavaScript error throw karta hai.
// Optional chaining se hum safe tarike se nested properties ya functions access kar sakte hain.

console.log(user.address.city);      // ✅ "Indore" (exists)
console.log(user.job?.title);        // ✅ undefined (safe, no error, kyunki job exist hi nahi hai)
console.log(user.contact?.email);    // ✅ "aayush@example.com"
console.log(user.contact?.phone);    // ✅ undefined (kyunki phone property nahi hai)

console.log(user.greet?.());         // ✅ "Hello, Aayush" (function call safe way me)
console.log(user.sayHi?.());         // ✅ undefined (kyunki sayHi function exist nahi karta)

// Agar optional chaining nahi use karte to upar ke 2 cases error dete 🚫


// =============================
// 🔹 COMPUTED PROPERTIES ([ ])
// =============================

// Kabhi kabhi hume key ka naam directly nahi pata hota,
// ya hume variable/expression ke basis par object me key create karni hoti hai.
// Wahi kaam computed properties karte hain.

let dynamicKey = "hobby";    // maan lo user ka hobby key dynamically add karna hai
let infoType = "status";     // ek aur dynamic key

let userProfile = {
  name: "aayush",
  age: 22,
  [dynamicKey]: "Cricket",   // 🔹 key ban gayi "hobby"
  [infoType]: "Active",      // 🔹 key ban gayi "status"
  ["likes" + "Count"]: 100   // 🔹 expression => key ban gayi "likesCount"
};

console.log(userProfile.hobby);       // ✅ "Cricket"
console.log(userProfile.status);      // ✅ "Active"
console.log(userProfile.likesCount);  // ✅ 100


// =============================
// 🔹 COMBINING BOTH
// =============================

// Ab dono concepts ko ek sath use karte hain.
// Scenario: hum dynamic key se user ka data nikalna chahte hain aur safely optional chaining se check karna chahte hain.

let keyToCheck = "address";

console.log(user?.[keyToCheck]?.city); 
// ✅ "Indore"
// Explanation: user hai ✅, uske andar address hai ✅, aur address me city hai ✅
// Isliye safely value mil gayi.

// Agar keyToCheck = "job" hota:
keyToCheck = "job";
console.log(user?.[keyToCheck]?.title); 
// ✅ undefined (safe, error nahi aaya)
// Kyunki "job" object exist hi nahi karta.


// =============================
// ✅ FINAL CONCLUSION
// =============================
// 1) Optional Chaining (?.) → nested properties/functions ko safely access karne ke liye.
// 2) Computed Properties ([ ]) → object ke keys ko dynamically generate ya access karne ke liye.
// 3) Dono ko combine karke hum real-world cases (like user profile system) easily handle kar sakte hain.
