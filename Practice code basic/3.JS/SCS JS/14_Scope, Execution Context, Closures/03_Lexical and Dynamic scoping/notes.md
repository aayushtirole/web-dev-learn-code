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

* dynamic scoping ka mtlb hain kaha se call kar rhe ho upe depend krega ki kya value milegi 

Dynamic scoping ka matlab hai —

“Function ka scope decide hota hai kahaan se call kiya gaya hai,
na ki code ke likhe jane ke structure se.”

Matlab variable search call stack ke according hota hai,
not function’s lexical position.

🧩 Example (Conceptual, JavaScript me nahi chalega):
var a = 10;

function first() {
    console.log(a);
}

function second() {
    var a = 20;
    first(); // called from here
}

second();


Agar JavaScript lexical scoping na hoti aur Dynamic scoping hoti —
toh output 20 hota (kyunki first() ko call second() se mila tha).

Lekin JavaScript Lexical Scoping follow karti hai,
isliye output 10 aata hai ✅