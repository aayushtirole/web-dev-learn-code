// var let cont
// declaration and initialization


// var concept 

var a = 12;
var a = 13; // redeclaring var is allowed

// var window main add hota hain
//  var= function scope hota hain 
// hum fir se var ko declare kar sakte hain same name se and error nahi aayga 
// var ko function ke andar bhi use kar sakte hain
function test() {
    var a = 20;
    console.log(a); // 20
}


// let concept

let a= 12;
// let a = 13; // error: Identifier 'a' has already been declared


// let = block scope hota hain
// let ko fir se declare nahi kar sakte same name se
// let ko block ke andar hi use kar sakte hain
{
    let a = 20;
    console.log(a); // 20
}



// cont concept

const a = 12;
// const a = 13; // error: Identifier 'a' has already been declared

// const = block scope hota hain
// const main value change nahi kar sakte
// const ko block ke andar hi use kar sakte hain
{
    const a = 20;
    console.log(a); // 20
}




