/* CONTROL STRUCTURES

hi team – in this file we'll go over key data structures (objects and array) used in d3.js! 

THIS IS THE SOLUTIONS DOC – SKELETON CODE CAN BE FOUND AT structs_skel.js
*/

// first, print statements (aka the only debugger you will use for literally every language) –>
console.log('hi js world!') 
console.log("\n")

/* 00 – OBJECTS

objects are the foundation of how javascript stores and interacts with data, allowing us to MODEL entities
and their properties.

syntactically equivalent to a Python dictionary, js objects similarly mirror css property:value notation!

*/

let envision_obj = {
    pc: "Izzy", 
    pls: ['Maira', 'Courtney'],
    num_students: 7, 
    creative_course: true,
    tech_course: true
}

console.log(envision_obj)

// ANY datatype can be a value of an object's property, including objects!
// nested objects allow us to more realistically represent complex irl structures

let forge_obj = {
    courses: ['Source', 'Node', 'Vector', 'Wireframe', 'Envision'],
    best_course: envision_obj,
    course_directors: {
        names: ['Carter', 'Christian'], 
        are_4thyears: true
    },
    street_addy: 'Elliewood'
}

console.log(forge_obj)

/* 00 – ACTIVITY 1

create an object with >5 properties of at least 2 different data types to model an irl entity –>
*/

// create your obj here

// console.log the obj 


/* 00 – ACTIVITY 2

create a nested object, either by adding or calling the object you created above –>
*/

// create your obj here

// console.log the obj
