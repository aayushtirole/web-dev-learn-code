// // 1. 1 se 10 tak number print karo

// for(let i = 1; i < 11; i++){
//     console.log(i);
// }

// 2. 1 se 10 tak ke number ka sum nikalna

// 👉 Example: 1+2+3+...+10 = 55

// let sum = 0; // sum ko 0 se start kar rahe ho
// for(let i = 1; i < 11; i++){  // loop i = 1 se start hoga aur i < 11 tak chalega (matlab 1 se 10)
//     sum = sum + i;    // har step pe sum ke andar i add kar doge
// }

// console.log(sum);        // final result print hoga = 55


// 3. 2 ka table print karo

// 👉 Output: 2 4 6 8 10 12 14 16 18 20

// for(let i = 1; i < 11; i++){
//     console.log(2 * i);
// }

// 4. User se ek number lo aur uska factorial nikalna

// 👉 Example: agar input 5 hai → factorial = 5*4*3*2*1 = 120

// User se ek number input lena (prompt hamesha string deta hai)
// let val = Number(prompt("Give the number"));   // Number() use karke string ko number mein convert kar diya

// Factorial ka result store karne ke liye variable, 1 se start karte hain (0 karenge toh sab 0 ho jaayega)
// let fact = 1;

// Loop i = 1 se start hoga aur i <= val tak chalega
// for (let i = 1; i <= val; i++) {
    // Har step pe fact ko i se multiply karte rahenge
    // fact = fact * i;

    // (Optional) Har iteration ka step dekhna ho toh uncomment karo:
    // console.log("Step " + i + ": " + fact);
// }

// Loop ke baad fact mein final factorial ka value store ho chuka hoga
// console.log("Factorial of " + val + " is " + fact);


// 8. Ek string ke har character ko alag-alag print karo

// 👉 Example: "Hello" → Output:

// H  
// e  
// l  
// l  
// o

// let str = "Hello";

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }


// 9. Array ke saare elements print karo

// 👉 Example: let arr = [10,20,30,40] → Output: 10 20 30 40

// 1) Array bana rahe hain
let arr = [10, 20, 30, 40];

// 2) For loop se array ke har element pe jaa rahe hain
// for (let i = 0; i < arr.length; i++) {
//   // arr[i] se current element milta hai
//   console.log(arr[i]);
// }





// 10. Fibonacci series ke first 10 numbers print karo

// 👉 Output: 0 1 1 2 3 5 8 13 21 34

// Kitne Fibonacci numbers chahiye
// let n = 10;  

// // Sequence ke starting 2 numbers: 0 aur 1
// let a = 0;  
// let b = 1;  

// // Loop n times chalega (yaha 10 times)
// for (let i = 0; i < n; i++) {
  
//   // Har iteration pe current number 'a' print hoga
//   console.log(a);  

//   // Naya number calculate karo (Fibonacci rule: next = a + b)
//   let next = a + b;  

//   // 'a' ko 'b' se replace kar do (aage shift kar diya)
//   a = b;            

//   // 'b' ko next number se replace kar do (aur aage shift kar diya)
//   b = next;         
// }

// 11. Count digits of a number

// let n = 12345; // number jisme digits ginne hain
// let count = 0; // initially 0

// // jab tak number 0 se bada hai
// while (n > 0) {
//   count++;                  // ek digit mila toh count +1
//   n = Math.floor(n / 10);   //math.floor ka use decinumber ko remove krne ke liye krte hai 
// }

// // final count print
// console.log("Total digits: " + count);

// 12. Reverse a number

// let n = 1234;  // number reverse karna hai
// let rev = 0;   // reverse number yaha store hoga

// while (n > 0) {
//   let digit = n % 10;       // last digit nikal liya
//   rev = rev * 10 + digit;   // reverse mein add kiya
//   n = Math.floor(n / 10);   // last digit remove kar diya
// }

// console.log("Reversed number: " + rev);

// 🔎 Step by Step (Dry Run for n = 1234)

// Start: n = 1234, rev = 0

// digit = 1234 % 10 = 4
// rev = 0 * 10 + 4 = 4
// n = 123

// digit = 123 % 10 = 3
// rev = 4 * 10 + 3 = 43
// n = 12

// digit = 12 % 10 = 2
// rev = 43 * 10 + 2 = 432
// n = 1

// digit = 1 % 10 = 1
// rev = 432 * 10 + 1 = 4321
// n = 0 → stop.

// 👉 Final output: 4321

// 13. Palindrome Number

// let n = 121;    // number check karna hai
// let temp = n;   // original number save kiya
// let rev = 0;    // reverse number

// while (n > 0) {
//   let digit = n % 10;       // last digit nikal liya
//   rev = rev * 10 + digit;   // reverse mein add kiya
//   n = Math.floor(n / 10);   // last digit hata diya
// }

// // check original == reverse
// if (temp === rev) {
//   console.log(temp + " is Palindrome");
// } else {
//   console.log(temp + " is NOT Palindrome");
// }


// 🔎 Step by Step (Dry Run for n = 121)
// Start: n = 121, temp = 121, rev = 0

// digit = 121 % 10 = 1
// rev = 0 * 10 + 1 = 1
// n = 12

// digit = 12 % 10 = 2
// rev = 1 * 10 + 2 = 12
// n = 1

// digit = 1 % 10 = 1
// rev = 12 * 10 + 1 = 121
// n = 0 → stop.

// Now rev = 121 and temp = 121 → dono equal → Palindrome 


// 14. Power of a Number

// let base = 2;  // base number
// let exp = 3;   // exponent (kitni baar multiply karna hai)
// let result = 1;

// for (let i = 1; i <= exp; i++) {
//   result = result * base; // base ko bar-bar multiply kar rahe hain
// }

// console.log(base + "^" + exp + " = " + result);

// 🔎 Step by Step (Dry Run for 2³)

// Start: base = 2, exp = 3, result = 1

// i = 1 → result = 1 * 2 = 2

// i = 2 → result = 2 * 2 = 4

// i = 3 → result = 4 * 2 = 8

// 👉 Output = 8
