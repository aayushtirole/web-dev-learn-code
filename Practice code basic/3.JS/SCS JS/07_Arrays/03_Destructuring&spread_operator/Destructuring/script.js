// Destructuring Operator 


let arr = [1, 2, 3, 4, 5];

// Yahan array ke pehle do elements (1 aur 2) ko directly variables me assign kar diya
let [a, b] = arr;

console.log(a); // 1
console.log(b); // 2

// Explanation 

//let arr = [1, 2, 3, 4, 5];  
// ek normal array jisme 5 elements hain

//let [a, b] = arr;  
// array ke pehle element ko variable 'a' me assign karega (a = 1)
// array ke dusre element ko variable 'b' me assign karega (b = 2)

// Matlab bina arr[0] aur arr[1] likhe hum directly variable bana sakte hain

//Agar skip karna ho koi element:

let [first, , third] = arr;
console.log(first, third); // 1 3