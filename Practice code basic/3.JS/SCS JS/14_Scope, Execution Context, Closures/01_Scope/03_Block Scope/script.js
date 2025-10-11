{
    let x = 10;
    const y = 20;
    var z = 30;
    console.log(x, y, z); // Output: 10 20 30
}

console.log(x); // Error
console.log(y); // Error
console.log(z); // 30 (var function scoped)