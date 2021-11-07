/* SCALES

hi team, in this file we'll go over how to automatically
scale our data ranges so it stays within the svg boundaries

this is the SOLUTIONS DOC – SKELETON CODE is located at scales-skel.js

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
    // find max
    let max = d3.max(dataset, d=>d.students)

    // define a linear x scale
    xScale = d3.scaleLinear()
                // define the current data domain 
                .domain([0, max])
                // define the range to map to
                .range([0, 500])
    
    // define a band scale for y
    yScale = d3.scaleBand()
                // define the current data domain
                // for band scale, array of objects
                .domain(dataset.map(d=>d.course))
                // define the range to map to
                .range([0, 600])
                // define inner and outer spacing for bands
                .paddingInner(0.2)
                .paddingOuter(0.2)

    // join bars
    let rects = svg.selectAll('.course-rect')
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

    let labels = svg.selectAll('.course-labels')
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

    let numbers = svg.selectAll('.course-numbers')
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
                        .attr('x', (d) => xScale(d.students)+10)
}

// append buttons 
let buttonDiv = body.append('div')

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







