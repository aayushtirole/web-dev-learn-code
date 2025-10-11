1. Lexical Scoping (Static Scoping) — JavaScript uses this ✅

* lexical scoping ki aap kaha par physically available ho ye poori tareeke se depend krta hain ki aap kya access kro paaoge 


Lexical scope ka matlab hai —

“Function ka scope uske likhe jaane (code ke structure) ke hisaab se decide hota hai,
na ki usse kahaan se call kiya gaya hai.”

Matlab — JS code likhte waqt hi decide kar leta hai ki kaunsa variable kis function ke liye visible hai.
(Execution time pe decide nahi hota)

🧩 Example 1:
function outer() {
    let a = 10;

    function inner() {
        console.log(a); // inner ko outer ke variable ka access hai
    }

    inner();
}

outer();


Explanation :

inner() ke andar a directly nahi hai, par wo lexically outer function ke andar likha gaya hai.

Isliye inner() ko apne parent (outer) ka variable mil jata hai.

Isko hi kehte hain lexical scope —
inner function ko apne likhe gaye (written) outer environment ka access milta hai.

🧠 JavaScript lexical scope use karta hai —
matlab variable search karta hai in layers:

Apne khud ke function scope

Parent function scope

Global scope

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

2. Dynamic Scoping — kuch languages (jaise Bash, Perl) use karti hain ❌ (JS main nahi hota)

