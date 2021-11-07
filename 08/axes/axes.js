/* AXES & MARGIN CONVENTION

hi team, in this file we'll learn how to add axes and margins
to our viz!

this is the SOLUTIONS DOC – SKELETON CODE is located at axes-skel.js
*/

// first, let's pull in our data and color functions
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

const colorDeterminer = (type) => {
    if (type=='Creative') {
        return "#FF6E6A"
    } else if (type == 'Technical') {
        return "#8738E5"
    } 
}

/* our data viz process should start by declaring global vars
for our svg! */
let svgHeight = 600
let svgWidth = 600

let body = d3.select('body')

let svg = body.append('svg')
                .attr('width', svgWidth)
                .attr('height', svgHeight)

/* after creating our svg, we want to create an inner container
to hold our viz 

to do so, we can create margins that we want our container to exist
between*/
let margin = {top:30, right:30, left:30, bottom:45}

// using our margin object, we can calculate the new dimensions
// of our inner container
let innerHeight = svgHeight-margin.top-margin.bottom
let innerWidth = svgWidth-margin.right-margin.left

// our inner container will be a group element ('g')
// aka the parent object that we will append and manipulated data items to
// with similar attributes to an svg (but without the extreme bounds), this allows
// us to only translate our viz once (and not individual data elements)
let inner = svg.append('g')

// let's check our inner container –>
let containerOutline = inner.append('rect')
                            .attr('width', innerWidth)
                            .attr('height', innerHeight)
                            .style('fill', 'none')

let title = inner.append('text')
                .text('forge course stats')
                .classed('title', true)
// and translate it to fit the coordinates we've defined above
/* our translation syntax is –>
    .attr('transform', 'translate('x-margin', 'y-margin'))
*/
inner.attr('transform', "translate(" + margin.left+","+margin.top+")")

// with our global attributes defined, we can create our draw function
let transitionDraw = (dataset) => {
    // find max
    let max = d3.max(dataset, d=>d.students)

    // define a linear x scale
    xScale = d3.scaleLinear()
                // define the current data domain 
                .domain([0, max])
                // define the range to map to
                .range([0, innerWidth-30])
    
    // define a band scale for y
    yScale = d3.scaleBand()
                // define the current data domain
                // for band scale, array of objects
                .domain(dataset.map(d=>d.course))
                // define the range to map to
                .range([0, innerHeight])
                // define inner and outer spacing for bands
                .paddingInner(0.2)
                .paddingOuter(0.2)

    /* AXES

    to define an axis, we can use d3.axisPLACE().scale(scale)

    drawing the axis is a 3-step process:
        1. append a group element to the parent container
        2. call the axis with .call(axis)
        3. and translate to the proper y-position
    */ 
    let xAxis = d3.axisBottom().scale(xScale)
    let x = inner.selectAll('#x-axis')
    if (x.empty() == true) {
        x = inner.append('g').call(xAxis).attr('id', 'x-axis')
        x.attr("transform", "translate(0,"+innerHeight+")")
    } else {
        x.remove()
        x = inner.append('g')
            .attr("transform", "translate(0,"+innerHeight+")")
            .transition().duration(500)
            .call(xAxis).attr('id', 'x-axis')
    }
   
    /* EVERYTHING ELSE IS THE SAME (thank god) */

    // join bars
    let rects = inner.selectAll('.course-rect')
                    .data(dataset)
                    .join('rect')
                    .classed('course-rect', true)
                    // call yScale and pass in data object for y
                    .attr('y', (d) => yScale(d.course))
                    .style('fill', (d) => colorDeterminer(d.type))
                    // height = bandwith (see diagram)
                    .attr('height', (d) => yScale.bandwidth())
                    .transition().duration(500)
                    // call xScale and pass in d.students for width
                    .attr('width', (d) => xScale(d.students))

    let labels = inner.selectAll('.course-labels')
                    .data(dataset)
                    .join('text')
                    .classed('course-labels', true)
                    // y position of labels is dependent on yscale and bandwith
                    // of rectangles
                    .attr('y', (d) => yScale(d.course)+yScale.bandwidth()*.5+5)
                    .attr('x', 3)
                    .transition().duration(250)
                    .style('opacity', 0)
                    .transition().duration(0)
                    .text((d) => d.course)
                    .transition().duration(250)
                    .style('opacity', 1)

    let numbers = inner.selectAll('.course-numbers')
                        .data(dataset)
                        .join('text')
                        .text((d) => d.students)
                        .classed('course-numbers', true)
                        // y position of numbers is dependent on yscale and bandwith
                        // of rectangles
                        .attr('y', (d) => yScale(d.course)+yScale.bandwidth()*.5+5)
                        // x position of numbers is dependent on width defined by
                        // xScale of rectangles
                        .transition().duration(500)
                        .attr('x', (d) => xScale(d.students)+8)
}

transitionDraw(data)
// append buttons 
let buttonDiv = body.append('div')
                    .attr('id', 'buttonDiv')

let ogData = buttonDiv.append('button')
                        .attr('id', 'og-data')
                        .text('og data')
let twoData = buttonDiv.append('button')
                        .attr('id', 'two-data')
                        .text('data 2')
let threeData = buttonDiv.append('button')
                        .attr('id', 'three-data')
                        .text('data 3')

ogData.on('click', () => transitionDraw(data))
twoData.on('click', () => transitionDraw(data2))
threeData.on('click', () => transitionDraw(data3))
