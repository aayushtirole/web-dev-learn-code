function countVowels(str){
    let count = 0;
    for (const char of str){
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U"){
            count++;
        }  
    }

    return count;
}
console.log(countVowels("Hello World")); // Output: 3

// Now using Fat arraw function

const countVowelsArrow = (str) => {
    let count = 0;
    for (const char of str){
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U"){
            count++;
        }
    }
    return count;
}
console.log(countVowelsArrow("Hello"));
