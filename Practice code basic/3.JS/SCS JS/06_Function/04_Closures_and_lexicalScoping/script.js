// Closures and lexical scoping 

// Closure :-  Ek fnc jo return kare ek aur function aur return hone wala fuction hamesha use karega parent fnc ka koe variable 

function abcd(){
    let a = 12;
    return function(){ 
        console.log(a);
    }
}

// lexical scoping 


// Scope = area where a variable can be accessed.

// Lexical Scoping means:
// A function can access variables defined in its own scope and also in the outer (parent) function’s scope, but not from child scopes.

// "Lexical" simply means "based on where it was written in the code" (not where it is called).

function abcd(){
    let a = 12;
    function defg(){
        let b = 13;
        function ghij(){
            let c = 14;
        } 
    }
}

function abcd() {
    // Variable in abcd's scope
    let a = 12;

    function defg() {
        // Variable in defg's scope
        let b = 13;

        function ghij() {
            // Variable in ghij's scope
            let c = 14;

            // ✅ ghij can access:
            // - its own variable (c)
            // - parent variable (b)
            // - grandparent variable (a)
            console.log(a); // 12
            console.log(b); // 13
            console.log(c); // 14
        }

        // ✅ defg can access:
        // - its own variable (b)
        // - parent variable (a)
        // ❌ but not variable 'c' (belongs only to ghij)
        console.log(a); // 12
        console.log(b); // 13
        // console.log(c); // ❌ ERROR: c is not defined

        ghij(); // call ghij
    }

    // ✅ abcd can access:
    // - its own variable (a)
    // ❌ but not variables 'b' or 'c' (they are in inner functions)
    console.log(a); // 12
    // console.log(b); // ❌ ERROR: b is not defined
    // console.log(c); // ❌ ERROR: c is not defined

    defg(); // call defg
}

abcd(); // Run the program
