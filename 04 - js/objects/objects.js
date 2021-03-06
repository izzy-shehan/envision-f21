/* DATA STRUCTURES

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
    pl: "Izzy", 
    pcs: ['Maira', 'Courtney'],
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
    street_addy: 'Elliewood',
    was_on_fire: true,
}

console.log(forge_obj)
console.log('\n')

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


/* 01 – ACCESSING OBJECT PROPERTIES 
*/

// dot notation
console.log('what street is forge located on?', forge_obj.street_addy)

// bracket notation 
console.log('what street is forge located on?', forge_obj['street_addy'])

// to access nested properties, you can chain accessors!
console.log('what are CDs names?', forge_obj.course_directors.names)

// in bracket notation –>
console.log('pcs for best course?', forge_obj['best_course']['pcs'])

// to return ALL keys and values of an objects –>
console.log(Object.keys(forge_obj))
console.log(Object.values(forge_obj))
console.log(Object.entries(forge_obj))
console.log('\n')

/* 01 – ACTIVITY 1

using an object you created, use accessors to console.log() a coherent sentence describing it! 
(try to reference some nested properties)
*/

// ex. 1
let izzy_obj = {
    star_sign: 'sagittarius', 
    major: 'cs', 
    school: 'uva', 
    fave_bar: 'coupes', 
    is_sad: true
}

console.log('izzy is a ' + izzy_obj.star_sign + ' ' + izzy_obj.major + ' major at ' + izzy_obj.school)

// your turn!


console.log('\n')

/* 02 – ARRAYS

in d3, we work with ARRAYS of objects; in this section, we'll show you js syntax for accessing, indexing,
and manipulating arrays!
*/

let global_arr = [1, 2, 3, 4, 5]

// length is a super valuable property critical for iterating through the array (python = len(arr))
// in js, we can access that with the .length property!
console.log('len of global_arr', global_arr.length)

// accessing specific array indices uses bracket notation (don't forget arrays are 0-indexed)
console.log('first arr element', global_arr[0])
console.log('last arr element', global_arr[global_arr.length-1])

// since array elements can be objects, we can access those objects' properties by chaining array indices
// with object accessors

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

console.log('my go-to order is a ' + grit_drinks[0].size_in_oz + ' oz ' + grit_drinks[0].name + ' with ' + 
grit_drinks[0].milk_type + ' milk for $' + grit_drinks[0].price)

/* 02 – ACTIVITY 

for this exercise –>
    1. add an object to the grit_drinks array using either .push(obj) or grit_drinks[len] = obj 
    2. using bracket notation and object accessors, print a unique sentence about the second and last elements
       in the array
*/

// grit_drinks[3] 
let drink_3 = {
    name: 'iced coffee',
    milk_type: 'soy',
    size_in_oz: 16, 
    price: 3.50
}

grit_drinks[3] = drink_3
console.log(grit_drinks)

// grit_drinks.push()
let drink_4 = {
    name: 'high five', 
    milk_type: 'half and half',
    size_in_oz: 8, 
    price: 4.25
}

grit_drinks.push(drink_4)
console.log(grit_drinks)