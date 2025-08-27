// Q1. print number from 1 to 10 using a for loop 

// for (let i = 1; i < 11; i++){
//     console.log(i);
// }
// ...................................................................................................................................
// Q2. print number from 10 to 1 using a for and  while loop

// for(let i = 10; i > 0; i--){
//     console.log(i);
// }

// let i = 10;
// while(i>0){
//     console.log(i);
//     i--;
// }
// ....................................................................................................................................
// Q3. print even number from 1 to 20 using for loop 

//   for(let i = 1; i < 21; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }
//   }
// ....................................................................................................................................

// Q4. print odd number from 1 to 20 using for loop and while loop

// for(let i = 1; i < 16; i++){
//     if (i % 2 === 1){
//         console.log(i);
//     }
// }

// let i = 1;
// while(i<16){
//     if (i % 2 === 1){
//         console.log(i);
//     }
//     i++;
// }
// ....................................................................................................................................
// print the multiplication table of 5 using for loop and while loop (i.e, 5x1=5, 5x2=10, 5x3=15....5x10=50)

// for (let i = 1; i < 11; i++){
//     // console.log(5 * i);
//     console.log(`5 * ${i} = ${5 * i}`)
// }


// let i = 1;
// while(i < 11){
//     console.log(`5 * ${i} = ${5 * i}`)
//     i++;

// }
// ........................................................................................

// Q6. find the sum of number from 1 to 100 using loop 

// let sum = 0;
// for (let i = 1; i < 101; i++){
//     sum = sum + i;
// }
// console.log(sum);

// ...............................................................................

// Q7.Print all the number between 1 to 60 that are divisible by 3

// for (let i = 1; i < 61; i++){
//     if( i % 3 === 0){
//         console.log(i);
//     }

// ...............................................................................

// Q8. Ask the user for a number and print whether each number from 1 to that number is even or odd

// prompt()  is for taking value from the users 

// let val = prompt("give a number");

// for (let i = 1; i <=val; i++){
//     if (i % 2 === 0){
//         console.log(`${i} is even`);
//     }
//     else {
//         console.log(`${i} is odd`)
//     }
// }

// ...............................................................................

// Q9. Count how many numbers between 1 to 100 are divisible by both 3 and 5 

// for(let i = 1; i<101; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log(i);
//     }
// }

//...............................................................................

// break and continue question 

// Q1. Stop at first multiple 7

// write a loop from 1 to 100 that:
// - prints each number 
// - stops completely when it finds the first number divisible by 7 

// for (let i = 1; i < 101; i++){
//     console.log(i);

//     if (i % 7 === 0){
//         break;
//     }
// }

// ...............................................................................

// Q2. Skips multiples of 3 
// write a loop from 1 to 20 that:
// - Skips numbers divisible by 3 
// - prints all others 

// Use continue

// Expected output 
// 1 2 4 5 8 10 11 ... (skip no 3,6,9, etc)


// for (let i = 1; i < 21; i++){
//     if (i % 3 === 0) continue;
//     console.log(i);
// }


// Q3. Print First 5 odd number only 
// write a loop from 1 to 100 that:
// - Prints only 5 odd number 
// - Then stops the loops 

// use both if, continue, and a counter + break 

// expected output :
// 1 3 5 7 9

let count = 0 ;
for (let i = 1; i < 101; i++){
    if (i % 2 === 1){
        count++;
        console.log(i);
    }

    if (count === 5) break ;
}
// ...............................................................................