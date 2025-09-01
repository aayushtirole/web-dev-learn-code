// Spread Operator 

let arr = [1,2,3,4,5,6,7,8,9];

// '...' (spread operator) ka use karke ek naya array banaya
let arr2 = [...arr];

console.log(arr2); // [1,2,3,4,5,6,7,8,9]

// Explanation 

//let arr = [1,2,3,4,5,6,7,8,9];
// ek original array jisme numbers hain

//let arr2 = [...arr];
// yahan '...arr' ka matlab hai: array ke har element ko "spread" karna
// iska effect ye hota hai ki arr ke elements ek ek karke nikal ke
// arr2 ke andar daal diye jate hain

// ab arr2 ek completely NAYA array hai
// arr aur arr2 alag-alag memory me store honge
// (shallow copy create hoti hai)