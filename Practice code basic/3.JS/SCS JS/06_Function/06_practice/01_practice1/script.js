// 1.use rest parameter to accept any number of scores and return the total.

// function getScore(...score){
//     let total = 0;
//     score.forEach(function (val){
//         total = total + val;
//     });
//     return total;
// }

// console.log(getScore(10, 12, 14, 18));

// fixed the function using early retun

// unfixed function 

// function checkAge(age){
//     if (age < 18) {
//         console.log("Too young");
//     }
//     else {
//         console.log("Allowed");
//     }
// }

// fixed with early return


function checkAge(age){
    if (age < 18) return "Too young";
    return "Allowed";
}

console.log(checkAge(20));

// 03. Convert the above function into a pure function 
/**
 
let total = 0;
function addToTotal(num) {
    total += num;
}
*/
// change code into pure function 

let total = 0;
function addToTotal(num) {
    let newtotal = total;
    newtotal += num;
}