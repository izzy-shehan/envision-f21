/* CONTROL STRUCTURES

hi team – in this file we'll translate pythonic control structures to javascript, starting 
with conditional operators (== && ||) and ending with if-else statements and for loops!

THIS IS THE SOLUTIONS DOC – SKELETON CODE CAN BE FOUND AT structs_skel.js
*/


// first, print statements (aka the only debugger you will use for literally every language) –>
console.log('hi js world!') 


/* 00 – COMPARATIVE OPERATORS 

oftentimes while writing javascript for our visualizations, you'll want to compare 2 pieces of data 
to assess how they relate to one another.

some easy example of this are –>
 – is var1 a string?
 – is x greater than 10?
 – are x and y both greater than var1?
 – is x greater than var1 AND y smaller than var2?

much like any language, javascript provides us with the ability to use LOGICAL OPERATORS to test 
if these CONDITIONS are true or false,

in Python, these operators are == (equality), >= (greater/less than), and, or, not, etc.

let's translate these into javascript!
*/

// assignment operator 
let x = 14

// equality operator (no type-checking)
console.log("does x == 14?", x==14)
console.log("does x == '14'?", x=='14')
// when using ==, javascript coerces to the same type before comparing

// equality operator (type-checking)
console.log("does x === '14'?", x==='14')

/*  
    this is generally safer (and usually best practice), but consider how you're passing conditions
    (are you returning true or 1 during a conditional? what are you comparing that condition to?)
    before blindly using === 
*/

// non-equality operators (!= !==)
// unsurprisingly, != and !== do the opposite of == and ===
console.log("'2' != 2: ", '2'!=2);
console.log("'2' !== 2: ", '2'!==2);

// inequality operators (< > <= >=)
// these behave super predictably
console.log("2 > 2: ", 2>2)
console.log("2 >= 2: ", 2>=2)
console.log("2 <= 2: ", 2<=2)
console.log("2 < 2: ", 2<2)

// easy money

// to assess multiple conditions, we can use the js equivalent of and, or, and not

// and (&&)
console.log('is x greater than 3 AND smaller than 20?', x>3 && x<20)

// or (||)
console.log('is x less than 3 or greater than 10?', x<3 || x>10)

// not (!)
console.log('!(x>3):', !(x>3))



/* 01 – IF ELSE STATEMENTS 

using the output of our conditions, we can map out what code to execute and when with if, if-else, if else-if, 
and the ternary operator!

*/

/* IF SYNTAX

if (condition) {
    run this code
}
*/

/* IF ELSE

if (condition) {
    run this code
} else {
    run THIS code
}
*/

/* IF ELSE-IF ELSE

replacing Python's elif statement, we can evaluate literally as many conditions as we want by
appending else if to our conditional block 

if (condition 1) {
    run this code
} else if (condition 2) {
    run me 
} else {
    run THIS
}
*/

/* TERNARY OPERATOR

ty javascript for providing the sickest and smoothest operator OAT (of all time) to execute single statement 
if-else structs

condition ? thing-to-do-if-true : thing-to-do-if-false

i'd love to give the js dev who wrote this a CRISP high five bc i use this constantly (and you will too)
*/