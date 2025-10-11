// Closure hote hain function jo ki kisi parent function ke andar waala function return ho raha ho, and returning function use kare, parent function ka koi variable 

function abcd (){
    let a = 12;

    return function(){
        console.log(a);
    }
}

// fayda nuksaab 
** private variables 
** global pollution preserve

// ye sahi hain ki fnc ke khatam hone pe aapka fnc and uske variables khtm ho jaate hain, par jab bhi closure banta hain to  fnc aur uske variables ka ek backlink banaya jaata hain aur uska naam hota hain [[environment]]



Closures Definition 

Jab ek inner function apne outer function ke variables ko “yaad” rakhta hai,
even after outer function execute ho chuka hota hai,
uss relation ko Closure kehte hain.

Matlab —

Function ke andar function, aur andar wala function apne bahar wale variables ko access kar sakta hai baad me bhi.

💡 2. Closure Example (Basic)
function outer() {
    let count = 0; // outer ka variable

    function inner() {
        count++;
        console.log(count);
    }

    return inner; // inner function return ho raha hai
}

const counter = outer(); // outer execute hua
counter(); // 1
counter(); // 2
counter(); // 3

🧩 Step-by-Step Explanation (Hinglish Main):

Jab outer() call hua, usne ek variable banaya — count = 0.

outer() ke andar ek function hai inner().

outer() return karta hai inner function ko.

Jab outer() execute ho gaya, normally count destroy ho jana chahiye tha.
❌ Lekin hua nahi!

Kyunki inner() function ke paas closure hai —
wo apne outer scope (count) ko yaad rakhta hai.

Isliye har baar jab counter() call hota hai,
wo count ko increment karke print karta hai.

🎯 3. Visual Understanding
outer() Execution
│
├── let count = 0
│
└── return inner() → [function + outer’s reference]
            ↓
   Closure (remember count)


🧠 inner() ke sath ek “backpack” banta hai
jisme outer() ke variables stored hote hain.
Yehi backpack = Closure 🎒