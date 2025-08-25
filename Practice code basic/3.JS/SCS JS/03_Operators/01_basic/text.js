let m = 10;
let n = 20;

if (m > 5 && n < 25) {
    console.log("A");
}
else{
    console.log("B");
}


let isAdmin = true;
let isLoggedIn = false;

if (isAdmin || isLoggedIn) {
    console.log("Access granted");
}
else{
    console.log("Access denied");
}


let temp = 35;

if (!(temp < 30)) { 
    console.log("It's hot outside");
}
else{
    console.log("It's cool outside");
}


let g = 0;

if (g) {
    console.log("Truthy");
}
else{
    console.log("Falsy");
}



let run = 78;

let win = run >= 90 ? "A" : run >= 75 ? "B" : run >= 60 ? "C" : "Fail";

console.log("win:", win);


let j = 5;
j++;
console.log("j:", j);

let i = 7 ;
++i;
console.log("i:", i);

let k = 10;
k--;        
console.log("k:", k);

let p = 15;
let q = p++;
console.log(p, q);

let s = 5;
let f = ++s;
console.log(s, f);