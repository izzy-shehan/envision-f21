/* CONTROL STRUCTURES

hi team – in this file we'll translate pythonic control structures to javascript, starting 
with conditional operators (== && ||) and ending with if-else statements and for loops!

THIS IS THE SKELETON CODE – SOLUTIONS DOC CAN BE FOUND AT structs.js
*/


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
console.log()
console.log()

// when using ==, javascript coerces to the same type before comparing

// equality operator (type-checking)
console.log()

/*  
    this is generally safer (and usually best practice), but consider how you're passing conditions
    (are you returning true or 1 during a conditional? what are you comparing that condition to?)
    before blindly using === 
*/

// non-equality operators (!= !==)
// unsurprisingly, != and !== do the opposite of == and ===
console.log()
console.log()

// inequality operators (< > <= >=)
// these behave super predictably
console.log()
console.log()
console.log()
console.log()
// easy money

// to assess multiple conditions, we can use the js equivalent of and, or, and not

// and (&&)
console.log()

// or (||)
console.log()

// not (!)
console.log()
console.log("\n")



/* 01 – IF ELSE STATEMENTS 

using the output of our conditions, we can map out what code to execute and when with if, if-else, if else-if, 
and the ternary operator!

*/

let n = 12
let m = 36

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



// super critical to remember that once an if statement is executed, we exit out of the struct 

/* TERNARY OPERATOR

ty javascript for providing the sickest and smoothest operator OAT (of all time) to execute single statement 
if-else structs

condition ? thing-to-do-if-true : thing-to-do-if-false

i'd love to give the js dev who wrote this a CRISP high five bc i use this constantly (and you will too)
*/




/* 02 – FOR LOOPS 

to work w data for visualization, we often need to iterate through our entire dataset and do some action 
for each element. we do that with for loops!

similar to if-else statements, for loops in javascript use Java syntax, taking 3 main arguments –> 

for (initial state; conditional state; increment expression) {
    do this 
}
*/

// like this


// we can use i in for loops to iterature through arrays

// scope!

// and chain objects accessors 
let grit_drinks = [
    
    {   name:'iced dirty chai',
        milk_type:'almond',
        size_in_oz: 20,
        price: 5.75},

    {   name: 'cold brew',
        milk_type: 'oat',
        size_in_oz: 12, 
        price: 4.50}
]

for (i = 0; i < grit_drinks.length; i++) {
    console.log('my go-to order is a ' + grit_drinks[i].size_in_oz + ' oz ' + grit_drinks[i].name + ' with ' + 
    grit_drinks[i].milk_type + ' milk for $' + grit_drinks[i].price)
}

console.log('\n')

/* 02 – ACTIVITY 

PART A – write a loop that prints out the numbers 0, 2, 4, 6, 8
*/

// part A work here


/* PART B – write a loop that prints out each element in the 'data_arr' array */
let data_arr = ['mon', 'tue', 'wed', 'thu', 'fri']

// part B work here


/* PART C – write a loop that prints out  "the ROOTS BOWL NAME comes with PROTEIN and costs $PRICE"
            for each element in 'roots'

    console.log the total cost of all roots bowls (remember what we know about scope!)
*/
let roots = [
    {   name: 'el jefe', 
        protein: 'chicken',
        price: 10.50
    },
    {
        name: 'southern',
        protein: 'bbq tofu', 
        price: 10.25
    },
    {
        name: 'tamari',
        protein: 'miso tofu',
        price: 9.75
    }
]

// part C work here
