
## 🔹 Manual Binding

**Manual Binding** ka matlab hai:

> Hum **manually decide karte hain** ki `this` kis object ko point kare.

Iske liye hum use karte hain:

### 1️⃣ `call()`

* Function ko **immediately call** karta hai
* Pehla argument hota hai `this` ki value
* Baaki arguments normal form mein pass karte hain

```js
let user1 = { name: "Aayush" };

function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

greet.call(user1, "Hello"); // Output: "Hello, Aayush"
```

---

### 2️⃣ `apply()`

* `call()` jaisa hi hai
* Bas **arguments array** ke form mein pass karte hain

```js
greet.apply(user1, ["Hi"]); // Output: "Hi, Aayush"
```

---

### 3️⃣ `bind()`

* Function ko **immediately call nahi karta**
* Naya function return karta hai jisme `this` permanently fix ho jaata hai
* Baad mein call kar sakte hain

```js
let greetUser = greet.bind(user1);
greetUser("Hey"); // Output: "Hey, Aayush"
```

---

### 🧠 Quick Notes:

| Method    | Call        | Arguments | Return                         |
| --------- | ----------- | --------- | ------------------------------ |
| `call()`  | Immediately | Normal    | Original function              |
| `apply()` | Immediately | Array     | Original function              |
| `bind()`  | Later       | Normal    | New function with fixed `this` |

---

### 🔹 Example in Object

```js
let user2 = {
  name: "Neeraj",
  showName: function() {
    console.log(this.name);
  }
};

let ref = user2.showName;

ref();            // ❌ this = window → undefined
ref.call(user2);  // ✅ this = user2 → "Neeraj"
ref.apply(user2); // ✅ this = user2 → "Neeraj"

let boundRef = ref.bind(user2);
boundRef();       // ✅ this = user2 → "Neeraj"

