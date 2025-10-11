// js sbse pahle jaise hi function dekhta hain sabse pahle js banaata hain execution context, ye ek process hai jo ki do different phases main chlta hain , memory phase and doosre kaa naam hain execution phase 

Execution Context :- Execution Context matlab JS code chalne ka environment —
jahaan pe variables, functions, aur this ka value store hota hai.

Jab bhi JS code run hota hai, JS execution context banata hai.

🔸 Types of Execution Context

Global Execution Context (GEC)

Ye tab banta hai jab JS program start hota hai.

Isme global variables aur functions create hote hain.

Browser main window object ke sath link hota hai.

Function Execution Context (FEC)

Jab bhi tu koi function call karta hai, ek naya context banta hai.

Isme us function ke variables aur arguments store hote hain.

Eval Execution Context

Rarely used (sirf jab eval() use hota hai)

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Example:
let a = 10;

function add(x, y) {
    let sum = x + y;
    return sum;
}

add(5, 15);


** Step-by-step Execution:  **

JS sabse pehle Global Execution Context (GEC) banata hai.

a aur add ko memory main store karta hai.

Jab add(5,15) call hota hai, ek Function Execution Context (FEC) banta hai.

Isme x = 5, y = 15, aur sum = 20 store hota hai.

Jab function khatam hota hai → FEC destroy ho jata hai.

Note: Har function ke call pe ek naya context banta hai (independent hota hai).