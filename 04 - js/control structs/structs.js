/* CONTROL STRUCTURES

hi team – in this file we'll translate pythonic control structures to javascript, starting 
with conditional operators (== && ||) and ending with if-else statements and for loops!

THIS IS THE SOLUTIONS DOC – SKELETON CODE CAN BE FOUND AT structs_skel.js
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

if (n*3 == m) {
    console.log('n*3 = m')
}

/* IF ELSE

if (condition) {
    run this code
} else {
    run THIS code
}
*/

if (n > m) {
    console.log('n > m')
} else {
    console.log('m > n')
}

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

let n1 = 8
let n2 = 5

if (n1*n2 == 24) {
    console.log('n1*n2==24')
} else if (n2 % 2 == 1) {
    console.log('n1*n2 do not eval to 24 but n2 is odd')
} else {
    console.log('n1*n2 do not eval to 24 and n2 is even')
}

// super critical to remember that once an if statement is executed, we exit out of the struct 

/* TERNARY OPERATOR

ty javascript for providing the sickest and smoothest operator OAT (of all time) to execute single statement 
if-else structs

condition ? thing-to-do-if-true : thing-to-do-if-false

i'd love to give the js dev who wrote this a CRISP high five bc i use this constantly (and you will too)
*/

n1 = 12
n2 = 2

console.log(n1*n2==24 ? 'yes maam' : 'nah')
console.log("\n")



/* 02 – FOR LOOPS 

to work w data for visualization, we often need to iterate through our entire dataset and do some action 
for each element. we do that with for loops!

similar to if-else statements, for loops in javascript use Java syntax, taking 3 main arguments –> 

for (initial state; conditional state; increment expression) {
    do this 
}
*/

// like this
for (i = 0; i < 5; i++) {
    console.log('i rn is', i)
}

// we can use i in for loops to iterature through arrays
let nums = [4, 5, 103, 584, 2]
for (i = 0; i < nums.length; i++) {
    console.log(nums[i]*c)
}
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
for (i = 0; i < 5; i++) {
    console.log(i*2)
}

/* PART B – write a loop that prints out each element in the 'data_arr' array */
let data_arr = ['mon', 'tue', 'wed', 'thu', 'fri']

// part B work here
for (i = 0; i < data_arr.length; i++) {
    console.log(data_arr[i])
}

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
let sum = 0

for (i = 0; i < roots.length; i++) {
    console.log('the ' + roots[i].name + ' comes with ' + roots[i].protein + ' and costs $' + roots[i].price)
    sum += roots[i].price
}

console.log(sum)