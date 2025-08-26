//  if else else-if
// switch case
// early return pattern

// if(condition - > true || false)

// if else statement

if(loggedIn && admin){
    // logged in and admin
}
else if(loggedIn){
    // logged in but not admin
}
else{
    // not logged in
}
// Basic example of if else statement:

let age = 18;

if (age >= 18) {
    // This block runs if the condition is true
    console.log("You are an adult.");
} else {
    // This block runs if the condition is false
    console.log("You are not an adult.");
}

// Explanation:
// The 'if' statement checks if the value of 'age' is greater than or equal to 18.
// If true, it prints "You are an adult."
// If false, it prints "You are not an adult."

// ........................................................................................................................

// switch case statement

// Structure of switch case statement:

switch (expression) {
    case value1:
        // code block for value1
        break;
    case value2:
        // code block for value2
        break;
    // more cases as needed
    default:
        // code block if no case matches
        break;
}


// example of switch case statement:

let fruit = "apple";

switch (fruit) {
    case "apple":
        // This block runs if fruit is "apple"
        console.log("It's an apple.");
        break; // Exit the switch after executing this case
    case "banana":
        // This block runs if fruit is "banana"
        console.log("It's a banana.");
        break;
    case "orange":
        // This block runs if fruit is "orange"
        console.log("It's an orange.");
        break;
    default:
        // This block runs if none of the above cases match
        console.log("Unknown fruit.");
        break;
}

// Breakdown:
// 1. The switch statement checks the value of 'fruit'.
// 2. Each 'case' compares 'fruit' to a value (e.g., "apple").
// 3. If a match is found, the corresponding block runs.
// 4. 'break' stops the switch from checking further cases.
// 5. 'default' runs if no case matches.

// .......................................................................................................................

// early return pattern
 
function getval(val) {
    if (val < 100) return "A";
    else if (val < 75) return "B";   
    else if (val < 50) return "C";
    else return "D";
}

console.log(getval(90)); // output is A














































/**
// Control Flow Example in JavaScript

// 1. Variable Declaration
let age = 20; // We declare a variable 'age' and assign it the value 20

// 2. if-else Statement
// This checks if the condition inside the parentheses is true or false
if (age >= 18) {
    // If the condition is true (age is 18 or more), this block runs
    console.log("You are an adult.");
} else {
    // If the condition is false (age is less than 18), this block runs
    console.log("You are a minor.");
}

// 3. for Loop
// This loop will run 5 times, from i = 0 to i < 5
for (let i = 0; i < 5; i++) {
    // Each time, it prints the current value of i
    console.log("Loop iteration:", i);
}

// 4. switch Statement
// This checks the value of the variable 'day'
let day = "Monday";
switch (day) {
    case "Monday":
        // If day is "Monday", this block runs
        console.log("Start of the work week.");
        break; // Stops checking further cases
    case "Friday":
        // If day is "Friday", this block runs
        console.log("End of the work week.");
        break;
    default:
        // If day is not "Monday" or "Friday", this block runs
        console.log("Midweek day.");
        break;
}

// 5. while Loop
// This loop runs as long as count is less than 3
let count = 0;
while (count < 3) {
    // Prints the current count
    console.log("Count is:", count);
    count++; // Increments count by 1
}

// 6. Function with return
// This function takes a number and returns its square
function square(num) {
    // Multiplies num by itself and returns the result
    return num * num;
}

// Call the function and print the result
console.log("Square of 4 is:", square(4));
 */