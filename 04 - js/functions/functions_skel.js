/* CONTROL STRUCTURES

hi team – in this file we'll translate pythonic function syntax to javascript!

THIS IS THE SOLUTIONS DOC – SKELETON CODE CAN BE FOUND AT functions_skel.js
*/

/* 00 – FUNCTION NOTATION

in python, we define functions w the general structure –>

    def function_name(parameter1, parameter2):
        do things w parameters
        return (or not return) values

let's translate this into javascript!
*/

/* OG NOTATION

const function_name = function(parameter) {
                        return vals 
                    }
*/


/* ARROW NOTATION

const function_name = (parameter) => {
        return vals
    }
*/


/* ARROW NOTATION – SINGLE LINE USE CASE

const function_name = (p1, p2) => stuff-to-do

*/



/* 00 – ACTIVITY

PART A – write a function called grabColor that takes in an array of objects (with the keys 'fruit' and 'color') and returns
an array strictly containing (in the same order as the input array) the colors

ex. 1 –>
*/

let testArray = [
    {fruit:"banana", color:"yellow"},
    {fruit:"orange", color:"orange"},
    {fruit:"grapefruit", color:"pink"},
    {fruit:"blueberry", color:"blue"},
    {fruit:"strawberry", color:"red"}];

/* 
should return a 5-item array, like ["yellow", "orange", "pink", "blue", "red"]
*/

const grabColor = (inputArray) => {
    // finish the function!

} 

//testing!!
console.log("should return ['yellow', 'orange', 'pink', 'blue', 'red']", grabColor(testArray));

/* PART B – create a function that takes in 2 parameters, 'month' and 'day' and returns 'month.day' as a decimal
            following the math below!

A: multiply MONTH by 7.
B: subtract 1 from the result in A.
C: multiply the result in B times 13. 
D: Add DAY to the result from C.
E: Add 3 to the result from D.
F: Multiply the result from E * 11. 
G: Subtract MONTH from F. 
H: Subtract DAY from g. 
I: Divide H by 10.
J: Add 11 to I. 
K: Divide J by 100.

write 3 console.log tests to evaluate the output of your function!
*/