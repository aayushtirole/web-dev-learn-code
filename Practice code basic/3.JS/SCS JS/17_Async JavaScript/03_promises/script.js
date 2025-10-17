// promises 

// aap ek promise banaate ho jo ki od states main se ek state me jaa skta hain and wo yaa toh resolve hoga yaa to reject hoga ab wo kya hoga ye toh waqt baatayega par humein dono ke liye code likhan padta hain 
// Creating a Promise
// A promise can go into one of three states: pending, resolved, or rejected.
// We have to write code to handle both success (resolve) and failure (reject).
let pr = new Promise(function(resolve, reject){
    
    // Simulate an asynchronous operation with setTimeout
    setTimeout(() => {
       // Generate a random number from 0 to 9
       let rn = Math.floor(Math.random()*10);
       
       // If number is greater than 5, resolve the promise
       if (rn > 5 ) resolve("resolved with " + rn);
       
       // Otherwise, reject the promise
       else reject("reject with " + rn);
    }, 3000); // wait for 3 seconds before executing
});

// Handle the resolved value
pr.then(function(val){
    console.log(val); // logs message if promise is resolved
})

// Handle the rejected value
.catch(function(val){
    console.log(val); // logs message if promise is rejected
});

/*
Flow summary inside the code:
1. Promise is created → executor runs immediately.
2. setTimeout waits 3 seconds → generates random number.
3. If rn > 5 → resolve() → goes to .then()
   If rn ≤ 5 → reject() → goes to .catch()
4. After 3 seconds, either .then() or .catch() logs the result.
*/
