// for a given array with price of 5 item -> [250,645, 300, 900, 50 ] all items have a offer of 10% off on them .change the array to reflect the new prices after discount and print the array

let prices = [250, 645, 300, 900, 50];
let discount = 0.10; // 10% discount

for (let i = 0; i < prices.length; i++) {
    prices[i] = prices[i] - (prices[i] * discount);
}

console.log(prices); // Output: [225, 580.5, 270, 810, 45]