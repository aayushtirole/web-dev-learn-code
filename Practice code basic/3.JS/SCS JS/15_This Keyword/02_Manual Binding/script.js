// 🔹 call, apply, bind
// Function ko call karte waqt hum manually set kar sakte hain
// ki uski this ka value kya hoga (Manual Binding)

let obj = {
    name: "Aayush",
    age: 26,
};

function abcd(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

// ✅ call() example
// 1. Function ko immediately call karta hai
// 2. Pehla argument → this ki value
// 3. Baaki arguments normal form mein
abcd.call(obj, "Hello"); 
// Output: "Hello, Aayush"
// Yahan 'this' = obj

// ✅ apply() example
// sirf do hi argument pass kr skt ho pahla
// 1. Function ko immediately call karta hai
// 2. Pehla argument (object) → this ki value
// 3. Baaki arguments array form mein pass hote hain
abcd.apply(obj, ["Hi"]); 
// Output: "Hi, Aayush"

// ✅ bind() example
// 1. Function ko **immediately call nahi karta**
// 2. Naya function return karta hai jisme this permanently fix ho jaata hai
let boundFn = abcd.bind(obj);
boundFn("Hey"); 
// Output: "Hey, Aayush"

// 🔹 Note:
// abcd.call(obj) → function 'abcd' pe call lagta hai
// hamesha function ko hi call lagta hai, object pe nahi
// call/apply/bind se hum decide karte hain ki function ke andar 'this' kisko point kare
