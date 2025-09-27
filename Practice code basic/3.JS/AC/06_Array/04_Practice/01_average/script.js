// Average of the marks 

let marks = [90, 80, 70, 60, 50];

let sum = 0;

for (let val of marks) {
    sum += val;
}

let average = sum / marks.length;

console.log("Average marks: ",average); // Output: Average marks: 70