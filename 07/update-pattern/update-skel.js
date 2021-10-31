/* UPDATE PATTERN

hi team, in this file we'll learn how to transition between data sources and add rly easy
animations!

this is the SKELETON DOC – SOLUTIONS CODE is located at update.js
*/

// let's revisit lab's exercise! but now, we have 3 different data sources to switch between
let data = [
    {course:'Node', type:'Technical', students:19},
    {course:'Wireframe', type:'Creative', students:15},
    {course:'Vector', type:'Creative', students:15},
    {course:'Envision', type:'Technical', students:13},
    {course:'Source Lite', type:'Technical', students:10},
    {course:'Source', type:'Technical', students:10},
    {course:'Node Lite', type:'Technical', students:8},
    {course:'Storyboard', type:'Creative', students:8},
    {course:'Convert', type:'Creative', students:8},
    {course:'Ignite', type:'Creative', students:6},
]

let data2 = [
    {course:'Source', type:'Technical', students:22},
    {course:'Wireframe', type:'Creative', students:12},
    {course:'Storyboard', type:'Creative', students:10},
    {course:'Node Pro', type:'Technical', students:15},
    {course:'Source Lite', type:'Technical', students:7},
    {course:'Node', type:'Technical', students:23},
    {course:'Node Lite', type:'Technical', students:15},
    {course:'Vector', type:'Creative', students:12},
    {course:'Convert B', type:'Creative', students:9},
    {course:'Convert A', type:'Creative', students:15},
]

let data3 = [
    {course:'Spark', type:'Creative', students:22},
    {course:'Wireframe', type:'Creative', students:8},
    {course:'Storyboard', type:'Creative', students:18},
    {course:'Hustle', type:'Creative', students:24},
    {course:'Source', type:'Technical', students:7},
    {course:'Node', type:'Technical', students:23},
    {course:'Convert', type:'Creative', students:15},
]

/*  we'll do everything we normally do, but with a fun lil caveat –>

we're going to create a generic draw function so we can pass in different data references

we'll call this function draw(data), and we call this to redraw our viz depending on the data parameter!
*/

/* first, let's do the actions we can do outside of the draw function 
(aka, things we need to do only once)
*/

let body = d3.select('body')

let svg = body.append('svg')
            .attr('width', 750)
            .attr('height', 700)

let colorIs = (type) => {
    if (type == 'Creative') {
        return '#FF6E6A'
    } else if (type == 'Technical') {
        return '#8738E5'
    }
}      

let y_scale = 70
let y_bump = 15
let text_bump = 40
let width_scale = 30

// everything else is DEPENDENT ON THE CHOICE OF DATASET
// thus, will go inside our draw function 

let draw = (dataset) => {
    // we'll do our data-joins inside so we can pass in any data and get an updated graph

    // rectangles
    

    // course labels
    

    // course numbers
    
}

// let's call our draw function and test it on our different datasets!
// draw(data2)
// draw(data)

/* ERROR ALERT – it is SUPER CRITICAL TO PASS IN THE GENERIC DATA PARAMETER TO YOUR JOINS
                 AND to class your joined elements

otherwise u ur parameter is literally useless and does nothing
*/

/* TOGGLING

making this toggleable is super easy! (all we have to do is attach some eventlisteners)
*/

// first, let's create a button div 


// now, let's append 3 buttons to the div


// event listener time!




// whew love it

/* D3 TRANSITIONS

d3 has a rly fun animation library to make transitions as smooth and slick as possible

to show this, we'll create a new draw function, adding on some animation functionality –>

    1 – animating the transition in bar width between datasets.
    2 – adding a matching transition in text x position between datasets. 
    3 – add an opacity transition so that the shift in course labels doesn't feel so abrupt.

go ahead and copy the draw transition above
*/

let transitionDraw = (dataset) => {
    // we'll do our data-joins inside so we can pass in any data and get an updated graph
    // for our transitions, we want to place them BEFORE THE METHOD CALL

    // rectangles
    let rects = svg.selectAll('.course-rect')
                    .data(dataset) 
                    .join('rect')
                    .classed('course-rect', true)
                    .attr('height', 40)
                    .attr('y', (d,i) => i*70+15)
                    .style('fill', (d) => colorIs(d.type))
                    // from current width, take 500ms to transition to data-specified width
                    

    // course labels
    let labels = svg.selectAll('.course-labels')
                    .data(dataset)
                    .join('text')
                    .attr('x', 5)
                    .attr('y', (d,i) => i*70+40)
                    .classed('course-labels', true)
                    // before the text change, take opacity to 0 in 250ms
                    
                    // change the text 'off-camera' 
                    
                    // transition back (smoothly) to opacity of 1
                    

    // course numbers
    let students = svg.selectAll('.course-numbers')
                        .data(dataset)
                        .join('text')
                        .attr('y', (d,i) => i*70+40)
                        .classed('course-numbers', true)
                        .text((d) => d.students)
                        // mimic x change of rectangles
                        
}           

// let's attach our new transition function