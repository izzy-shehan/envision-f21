/* UPDATE PATTERN

hi team, in this file we'll learn how to transition between data sources and add rly easy
animations!

this is the SOLUTIONS DOC – SKELETON CODE is located at update-skel.js
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

// everything else is DEPENDENT ON THE CHOICE OF DATASET
// thus, will go inside our draw function 

let draw = (dataset) => {
    // we'll do our data-joins inside so we can pass in any data and get an updated graph

    // rectangles
    let rects = svg.selectAll('.course-rect')
                    .data(dataset) 
                    .join('rect')
                    .classed('course-rect', true)
                    .attr('height', 40)
                    .attr('width', (d) => d.students*30)
                    .attr('y', (d,i) => i*70+15)
                    .style('fill', (d) => colorIs(d.type))

    // course labels
    let labels = svg.selectAll('.course-labels')
                    .data(dataset)
                    .join('text')
                    .text((d) => d.course)
                    .attr('x', 5)
                    .attr('y', (d,i) => i*70+40)
                    .classed('course-labels', true)

    // course numbers
    let students = svg.selectAll('.course-numbers')
                        .data(dataset)
                        .join('text')
                        .text((d) => d.students)
                        .attr('x', (d) => d.students*30+8)
                        .attr('y', (d,i) => i*70+40)
                        .classed('course-numbers', true)
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
let buttonDiv = body.append('div')

// now, let's append 3 buttons to the div
let og_data = buttonDiv.append('button')
                        .text('first dataset')
                        .attr('id', 'og-dataset')

let second_data = buttonDiv.append('button')
                            .text('second dataset')
                            .attr('id', 'second-dataset')

let third_data = buttonDiv.append('button')
                            .text('third dataset')
                            .attr('id', 'third-dataset')

// event listener time!
draw(data)

og_data.on('click', () => draw(data))
second_data.on('click', () => draw(data2))
third_data.on('click', () => draw(data3))

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
                    .transition().duration(500) 
                    .attr('width', (d) => d.students*30)

    // course labels
    let labels = svg.selectAll('.course-labels')
                    .data(dataset)
                    .join('text')
                    .attr('x', 5)
                    .attr('y', (d,i) => i*70+40)
                    .classed('course-labels', true)
                    // before the text change, take opacity to 0 in 250ms
                    .transition().duration(250)
                    .style('opacity', 0)
                    // change the text 'off-camera' 
                    .transition().duration(0)
                    .text((d) => d.course)
                    // transition back (smoothly) to opacity of 1
                    .transition().duration(250)
                    .style('opacity', 1)

    // course numbers
    let students = svg.selectAll('.course-numbers')
                        .data(dataset)
                        .join('text')
                        .attr('y', (d,i) => i*70+40)
                        .classed('course-numbers', true)
                        .text((d) => d.students)
                        // mimic x change of rectangles
                        .transition().duration(500) 
                        .attr("x", d=> d.students*30+8)
}           

og_data.on('click', () => transitionDraw(data))
second_data.on('click', () => transitionDraw(data2))
third_data.on('click', () => transitionDraw(data3))