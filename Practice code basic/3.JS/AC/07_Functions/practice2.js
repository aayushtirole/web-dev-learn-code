/*
Write a higher-order function that takes a function and a number,
then calls that function 'n' times.
*/

function repeatFunction(fn, n) {                // function repeatFunction start hota hai (fn, n parameters le raha hai)
  if (typeof fn !== "function") return;         // check: fn ek function hai ya nahi
  if (typeof n !== "number" || n <= 0) return;  // check: n ek positive number hai ya nahi

  for (let i = 0; i < n; i++) {                 // loop start hota hai (0 se n-1 tak chalega)
    fn();                                       // har iteration me fn() call hoga
  }                                             // loop khatam jab i == n ho jata hai
}

function sayHello() {                           // ek simple function define kiya jo "Hello, World!" print karta hai
  console.log("Hello, World!");                 // jab bhi call hoga, yeh line run hogi
}

repeatFunction(sayHello, 3);                    // higher-order function call kiya -> fn = sayHello, n = 3

/*
----- Flow -----
Step 1: repeatFunction(sayHello, 3) call hota hai
        -> fn = sayHello
        -> n = 3

Step 2: for loop start
        i = 0 -> fn() => sayHello() -> "Hello, World!" print
        i = 1 -> fn() => sayHello() -> "Hello, World!" print
        i = 2 -> fn() => sayHello() -> "Hello, World!" print

Step 3: i = 3 hone par condition fail ho jati hai (i < 3 false), loop ruk jata hai

Final Output in console:
Hello, World!
Hello, World!
Hello, World!
*/
