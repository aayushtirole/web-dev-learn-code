// Callback ek function hota hai jo dusre function ke andar argument ke form mein pass hota hai, aur baad mein call hota hai, jaise hi koi kaam complete hota hai (jaise data fetch karna, file read karna, etc).

function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // ye baad mein chalega
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Aayush", sayGoodbye);
