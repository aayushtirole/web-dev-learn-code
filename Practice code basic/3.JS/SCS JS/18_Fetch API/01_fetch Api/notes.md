fetch api

fetch : promise based hain



* `fetch()` ek **built-in JavaScript function** hai jo **HTTP request** (GET, POST, PUT, DELETE) bhejne ke liye use hota hai.
* Ye **Promise return karta hai**, iska matlab hai ki ye **asynchronous operation** hai.
* Fetch ka use browser me hota hai (aur Node.js me `node-fetch` library ke saath).

---

## **2️⃣ Basic GET request**

```js
// Ek API se data fetch karna
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json()) // Response ko JSON me convert karna
    .then(data => {
        console.log("Data received:", data); // JSON data ko use karna
    })
    .catch(err => {
        console.log("Error:", err); // Agar network ya parsing me error aaye toh handle karna
    });
```

**Hinglish Explanation:**

1. `fetch(url)` → URL pe HTTP GET request bhejta hai aur **Promise return karta hai**.
2. `response.json()` → Response ko parse karke **JS object** me convert karta hai → ye bhi Promise return karta hai.
3. `.then(data => …)` → Parse ho chuka JSON data yaha milta hai.
4. `.catch(err => …)` → Agar koi error aayi (network issue ya parsing issue), yaha handle hoti hai.

---

## **3️⃣ Fetch API with async/await**

Async/await se code **clean aur readable** lagta hai:

```js
async function getPost() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // wait for fetch
        let data = await response.json(); // wait for JSON parsing
        console.log("Data received:", data);
    } catch (err) {
        console.log("Error:", err); // Error handle
    }
}

getPost();
```

**Hinglish Perspective:**

* `await fetch()` → function ka execution **pause ho jaata hai** jab tak response nahi milta.
* `await response.json()` → function **pause** until JSON parsing completes.
* `try/catch` → errors ko handle karta hai, `.catch()` ki jagah.
* Code **line by line synchronous lagta hai**, par asynchronous hai.

---

## **4️⃣ POST request example**

```js
async function createPost() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST", // HTTP method POST
            headers: {
                "Content-Type": "application/json" // JSON content type
            },
            body: JSON.stringify({
                title: "Mera Post",
                body: "Ye ek sample post hai",
                userId: 1
            })
        });

        let data = await response.json(); // Response ko JSON me parse karna
        console.log("Post created:", data);
    } catch (err) {
        console.log("Error:", err);
    }
}

createPost();

Hinglish Explanation:

* `method: "POST"` → HTTP POST request bhej raha hai.
* `headers` → content type define karta hai (JSON).
* `body: JSON.stringify(...)` → JS object ko JSON string me convert karta hai.
* Response ko `.json()` ke saath parse karke handle kar sakte ho.

## **5️⃣ Important Points about Fetch**
1. **Promise-based:**

   * Hamesha Promise return karta hai, `.then/.catch` ya `async/await` dono use kar sakte ho.

2. **HTTP errors automatically throw nahi hote:**

   * Agar server 404 ya 500 return kare, fetch reject nahi hota.
   * Check `response.ok` for status:

```js
if (!response.ok) {
    throw new Error("HTTP error " + response.status);
}

3. **Headers:**
   * Headers me aap specify karte ho content-type ya authorization info.

4. **JSON parsing:**
   * `response.json()` bhi Promise return karta hai.
   * `.text()` ya `.blob()` bhi use kar sakte ho depending on response type.

5. **Async/Await makes it easy:**

   * Code clean aur readable lagta hai.
   * Multiple fetch requests sequential ya parallel (`Promise.all`) run kar sakte ho.

---

## **6️⃣ Example: Multiple fetch requests sequentially**

```js
async function getPostsAndUsers() {
    try {
        let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
        let postsData = await posts.json();
        console.log("Posts:", postsData.slice(0, 2));

        let users = await fetch("https://jsonplaceholder.typicode.com/users");
        let usersData = await users.json();
        console.log("Users:", usersData.slice(0, 2));
    } catch (err) {
        console.log("Error:", err);
    }
}

getPostsAndUsers();
```

* `await` ensures **sequential execution**: pehle posts → fir users.
* Agar parallel chahiye → use `Promise.all([fetch1, fetch2])`.

---

✅ **Summary (Hinglish)**:

* `fetch()` = HTTP request → returns Promise.
* `.then/.catch` ya **async/await** se handle karte ho.
* `.json()` = response parse karne ke liye.
* `async/await` → code readable aur synchronous-like lagta hai.
* Error handling → try/catch + `response.ok`.


