/* SVG 

hi team - in this file, we'll be learning how to add things that aren't classic html elements
to our page (circles, rectangles, shapes)!

this is the SKELETON doc – for the SOLUTIONS code, go to svg.js
*/

// to make any SVG elements, we need to first add an svg canvas. 

/* we could do this through the svg tag in our HTML markup, like 
<svg width = 800 height = 400></svg>
but most of the time we'll do it using D3 to append elements to the body
*/

// now, we are able to add additional SVG elements into this container. 

// we can append RECTANGLES (rects), which we will use for creating bar charts, etc. 
// and using our .attr function, style them!


// by default, you can see that this rectangle is placed with its top corner at the top left of the SVG box.

// this is the coordinate 0,0, and it is where all elements will appear unless you specifically set their coordinates to a different location. 

// we can use .attr("x") and .attr("y") to move around the square to various places on the coordinate plane. 


// to reiterate, higher x means the rectangle moves progressively to the right, and higher y means it moves down. 
// this is anti-thesis to the carthesian coordinates we learned b4
// 0,0 is in the top right corner. 

// COMMON ERROR ALERT! SVG will allow you to push your shapes right off the canvas, where they won't even display anymore. Don't do this!



// fixing it: 


// SVG elements have both fill (their background-color) and stroke (outline/border) properties. 




/* other elements: CIRCLES
   - Properties here: 
    -  cx: x position of the circle center
    -  cy: y position of the circle center 
    -  r: radius of the circle
*/



// same properties 


// note the "overlap" here. 

// we can also add: LINES!

// x1: x position of the first endpoint of th eline
// x2: x position of the second endpoint of the line 
// y1 and y2 are the same way.  

// THIS IS WHERE THE SVG COORDINATE PLANE SUCKS SUPER HARD

// we determine the stroke-width the same way 


// and finally, we can also add "text" 