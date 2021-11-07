/* SCALES

hi team, in this file we'll go over how to automatically
scale our data ranges so it stays within the svg boundaries

this is the SKELETON DOC – SOLUTIONS CODE is located at scales.js

*/

let data = [
    {course:'Node', type:'Technical', students:19},
    {course:'Wireframe', type:'Creative', students:15},
    {course:'Vector', type:'Creative', students:15},
    {course:'Envision', type:'Technical', students:13},
    {course:'Source Lite', type:'Technical', students:10},
    {course:'Source', type:'Technical', students:10},
    {course:'Node Lite', type:'Technical', students:12},
    {course:'Storyboard', type:'Creative', students:12},
    {course:'Convert', type:'Creative', students:7},
    {course:'Ignite', type:'Creative', students:10},
]

let data2 = [
    {course:'Source', type:'Technical', students:22},
    {course:'Wireframe', type:'Creative', students:12},
    {course:'Storyboard', type:'Creative', students:10},
    {course:'Node Pro', type:'Technical', students:15},
    {course:'Source Lite', type:'Technical', students:11},
    {course:'Node', type:'Technical', students:23},
    {course:'Node Lite', type:'Technical', students:15},
    {course:'Vector', type:'Creative', students:12},
    {course:'Convert B', type:'Creative', students:9},
    {course:'Convert A', type:'Creative', students:15},
]

let data3 = [
    {course:'Spark', type:'Creative', students:22},
    {course:'Wireframe', type:'Creative', students:8},
    {course:'Envision', type:'Technical', students:40},
    {course:'Hustle', type:'Creative', students:24},
    {course:'Source', type:'Technical', students:7},
    {course:'Node', type:'Technical', students:23},
    {course:'Convert', type:'Creative', students:15},
]



//Select the body
const body = d3.select("body");

//Append our svg canvas to the body.
const svg = body.append("svg")
            .attr("width", 600)
            .attr("height", 600)
            .style("border", "1px solid grey")

//Make our colordeterminer function:
const colorDeterminer = (type) => {
    if (type=='Creative') {
        return "#FF6E6A"
    } else if (type == 'Technical') {
        return "#8738E5"
    } 
}

/* START LESSON HERE! 

*/

let transitionDraw = (dataset) => {
    // find max with max(dataset, function)
    

    // define a linear x scale
    
                // define the current data domain 
                
                // define the range to map to
                
    
    // define a band scale for y
    
                // define the current data domain
                // for band scale, array of objects
                
                // define the range to map to
                
                // define inner and outer spacing for bands
                
    // join bars
    
                    // call yScale and pass in data object for y
                    
                    // height = bandwith (see diagram)
                    
                    
                    // call xScale and pass in d.students for width

    // join labels             
    
                    // y position of labels is dependent on yscale and bandwith
                    // of rectangles
                    

    // join numbers
    
                        // y position of numbers is dependent on yscale and bandwith
                        // of rectangles

                        // x position of numbers is dependent on width defined by
                        // xScale of rectangles
                        
}

// append buttons 


// attach event listeners

