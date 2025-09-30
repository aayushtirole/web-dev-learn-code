// Create a reusable discount calculator (with HOF)

function discountCalculator(discount) { // discount is in percentage
    return function (price) { // price is the original price
        return price - price * (discount / 100); // discount is in percentage
    }
};
let ten = discountCalculator(10);  // 10% discount
let twenty = discountCalculator(20);    // 20% discount
console.log(ten(1200)); // 1200 is the price
console.log(twenty(1200)); // 1200 is the price



