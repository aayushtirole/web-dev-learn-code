// write a function getGrade(score) that 
// takes a numerical score (0-100) 
// and returns the grade based on the logic 
// 90-100: A+
// 80-89: A
// 70-79: B
// 60-69: C
// 33-59: D
// 0-32: F
// Anything else    Invalid marks 

// Use if-else statements to implement this logic.

function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A+";
    } else if (score >= 80 && score < 90) {
        return "A";
    } else if (score >= 70 && score < 80) {
        return "B";
    } else if (score >= 60 && score < 70) {
        return "C";
    } else if (score >= 33 && score < 60) {
        return "D";
    } else if (score >= 0 && score < 33) {
        return "F";
    } else {
        return "Invalid marks";
    }
}
console.log(getGrade(95)); // Output: A+
console.log(getGrade(85)); // Output: A     
console.log(getGrade(75)); // Output: B
console.log(getGrade(65)); // Output: C
console.log(getGrade(50)); // Output: D
console.log(getGrade(20)); // Output: F
console.log(getGrade(150)); // Output: Invalid marks
console.log(getGrade(-10)); // Output: Invalid marks

// use early return pattern to implement the same logic.

function getGradereturn(score) {
    if (score >=90 && score <= 100) return "A+";
    if (score >=80 && score <= 89) return "A";
    if (score >=70 && score <= 79) return "B";
    if (score >=60 && score <= 69) return "C";
    if (score >=33 && score <= 59) return "D";
    if (score >=0 && score <= 32) return "F";
    return "Invalid marks";
}

console.log(getGradereturn(95)); // Output: A+
console.log(getGradereturn(85)); // Output: A       
console.log(getGradereturn(75)); // Output: B
console.log(getGradereturn(65)); // Output: C
console.log(getGradereturn(50)); // Output: D
console.log(getGradereturn(20)); // Output: F
console.log(getGradereturn(150)); // Output: Invalid marks
console.log(getGradereturn(-10)); // Output: Invalid marks 


// .......................................................................................................................

// Rock Paper Scissor logic

// Rock vs Paper -> Paper wins
// Rock vs Scissor -> Rock wins
// Paper vs Scissor -> Scissor wins
// Same -> Tie

function rps(player1, player2) {
    if (player1 === "Rock" && player2 === "scrissor") return "Player 1 wins!";
    if (player1 === "Rock" && player2 === "Paper") return "Player 2 wins!";
    if (player1 === "Paper" && player2 === "Rock") return "Player 1 wins!";
    if (player1 === "Paper" && player2 === "scissor") return "Player 2 wins!";
    if (player1 === "scissor" && player2 === "Paper") return "Player 1 wins!";
    if (player1 === "scissor" && player2 === "Rock") return "Player 2 wins!";
    if (player1 === player2) return "It's a Tie!";
    return "Invalid input!";
}
console.log(rps("Rock", "Paper")); // Output: Player 2 wins!


// easy way to do this

function rps(user, computer) {
    if (user === computer) return "It's a Tie!";
    
    if (user === "rock" && computer === "scissor") return "User wins!";
    if (user === "scissor" && computer === "paper") return "user wins!";
    if (user === "paper" && computer === "rock") return "user wins!";
    return "Computer wins!";
}

console.log(rps("rock", "scissor")); // Output: User wins!
console.log(rps("rock", "paper")); // Output: Computer wins!
console.log(rps("rock", "rock")); // Output: It's a Tie!


// .......................................................................................................................

// more tricky question solution 

let x = 2;

switch (x) {
    case 2:
        console.log("Two");
    case 3:
        console.log("Three");
}

// output is two and three because there is no break statement after case 2 so it will execute all the case after that also