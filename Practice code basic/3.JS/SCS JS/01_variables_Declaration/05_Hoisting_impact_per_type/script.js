// Hoisting impact per type

// Hoisting -> ek variable ko jab "js" main banaate hain toh wo variable do hissa main toot jaata hain and uska declare part upar chala jaata hain and uska initialize part neeche reh jaata hain.

// Hoisting ka impact variable ke type per depend karta hain.


var a = 12;

// do hisso main yese tutati hain -

var a = undefined; // declare part (hoisted)
a = 12; // initialize part (not hoisted)


let a = 12;

let a; // declare part (ye hoist hota hain )
a = 12; // initialize part (not hoisted)  

// explaination 

// var -> hoist -> value= undefined
// let/const -> hoist -> value= uninitialized (temporal dead zone),(reference error :-if accessed before initialization)
// const -> hoist -> value= uninitialized (temporal dead zone),(reference error :-if accessed before initialization)
// function -> hoist -> value= function definition
// class -> hoist -> value= uninitialized (temporal dead zone)


