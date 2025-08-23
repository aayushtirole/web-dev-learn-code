let ab = 10;
{
    let a = 20;
    console.log("INSIDE:",a); 
}
console.log("OUTSIDE:",ab);


// confusion

if (true) {

    var a = 1;
    let b = 2;
}
console.log(a); // 1
console.log(b); // reference error

//  why cont allows changing object properties

const person = { name: "aayush"};
person.name = "Tirole"; // allowed // updation is allowed in const variable
person = {}; // not allowed  // reassignment nhi kr sakte const variable main 