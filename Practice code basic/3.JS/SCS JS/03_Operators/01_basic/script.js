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
 *  -  typeof -> null or array ko glt batata hain unhe vo object batata hain
 *  -  typeof -> Nan ko number batata hain
 * -   instanceof -> null or array ko sahi batata hain
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

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



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

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Logical Operators Example
let x = true, y = false;
console.log('\nLogical Operators:');

// Logical AND: true if both are true
console.log('x && y:', x && y); // Output: false

// Logical OR: true if at least one is true
console.log('x || y:', x || y); // Output: true

// Logical NOT: inverts boolean
console.log('!x:', !x);         // Output: false

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


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

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// String Operator Example
let str1 = "Hello, ";
let str2 = "world!";
console.log('\nString Operator:');

// Concatenation: joins two strings
console.log(str1 + str2); // Output: Hello, world!

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Conditional (Ternary) Operator Example
let age = 18;

// If age >= 18, canVote is "Yes", else "No"
let canVote = (age >= 18) ? "Yes" : "No";
console.log('\nConditional (Ternary) Operator:');
console.log('Can vote?', canVote); // Output: Can vote? Yes

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Type Operators Example
console.log('\nType Operators:');

// typeof: returns type of variable
console.log('typeof a:', typeof a); // Output: number

// instanceof: checks if str1 is instance of String object
console.log('str1 instanceof String:', str1 instanceof String); // Output: false (primitive string)

// instanceof: checks if obj is instance of String object
let obj = new String("test");
console.log('obj instanceof String:', obj instanceof String); // Output: true (object)

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


/**
 * Unary Operators in JavaScript:
 *
 * Unary operators operate on a single operand to produce a result.
 * Common unary operators include:
 *
 * 1. Unary Plus (+):
 *    - Attempts to convert its operand into a number.
 *    - Example:
 */
let strNum = "42";
console.log('\nUnary Plus (+):');
console.log('+strNum:', +strNum); // Output: 42 (number)

/**
 * 2. Unary Negation (-):
 *    - Converts its operand into a number and negates it.
 *    - Example:
 */
let val = "7";
console.log('\nUnary Negation (-):');
console.log('-val:', -val); // Output: -7

/**
 * 3. Increment (++) and Decrement (--):
 *    - Increments or decrements the value by 1.
 *    - Can be used as prefix (++a) or postfix (a++).
 *    - Example:
 */
let num = 5;
console.log('\nIncrement (++) and Decrement (--):');
console.log('num++:', num++); // Output: 5 (then num becomes 6)
console.log('++num:', ++num); // Output: 7 (num is now 7)
console.log('num--:', num--); // Output: 7 (then num becomes 6)
console.log('--num:', --num); // Output: 5 (num is now 5)

/**
 * 4. Logical NOT (!):
 *    - Converts operand to boolean and inverts it.
 *    - Example:
 */
let isActive = 0;
console.log('\nLogical NOT (!):');
console.log('!isActive:', !isActive); // Output: true (0 is falsy)

/**
 * 5. Bitwise NOT (~):
 *    - Inverts the bits of its operand.
 *    - Example:
 */
let bitVal = 2; // binary: 00000010
console.log('\nBitwise NOT (~):');
console.log('~bitVal:', ~bitVal); // Output: -3

/**
 * 6. typeof:
 *    - Returns a string indicating the type of the operand.
 *    - Example:
 */
console.log('\ntypeof:');
console.log('typeof "hello":', typeof "hello"); // Output: string

/**
 * 7. delete:
 *    - Removes a property from an object.
 *    - Example:
 */
let objEx = { a: 1, b: 2 };
console.log('\ndelete:');
console.log('Before delete:', objEx); // {a:1, b:2}
delete objEx.a;
console.log('After delete:', objEx); // {b:2}

/**
 * 8. void:
 *    - Evaluates an expression and returns undefined.
 *    - Example:
 */
console.log('\nvoid:');
console.log('void 0:', void 0); // Output: undefined

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Ternary Operator in JavaScript:
 *
 * The ternary operator is the only operator in JavaScript that takes three operands.
 * Syntax: condition ? exprIfTrue : exprIfFalse
 * - If the condition is true, exprIfTrue is evaluated and returned.
 * - If the condition is false, exprIfFalse is evaluated and returned.
 *   ?: -> ternary operator
 * - condition ? true hue ka code : false hue ka code
 * 
 *  
 * Example : EASY EXAMPLE
 */

 12 > 13 ? console.log('tue') : console.log('13 is greater');


// Example 1 : Basic usage

let score = 75;
let result = (score >= 60) ? "Pass" : "Fail";
console.log('\nTernary Operator:');
console.log('Result:', result); // Output: Pass



/**
 * Example 2: Nested ternary operator
 */
let marks = 85;
let grade = (marks >= 90) ? "A" :
            (marks >= 80) ? "B" :
            (marks >= 70) ? "C" : "D";
console.log('Grade:', grade); // Output: B

/**
 * Example 3: Using ternary for assignment
 */
let isMember = false;
let fee = isMember ? "$2.00" : "$10.00";
console.log('Fee:', fee); // Output: $10.00

/**
 * Ternary operator is concise and useful for simple conditional assignments or expressions.
 * For complex logic, prefer if-else statements for readability.
 */


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


/**
 * instanceof Operator Example:
 * 
 * The instanceof operator checks if an object is an instance of a particular constructor or class.
 * Syntax: object instanceof Constructor
 */

// Example 1: Array
let arr = [1, 2, 3];
console.log('\ninstanceof Operator:');
console.log('arr instanceof Array:', arr instanceof Array); // Output: true

// Example 2: Date
let date = new Date();
console.log('date instanceof Date:', date instanceof Date); // Output: true

// Example 3: Custom class
class Person {}
let person = new Person();
console.log('person instanceof Person:', person instanceof Person); // Output: true

// Example 4: Primitive vs Object
let strPrimitive = "hello";
let strObject = new String("hello");
console.log('strPrimitive instanceof String:', strPrimitive instanceof String); // Output: false
console.log('strObject instanceof String:', strObject instanceof String); // Output: true