let arr = [1, 2, 3, 4, 5];  
// Initial array → [1, 2, 3, 4, 5]



// ------------------- PUSH -------------------
   arr.push(7000);  
// Adds an element at the END of the array
// After push → [1, 2, 3, 4, 5, 7000]
// Process: arr[arr.length] = 7000 hota hai, matlab array ke last index par naya value store ho jata hai


// ------------------- POP -------------------
   arr.pop();  
// Removes the LAST element from the array
// After pop → [1, 2, 3, 4]
// Process: last index ka element delete kar deta hai aur array length -1 ho jaati hai


// ------------------- SHIFT -------------------
   arr.shift();  
// Removes the FIRST element from the array
// After shift → [2, 3, 4, 5]
// Process: index 0 ka element delete hota hai aur baaki elements left shift ho jaate hain


// ------------------- UNSHIFT -------------------
   arr.unshift(0);  
// Adds an element at the BEGINNING of the array
// After unshift → [0, 1, 2, 3, 4, 5]
// Process: sabhi existing elements ek step right shift hote hain aur naya element 0th index par aa jata hai


// ------------------- SPLICE -------------------
   arr.splice(2, 1);  
// splice(startIndex(kaha se value hatani hain), deleteCount(kitni value hatani hain))
// Here: startIndex = 2 → position of "3"
// deleteCount = 1 → remove 1 element
// Removes element at index 2 → [1, 2, 4, 5]
// Process: ye array ko modify karta hai, jo elements delete karne hain unhe remove karega aur agar aur values pass karo to unhe add bhi kar dega


// ------------------- SLICE -------------------
   let num = [1, 2, 3, 4, 5];  

   let newarr = num.slice(0, 3);  
// slice(startIndex, endIndex)
// It copies elements from startIndex → endIndex (not including endIndex)
// Here: startIndex = 0, endIndex = 3
// This means it will copy elements at index 0, 1, and 2
// So, newarr = [1, 2, 3]

   console.log(newarr); // Output: [1, 2, 3]

// slice(start, end) → Copy part of array (doesn’t change original).
// Process: ye ek naya array banata hai aur original ko modify nahi karta


// ------------------- REVERSE -------------------

   let unrevarr = [1,2,3,4,5]

   let rev = unrevarr.reverse();
// Reverses the array in place (changes original array)
// arr becomes [7, 1, 9, 2, 5]
   console.log("Reverse:", rev);
// Process: reverse() start se end aur end se start swap karta hai


// ------------------- SORT -------------------

// sort hamesha ek function accept krta hain 

let sr = arr.sort (function(a, b) {
    return b-a;
    
});
console.log("sort:", sr);
// Process: sort() by default string wise sort karta hai
// Agar numbers ko sort karna ho to compare function dena padta hai
// (a-b) ascending, (b-a) descending


// ------------------- ForEach -------------------

arr.forEach(function(val){
    console.log(val + 5 );
});
   console.log("forEach:", arr);
// Process: forEach() loop ke jaisa kaam karta hai
// Har element ko ek ek karke process karega
// Koi naya array return nahi karta, bas action perform karta hai


// ------------------- MAP -------------------

// map sirf tb use krna hain jab aapko ek naya array banana hain pichhle array ka data basis par 

// map dikhte hi saath me man main ek blank array banao 
// jabh bhi yesa koe case dikh jaaye jaha pr ek array se naya array banega and vo naya array kucch values ko rakhega tab map lagega 

let newarray = arr.map(function(val){
    return 12;
});
console.log("map1:", newarray);
// Process: har element pe function chalega aur uska result ek naye array me store hoga
// Always returns a NEW array

let newhey = arr.map(function(val){
    if (val > 2) return val;
});
console.log("map:", newhey);
// Process: map() function har element pe chalega
// Jo bhi value return hogi vo naye array me store hogi
// Agar condition false hui to undefined aayega uss index pe


// ------------------- FILTER -------------------

let newhub = arr.filter(function(val){
   if (val > 4)return true;
});
console.log("filter:", newhub);
// Process: filter() condition true hone par hi element naya array me store karega
// Always returns NEW array


// ------------------- REDUCE -------------------

let ans = arr.reduce(function(accumulator,val){
   return accumulator + val;
},0);
console.log("reduce:", ans);
// Process: reduce() array ko ek single value me reduce kar deta hai
// Step by step accumulator update hota hai
// Example: [1,2,3] → (((0+1)+2)+3) = 6
// Initial value of accumulator is 0 (provided as second argument to reduce)
// If initial value is not provided, first element of array is taken as initial value and iteration starts from second element
// accumulator = previous value, val = current value

// ------------------- FIND -------------------

let arrnew = [
   { id: 1, key: 1},
   { id: 2, key: 2},
   { id: 3, key: 1},
   
];


let va = arrnew.find(function(val){
    return val.key === 1;
});
console.log(va);
// Process: find() array ke andar search karta hai
// Jo pehla element condition pass kare wahi return hota hai
// Sirf FIRST match deta hai, saare nahi


// ------------------- SOME -------------------
let somearr = [45, 67, 89, 23, 12, 90];

let any = somearr.some(function(val){
   return val > 85;
});
console.log(any);
// Process: some() check karega ki kya kam se kam ek element condition pass karta hai
// Agar haan to true, nahi to false


// ------------------- EVERY -------------------

let eve = arr.every(function (val){
   return val > 2;
});
console.log(eve);
// Process: every() check karega ki kya saare elements condition pass kar rahe hain
// Agar ek bhi fail hua to false return karega
