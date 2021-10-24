/* SVG 

this is the SOLUTIONS doc – for the SKELETON code, go to svg-skel.js

*/


//To make any SVG elements, we need to first add an svg canvas. 

/*We could do this through the svg tag in our HTML markup, like 
<svg width = 800 height = 400></svg>
but most of the time we'll do it using D3 to append elements to the body.
*/



//Now, we are able to add additional SVG elements into this container. 

//We can append RECTANGLES (rects), which we will use for creating bar charts, etc. 

//By default, you can see that this rectangle is placed with its top corner at the top left of the SVG box.

//This is the coordinate 0,0, and it is where all elements will appear unless you specifically set their coordinates to a different location. 

//We can use .attr("x") and .attr("y") to move around the square to various places on the coordinate plane. 


//To reiterate, higher x means the rectangle moves progressively to the right, and higher y means it moves down. 
//0,0 is in the top right corner. 

//COMMON ERROR ALERT! SVG will allow you to push your shapes right off the canvas, where they won't even display anymore. Don't do this!



//Fixing it: 


//SVG elements have both fill (their background-color) and stroke (outline/border) properties. 


/*Other elements: CIRCLES
   - Properties here: 
    -  cx: x position of the circle center
    -  cy: y position of the circle center 
    -  r: radius of the circle
*/



//Same properties 


//Note the "overlap" here. 

//We can also add: LINES!

//x1: x position of the first endpoint of th eline
//x2: x position of the second endpoint of the line 
//y1 and y2 are the same way.  

//We determine the stroke-width the same way 



//And finally, we can also add text. 