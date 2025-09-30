//Destructure the key "first-name" as a variable called "firstName".

const user = {
    "first-name": "Aayush",
    age: 22,
    address: {
      city: "Indore"
    },
    contact: {
      email: " aayush@gmail.com"
    }
};
let {"first-name": firstName } = user; // first-name is not valid variable name so we use destructuring
// we can also use aliasing here like first-name as firstName
// firstName variable ban gaya jisme user object ke "first-name" key ki value aa gayi hai            
// agar "first-name" key exist nahi karti to firstName me undefined aa jayega
console.log(firstName);