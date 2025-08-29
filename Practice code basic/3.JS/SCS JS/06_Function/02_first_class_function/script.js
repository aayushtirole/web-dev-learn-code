// First Class Functions 

// Functions ko values ki tarah treat kar skte hain 

function abcd(val){
         val();
}

abcd(function(){
    console.log("hello");
})

// explaination of code 

// ek function banaya jiska naam 'abcd' hai
// ye ek parameter 'val' leta hai
function abcd(val) {
    // yaha par 'val' ko function ki tarah call kar rahe hain
    // matlab jo bhi function argument ke रूप में milega, usse execute karega
    val();
}

// ab 'abcd' function ko call kiya
// isme ek anonymous function (nameless function) argument ke रूप में diya
abcd(function() {
    // jab 'val()' chalega to ye console.log execute hoga
    console.log("hello");
}); 
