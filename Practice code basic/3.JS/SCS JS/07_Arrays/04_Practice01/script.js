// Q1 create an array with 3 fruits and print the second fruit 

let fruit = ["apple", "guava", "banana"];  

console.log(fruit[1]);  
// Indexing 0 se hoti hai
// fruit[0] -> "apple"
// fruit[1] -> "guava"
// fruit[2] -> "banana"

// ..........................................................................
// add "mango" at the end and pineaple at the beginning of this array:

// Add "Mango" at the end and "Pineapple" at the beginning of this array

let fruits = ["Apple", "banana"];  

// "push()" array ke end me element add karta hai
fruits.push("Mango");   

// "unshift()" array ke beginning me element add karta hai
fruits.unshift("pineaple");  

console.log(fruits);  
// Output: ["pineaple", "Apple", "banana", "Mango"]

