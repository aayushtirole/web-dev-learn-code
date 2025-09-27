//object

let person = {  
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person.name); // Output: John
console.log(person.age); // Output: 30

console.log(person.city); // Output: New York
console.log(factorial(5)); // Output: 120 (5! = 5*4*3*2*1)
console.log(factorial(0)); // Output: 1 (0! = 1)


//object with method
 
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    getDetails: function() {
        return `${this.year} ${this.make} ${this.model}`;
    }
};
console.log(car.getDetails()); // Output: 2020 Toyota Camry
console.log(car.make); // Output: Toyota

// Modifying Object Properties
car.year = 2021;
console.log(car.getDetails()); // Output: 2021 Toyota Camry 
car.color = "Blue"; // Adding a new property
console.log(car.color); // Output: Blue
delete car.model; // Deleting a property
console.log(car.model); // Output: undefined
console.log(car); // Output: { make: 'Toyota', year: 2021, getDetails: [Function: getDetails], color: 'Blue' }

// Nested Objects
let student = {
    name: "Alice",
    age: 22,
    address: {  
        street: "123 Main St",
        city: "Los Angeles",
        state: "CA"
    }
};
console.log(student.address.city); // Output: Los Angeles
console.log(student.address.street); // Output: 123 Main St

// Object Methods
let rectangle = {
    width: 10,
    height: 5,
    area: function() {
        return this.width * this.height;
    },
    perimeter: function() {
        return 2 * (this.width + this.height);
    }
};

console.log(rectangle.area()); // Output: 50
console.log(rectangle.perimeter()); // Output: 30
console.log(rectangle.width); // Output: 10
console.log(rectangle.height); // Output: 5
console.log(rectangle); // Output: { width: 10, height: 5, area: [Function: area], perimeter: [Function: perimeter] }


// Iterating Over Object Properties
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}       

// Output:
// name: John
// age: 30
// city: New York

console.log(Object.keys(person)); // Output: [ 'name', 'age', 'city' ]

console.log(Object.values(person)); // Output: [ 'John', 30, 'New York' ]




















