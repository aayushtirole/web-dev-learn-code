//function scope :- function ke andar hi use ho skti hain 

function greet() {
    let name = "Aayush"; // function scope
    console.log(name);   // Access possible
}

greet(); // Output: Aayush
console.log(name); // Error: name is not defined
