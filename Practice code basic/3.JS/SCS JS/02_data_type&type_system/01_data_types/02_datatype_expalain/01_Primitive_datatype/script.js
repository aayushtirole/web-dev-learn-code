// Primitive data types in JavaScript
// Aisi saari values jinko copy krne par real copy mil jaaye

// string,number,boolean,undefined,null,symbol,bigint

//  method of defining string
//  '' - single quote
//  "" - double quote
//  `` - backtick (template literal)


// 1. Number
let num1 = 10; // integer
let num2 = 10.5; // decimal
let num3 = -5; // negative number       


// 2. String

//  method of defining string
//  '' - single quote
//  "" - double quote
//  `` - backtick (template literal)

let str1 = 'Hello'; // single quote
let str2 = "World"; // double quote
let str3 = `Hello, ${str2}!`; // backtick (template literal)
console.log(str3); // Output: Hello, World!


// 3. Boolean
// true or false

let a= true;
let b = false;
console.log(a); // Output: true
console.log(b); // Output: false

// 4.null
// null -> empty value -> intentional empty value
// null is an assignment value. It can be assigned to a variable as a representation of no value.
// null ka mtlb hain jaan boojh kr kae value nhi di hain 

let selectedstudent = null;
console.log(selectedstudent); // Output: null

// 5.undefined
// undefined -> empty value -> unintentional empty value
// undefined ka mltb ki ek variable bana hain but usko koi value assign nhi ki hain toh jo value by default mili wo hain undefined

let c; // variable declared but not initialized
console.log(c); // Output: undefined
// variable c ki koi value assign nhi ki hain toh wo by default undefined hain

// 6. Symbol
// unique and immutable data type
// future main koe libraies use karenge ab is case main un libraries main kai baar kuch fileds hoti hain jinse similar hum bhi banna dete hain aur glti se hammari banaai hue fileds uss library ki original filed ko change kr deta hain 
// is problem ko solve krne ke liye hum symbol use karte hain
// exmaple 1
let u1 = Symbol("uid");
let u2 = Symbol("uid");
console.log(u1 === u2); // Output: false (because symbols are unique)

// exmaple 2
let obj = {
    uid:1,
    name : "Aayush",    
    age: 22,
    email:"aayu@gmail.com"
}

let u12 = Symbol("uid");     
obj[u12] = "001"; // adding a symbol property to the object
console.log(obj); // Output:{uid: 1, name: 'Aayush', age: 22, email: 'aayu@gmail.com', Symbol(uid): '001'}

// 7. BigInt
// BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the Number primitive.
// BigInt can be created by appending 'n' to the end of an integer or by calling the BigInt() constructor.

let ac = 1234567890123456789012345678901234567890n; // using 'n' suffix 
console.log(ac); // Output: 1234567890123456789012345678901234567890n

let bc = BigInt("1234567890123456789012345678901234567890"); // using BigInt constructor 
console.log(bc); // Output: 123456789012345678901234567890123



