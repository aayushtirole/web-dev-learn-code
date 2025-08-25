/**
 * JavaScript Operators Overview:
 *
 * Operators in JavaScript are special symbols or keywords used to perform operations on operands (values and variables).
 * They are categorized as follows:
 *
 * 1. Arithmetic Operators:
 *     +  : Addition (e.g., a + b)
 *     -  : Subtraction (e.g., a - b)
 *     *  : Multiplication (e.g., a * b)
 *     /  : Division (e.g., a / b)
 *     %  : Modulus (remainder, e.g., a % b)
 *     ++ : Increment (adds 1, e.g., a++)
 *     -- : Decrement (subtracts 1, e.g., a--)
 *     ** : Exponentiation (e.g., a ** b)   
 *
 * 2. Assignment Operators:
 *     =   : Assigns value (e.g., a = 5)
 *     +=  : Adds and assigns (e.g., a += 2 is a = a + 2)
 *     -=  : Subtracts and assigns (e.g., a -= 2)
 *     *=  : Multiplies and assigns (e.g., a *= 2)
 *     /=  : Divides and assigns (e.g., a /= 2)
 *     %=  : Modulus and assigns (e.g., a %= 2)
 *    **= : Exponentiation and assigns (e.g., a **= 2)
 *
 * 3. Comparison Operators:
 *     ==   : Equal to (compares values, e.g., a == b)
 *     ===  : Strict equal (compares value and type, e.g., a === b)
 *     !=   : Not equal (e.g., a != b)
 *     !==  : Strict not equal (e.g., a !== b)
 *     >    : Greater than (e.g., a > b)
 *     <    : Less than (e.g., a < b)
 *     >=   : Greater than or equal to (e.g., a >= b)
 *     <=   : Less than or equal to (e.g., a <= b)
 * 
 *
 * 4. Logical Operators:
 *     && : Logical AND (true if both are true, e.g., a && b)
 *     || : Logical OR (true if at least one is true, e.g., a || b)
 *     !  : Logical NOT (inverts boolean, e.g., !a)
 *
 * 5. Bitwise Operators:
 *     &  : AND (e.g., a & b)
 *     |  : OR (e.g., a | b)
 *     ^  : XOR (e.g., a ^ b)
 *     ~  : NOT (e.g., ~a)
 *     << : Left shift (e.g., a << 2)
 *     >> : Right shift (e.g., a >> 2)
 *     >>>: Unsigned right shift (e.g., a >>> 2)
 *
 * 6. String Operator:
 *     + : Concatenation (joins strings, e.g., "a" + "b")
 *
 * 7. Conditional (Ternary) Operator:
 *     condition ? expr1 : expr2 (returns expr1 if condition is true, else expr2)
 *
 * 8. Type Operators:
 *     typeof : Returns the type of a variable (e.g., typeof a)
 *     instanceof : Checks if an object is an instance of a class (e.g., a instanceof Array)
 *
 * These operators are fundamental to writing logic and performing calculations in JavaScript.
 */


// Arithmetic Operators Example
let a = 10;
let b = 3;
console.log('Arithmetic Operators:');
// Addition: Adds two numbers
console.log('a + b =', a + b); // Output: 13

// Subtraction: Subtracts right operand from left
console.log('a - b =', a - b); // Output: 7

// Multiplication: Multiplies two numbers
console.log('a * b =', a * b); // Output: 30

// Division: Divides left operand by right
console.log('a / b =', a / b); // Output: 3.333...

// Modulus: Remainder of division
console.log('a % b =', a % b); // Output: 1

// Increment (post): Returns a, then increments
console.log('a++ =', a++);     // Output: 10 (a becomes 11 after this)

// Increment (pre): Increments b, then returns
console.log('++b =', ++b);     // Output: 4 (b becomes 4)

// Exponentiation: a raised to the power of b
console.log('a ** b =', a ** b); // Output: 14641 (11^4)


// Assignment Operators Example
let c = 5;
console.log('\nAssignment Operators:');

// Addition assignment: Adds 2 to c
c += 2;
console.log('c after += 2:', c); // Output: 7

// Multiplication assignment: Multiplies c by 3
c *= 3;
console.log('c after *= 3:', c); // Output: 21

// Subtraction assignment: Subtracts 4 from c
c -= 4;
console.log('c after -= 4:', c); // Output: 17

// Division assignment: Divides c by 2
c /= 2;
console.log('c after /= 2:', c); // Output: 8.5

// Modulus assignment: c modulus 3
c %= 3;
console.log('c after %= 3:', c); // Output: 2.5

// Exponentiation assignment: c raised to the power of 2
c **= 2;
console.log('c after **= 2:', c); // Output: 6.25


// Comparison Operators Example
console.log('\nComparison Operators:');

// Loose equality: compares value only
console.log('a == "11":', a == "11");   // Output: true

// Strict equality: compares value and type
console.log('a === "11":', a === "11"); // Output: false

// Not equal: compares value
console.log('a != b:', a != b);         // Output: true

// Greater than
console.log('a > b:', a > b);           // Output: true


// Logical Operators Example
let x = true, y = false;
console.log('\nLogical Operators:');

// Logical AND: true if both are true
console.log('x && y:', x && y); // Output: false

// Logical OR: true if at least one is true
console.log('x || y:', x || y); // Output: true

// Logical NOT: inverts boolean
console.log('!x:', !x);         // Output: false


// Bitwise Operators Example
let d = 5, e = 3;
console.log('\nBitwise Operators:');

// Bitwise AND
console.log('d & e:', d & e);   // Output: 1

// Bitwise OR
console.log('d | e:', d | e);   // Output: 7

// Bitwise XOR
console.log('d ^ e:', d ^ e);   // Output: 6

// Bitwise NOT
console.log('~d:', ~d);         // Output: -6

// Left shift
console.log('d << 1:', d << 1); // Output: 10

// Right shift
console.log('d >> 1:', d >> 1); // Output: 2


// String Operator Example
let str1 = "Hello, ";
let str2 = "world!";
console.log('\nString Operator:');

// Concatenation: joins two strings
console.log(str1 + str2); // Output: Hello, world!


// Conditional (Ternary) Operator Example
let age = 18;

// If age >= 18, canVote is "Yes", else "No"
let canVote = (age >= 18) ? "Yes" : "No";
console.log('\nConditional (Ternary) Operator:');
console.log('Can vote?', canVote); // Output: Can vote? Yes


// Type Operators Example
console.log('\nType Operators:');

// typeof: returns type of variable
console.log('typeof a:', typeof a); // Output: number

// instanceof: checks if str1 is instance of String object
console.log('str1 instanceof String:', str1 instanceof String); // Output: false (primitive string)

// instanceof: checks if obj is instance of String object
let obj = new String("test");
console.log('obj instanceof String:', obj instanceof String); // Output: true (object)