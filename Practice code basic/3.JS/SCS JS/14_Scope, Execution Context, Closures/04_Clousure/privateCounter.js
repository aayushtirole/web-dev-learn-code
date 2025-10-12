//private counter :-  Using closure to store data privately

function createCounter() {
  let count = 0; // private variable

  return function() {
    count++; 
    console.log(count);
  }
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3

const counter2 = createCounter();

counter2(); // 1
counter2(); // 2
counter2(); // 3
counter2(); // 4
counter2(); // 5
counter2(); // 6
