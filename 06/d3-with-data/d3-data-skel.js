/* DATA JOINS WITH D3

hi team – in this file we'll learn how to attach our data to html elements! this is our first
step to working with data and creating comprehensive viz (which is very exciting). we'll be walking
through an end-to-end example to see the data-join process in action!

THIS IS THE SOLUTIONS DOC – SKELETON CODE CAN BE FOUND AT d3-data-skel.js
*/

// STEP 1 – pulling in your data 
// today, we'll just be working with a const array 
// we'll learn how to read in different types of data files (json, csv) next week

const food_arr = [
    {"foodName":"grapefruit", "foodGroup":"fruit", "foodColor":"pink"},
    {"foodName":"orange", "foodGroup":"fruit", "foodColor":"orange"},
    {"foodName":"kale", "foodGroup":"vegetable", "foodColor":"green"},
    {"foodName":"bread", "foodGroup":"grain", "foodColor":"brown"},
    {"foodName":"cheese", "foodGroup":"dairy", "foodColor":"yellow"},
    {"foodName":"oat milk", "foodGroup":"grain", "foodColor":"white"}
]

console.log(food_arr)

// we can pull out specific items using our dot notation and array indexing syntax
let grapefruit = food_arr[0]
console.log(grapefruit)
console.log(grapefruit.foodColor)

// now for fun d3 stuff = append a paragraph for each object 
// we'll do it 1 step at a time for demostration, then show how you'd do it irl (e.g. w method-chaining)

// first, since we'll be appending paragraphs to index.html, we need to save the body


/* now, the data-binding pattern */

// STEP 1 – select all paragraphs in the body


// unsurprisingly, the console is empty 

// STEP 2 – bind paragraphs to the data


/* what's going on?

two things .data returns –>

_enter (the enter selection)
    this contains the number of nodes that have to be appended (entered) to make the difference between
    the number of nodes already on the page and the number of data items that need to be attached to the page

    since we have 6 objects to attach and no existing paragraph elements, we have 6 enternodes 
    if we had 2 paragraphs already on the page, we would have 4 enternodes in that selection

_exit (the exit selection)
    this contains the number of nodes that have no corresponding data item and thus can't be properly bound to data
    
    since we have 0 paragraphs in our selection and 6 enter nodes, we have 0 exit nodes
    if we have 1, 2, 3, 4, 5, 6 paragraphs in selection (and 0 enter nodes), we'd STILL have 0 exit nodes 

    HOWEVER, if we had 8 paragraphs in our selection and 6 data items, we would have 2 exitnodes –>
    2 paragraphs need to exit for the data to be properly bound

*/

// STEP 3 – join paragraphs with the data
// since there are 6 enternodes, the .join(element) syntax will append 6 new paragraphs to the DOM


// an array of 6 paragraphs, yay!!
// since they have 0 styling or context, we can't see them –> let's change that


// without having to append 6 separate paragraphs, we've attached them super easily w d3!
// that rocks
// even better tho, we can change the element attributes based on data VALUES

/* using FUNCTIONS, let's change the text to be each data item's name

when we write functions in d3, we can pass in the parameter "d", which will return an individual data object –> the data object
that is BOUND TO, or ASSOCIATED WITH, each paragraph that we've appended

when we pass in "d" to our anonymous arrow function, we can change style attributes according to those data values, like d.foodName
*/


// LOVE IT
// let's change the text color to correspond w the food color


/* (d, i) PARAMETERS

in addition to the d parameter, which is a reference to a complete data object, i

i represents the INDEX of our data, from 0 to data.length-1
*/


/* SUPER CRITICAL NOTE ABOUT (d, i)

THEY ARE NOT KEYWORD DEPENDENT BUT INDEX DEPENDENT

aka u can pass in d as g or k or data_el and it will act as (d)

MEANING

to access i (aka the SECOND PARAMETER), u MUST SPECIFY D
otherwise if u just pass in (i), it will act as (d)

*/


/* ok let's do this all in one go babe whew 

d3.select('body')
    .selectAll('paragraphs')
    .data(food_arr)
    .join('p')
    .text((d) => d.foodName)
    .style('color', (d) => d.foodColor)

*/