// BMI Calculator

// function bmi(weight,height) {
//     return weight / (height * height);
// }

// console.log(bmi(69, 1.7).toFixed(2));

// ..........................................................................................................

// Create a reusable discount calculator (with HOF)

// function discountCalculator(discount) {
//     return function (price) {
//         return price - price * (discount / 100);
//     };
// }

// let ten = discountCalculator(10);
// let twenty = discountCalculator(20);

// console.log(ten(1200));
// console.log(twenty(1200));

// closure example 

function counter() {
    let count = 0;
    return function(){
        count++;
        return count;
    };
}

let c = counter();
console.log(c());
console.log(c());
console.log(c());
console.log(c());

let d = counter();
console.log(d());
console.log(d());


