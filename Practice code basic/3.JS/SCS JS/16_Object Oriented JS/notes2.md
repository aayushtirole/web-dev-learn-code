## 🧠 What is Object Oriented Programming (OOP)?

OOP ek programming style hai jisme hum **real-world objects** ko represent karte hain — jaise **Car, Student, User, Video, etc.**
Har object ke **properties (data)** aur **methods (functions)** hote hain.

In short:

> OOP = combine data + behavior together inside objects.

## ⚙️ 1. Object Literal (Basic way)

```js
const user = {
  name: "Aayush",
  age: 21,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

user.greet(); // Hello, my name is Aayush
```

🟢 `this` keyword current object ko refer karta hai.

---

## 🧩 2. Factory Function

Ek function jo object return kare — **factory function** kehlata hai.

```js
function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age}`);
    }
  };
}

const user1 = createUser("Neeraj", 22);
user1.greet();
```

---

## 🧱 3. Constructor Function

`new` keyword ke sath use hota hai — ye **object banata hai** aur `this` ko assign karta hai.

```js
function User(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hi, I'm ${this.name}`);
  };
}

const user2 = new User("Aayush", 21);
user2.greet();
```

🟡 Note:

* `new` → creates an empty object
* `this` → points to that new object
* Automatically returns object

---

## 🧬 4. Prototype (Important)

JavaScript main sab objects ek **prototype** se inherit karte hain.
Ye OOP ka **inheritance** part hai.

```js
function User(name) {
  this.name = name;
}

User.prototype.sayHello = function() {
  console.log(`Hello ${this.name}`);
};

const u1 = new User("Aayush");
u1.sayHello(); // Hello Aayush
```

🧠 Here `sayHello` sab new objects ke liye common rahega (memory efficient).

---

## 🧑‍🏫 5. Class (Modern Syntax)

ES6 (2015) ke baad se hum class syntax use karte hain — cleaner and modern.

```js
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const user3 = new User("Resham", 20);
user3.greet();
```

🟩 Internally, ye bhi prototype-based hi hota hai — bas syntax easy hai.

---

## 🧬 6. Inheritance (Extends)

Ek class ko dusri class se **extend** kar sakte hain — ye reuse aur hierarchy ke liye hota hai.

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, grade) {
    super(name); // parent class constructor call
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying in grade ${this.grade}`);
  }
}

const s1 = new Student("Aayush", "B.Tech");
s1.greet();  // Hello Aayush
s1.study();  // Aayush is studying in grade B.Tech
```

---

## 🔒 7. Encapsulation

Private data ko hide karne ke liye `#` use karte hain.

```js
class BankAccount {
  #balance = 0; // private property

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited ₹${amount}`);
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(500);
console.log(acc.getBalance()); // 500
// acc.#balance ❌ error (private)
```

---

## 🧱 8. Polymorphism (Method Overriding)

Same method name, but different behavior in subclasses.

```js
class Animal {
  speak() {
    console.log("Some sound...");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Bark!");
  }
}

const d = new Dog();
d.speak(); // Bark!
```
