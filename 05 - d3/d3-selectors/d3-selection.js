/* DOM MANIPULATION WITH D3 

hi envision – intro the d3 time! in this file, we'll learn how to select and modify 
HTML and CSS elements with its easy-to-use selector library!

THIS IS THE SOLUTIONS DOC – SKELETON CODE CAN BE FOUND AT d3-skel.js
*/

/* 00 – SELECTING EXISTING ELEMENTS

to manipulate elements within the DOM (document object model), we first need to select and save them!

there are 2 main methods for selecting elements:
    – d3.select() <– gets the FIRST ELEMENT in the DOM that matches the pattern
    – d3.selectAll() <– gets ALL ELEMENTS in the DOM that matches the pattern
*/ 

// using d3.select, we can return the first paragraph in index.html
console.log('paragraph selected w d3 –>', d3.select('p'))

// using d3.selectAll, we can return all paragraph elements
console.log('all p elements selected w d3 –>', d3.selectAll('p'))
// this will become SUPER USEFUL when binding data

// with this selection, we can change the text and attributes of elements in a MUCH more effective way,
// with no need for for-loops. this is a d3-specific advantage over other DOM manipulation models!


/* 01 – STYLING SELECTED ELEMENTS 

there are 3 functions we can call to modify elements:
    – selection.text('replacement text')
    – selection.style('property-to-change', 'value-to-change-to')
    – selection.attr('attribute-type', 'attribute-to-add')
*/

// to modify elements, we can save them to a variable 
const paragraphs = d3.selectAll('p')

// and then use dot notation to change its text!
paragraphs.text('changing text of all 5 paragraphs at once!')

// using javascript's method chaining syntax, we can apply styling rules with minimal lines of code
paragraphs.style('font-family', 'Helvetica')
    .text('changing text pt 2')
    .style('border', '1px solid purple')
    .style('font-size', '.75em')
    .style('padding', '10px')
    .style('font-weight', '700')

/* this is visually equivalent to –> 

paragraphs.style('font-family', 'Helvetica')
paragraphs.text('changing text pt 2)
paragraphs.style('border', '1px solid purple')
paragraphs.style('font-size', '.75em')
paragraphs.style('padding', '10px')
paragraphs.style('font-weight', '700')

(but significantly less irritating to type out)
*/


/* 02 – SELECTION WITH CSS SELECTORS

(think css diner)

using css-style selectors like .class-name and #id-name, we can target specific elements!
*/

// CLASS
d3.selectAll('.special-paragraph')
    .text('these paragraphs have class .special-paragraph')

// ID
d3.selectAll('#best-paragraph-ever')
    .text('this one has the id #best-paragraph-ever')

// FANCY SELECTOR
d3.selectAll('div span')
    .style('font-size', '10px')
    .style('color', 'navy')
    .style('font-weight', '700')

// APPLY CLASSES
d3.selectAll('#add-class')
    .attr('class', 'purple-div')


/* 03 – ADDING NEW ELEMENTS

adding elements to the dom is a 2 step process:
    1. select the html body or div to append the element to
    2. call .append('element-type')
*/

// step 1 – select body
let body = d3.select('body')

// step 2 – append elements
body   
    .append('h3')
    .text('we added this h3 purely with d3!')
    .attr('class', 'purple-div')

body.append('a')
    .text('added this link with d3 too! good for us')
    .attr('href', 'https://google.com')


/* 04 – ADDING EVENT LISTENERS

event listeners are how we make our page INTERACTIVE – they let us define rules for 
element STATES (e.g. active, hovering, clicked)

to attach an event listener to an element, we use the .on() syntax and define an anonymous 
function within the call (like this –>)

() => stuff-to-do

ex. 1 –>

() => d3.select('body').style('background-color', 'lilac')
*/

// step 1 – create div to append buttons to
let buttonDiv = body.append('div')
                    .attr('id', 'button-div')

// step 2 – append buttons
const tealButton = buttonDiv.append('button')
                            .attr('id', 'teal-button')
                            .attr('class', 'button-event')
                            .text('change body color to teal')

const pinkButton = buttonDiv.append('button')
                            .attr('id', 'pink-button')
                            .attr('class', 'button-event')
                            .text('change body color to pink')

const orangeButton = buttonDiv.append('button')
                              .attr('id', 'orange-button')
                              .attr('class', 'button-event')
                              .text('change body color to orange')

// step 3 – attach event listener
tealButton.on('click', () => d3.select('body').style('background-color', 'teal'))
orangeButton.on('click', () => d3.select('body').style('background-color', 'orange'))
pinkButton.on('click', () => d3.select('body').style('background-color', 'pink'))

