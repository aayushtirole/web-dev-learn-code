let arr = [1, 2, 3, 4, 5];  
// Initial array → [1, 2, 3, 4, 5]

// ------------------- PUSH -------------------
   arr.push(7000);  
// Adds an element at the END of the array
// After push → [1, 2, 3, 4, 5, 7000]

// ------------------- POP -------------------
   arr.pop();  
// Removes the LAST element from the array
// After pop → [1, 2, 3, 4]

// ------------------- SHIFT -------------------
   arr.shift();  
// Removes the FIRST element from the array
// After shift → [2, 3, 4, 5]

// ------------------- UNSHIFT -------------------
   arr.unshift(0);  
// Adds an element at the BEGINNING of the array
// After unshift → [0, 1, 2, 3, 4, 5]

// ------------------- SPLICE -------------------
   arr.splice(2, 1);  
// splice(startIndex(kaha se value hatani hain), deleteCount(kitni value hatani hain))
// Here: startIndex = 2 → position of "3"
// deleteCount = 1 → remove 1 element
// Removes element at index 2 → [1, 2, 4, 5]

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


// ------------------- REVERSE -------------------
   let rev = arr.reverse();
// Reverses the array in place (changes original array)
// arr becomes [7, 1, 9, 2, 5]
   console.log("Reverse:", rev);

// ------------------- SORT -------------------

// sort hamesha ek function accept krta hain 

let sr = arr.sort (function(a, b) {
    return b-a;
    
});

// ------------------- ForEach -------------------

arr.forEach(function(val){
    console.log(val + 5 );
});

// ------------------- MAP -------------------

// map sirf tb use krna hain jab aapko ek naya array banana hain pichhle array ka data basis par 

// map dikhte hi saath man main ek blank array banao 
// jabh bhi yesa koe case dikh jaaye jaha pr ek array se naya array banega and vo naya array kucch vakues ko rakhega tab mao lagega 

let newarray = arr.map(function(val){
    return 12;
});


let newhey = arr.map(function(val){
    if (val > 10) return val;
});