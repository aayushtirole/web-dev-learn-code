
## **1️⃣ Constructor Function (Blueprint)**

```js
function CreatePencil(name, price, color, company) {
  this.name = name;
  this.price = price;
  this.color = color;
  this.company = company;
}
```

* `CreatePencil` = **blueprint** for pencil objects
* `this` = jo bhi new object create hoga usko point karega
* Har pencil ka **name, price, color, company** define hota hai

> Ye same kaam factory function se hota hai, lekin **constructor + new** ka syntax cleaner hai.

---

## **2️⃣ Prototype Method**

```js
CreatePencil.prototype.write = function (text) {
  let h1 = document.createElement("h1");
  h1.textContent = text;
  h1.style.color = this.color;
  console.log(h1);
  document.body.append(h1);
};
```

* `write` method **har pencil object ke liye reusable hai**
* Prototype me method define karne se **memory save hoti hai**
* `this.color` → current pencil ka color use karega

> Agar aapne `write` method constructor ke andar define kiya hota → har pencil me alag copy create hoti → memory zyada use hoti.

---

## **3️⃣ Creating Objects**

```js
let pencil1 = new CreatePencil("Nataraj", 10, "black", "nataraj");
let pencil2 = new CreatePencil("Doms", 10, "red", "doms");
```

* `new` keyword = ek **naya object create karega**
* Har object ke paas alag-alag **properties** hongi

---

## **4️⃣ Using Methods**

```js
pencil1.write("Hello from Nataraj"); // black text h1 tag
pencil2.write("Hello from Doms");    // red text h1 tag
```

* `pencil1` aur `pencil2` apni **alag-alag color** ke saath text display karenge
* Prototype method automatically har object ke liye kaam karega

---

### ✅ Key Learnings from your code:

1. **Factory / Blueprint** ban gaya → `CreatePencil` constructor
2. **Reusable behavior** → prototype method `write()`
3. **Objects creation** → `new CreatePencil(...)`
4. **`this` keyword** → current object ka reference

