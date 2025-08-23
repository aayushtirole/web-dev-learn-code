// scope (global scope, functional scope, block scope)

// global scope = var

var a = 12; // global scope


// functional scope 
function test() {
    var a = 20; // function scope
    console.log(a); // 20
}

// var is a functional scope


// block scope


{
    let a = 20; // block scope
    const b = 30; // block scope
    console.log(a); // 20
    console.log(b); // 30
}

// var functional hain toh vo block main use hoga toh vo as a global scope treat hoga 
// Var respect nhi karta hain block scope ki 