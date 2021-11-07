let node_data = [
    {type:'Technical', students:19, instructor:'Ishaan'},
    {type:'Technical', students:15, instructor:'Ishaan'},
    {type:'Technical', students:8, instructor:'Ishaan'},
    {type:'Technical', students:12, instructor:'Ben'}
]

let envision_data = [
    {type:'Technical', students:7, instructor:"Izzy"},
    {type:'Technical', students:14, instructor:"Ben"},
    {type:'Technical', students:0, instructor:null},
    {type:'Technical', students:0, instructor:null}
]

wireframe_data = [
    {type:'Creative', students:14, instructor:"Sid"},
    {type:'Creative', students:18, instructor:"Charlotte"},
    {type:'Creative', students:12, instructor:"Shawn"},
    {type:'Creative', students:10, instructor:"Emmett"},
]

SVG_HEIGHT = 600
SVG_WIDTH = 600
TECH_COLOR = '#7794ff'
CREATE_COLOR = '#ffc43d'

let colorIs = (type) => {
    if (type == 'Technical') {
        return TECH_COLOR
    } else {
        return CREATE_COLOR
    }
}

let newInstructor = (dataset, i) => {
    console.log(dataset)
    let bool = (dataset[3].instructor == null)
    if(i == 3) {
        if (bool) {
            return false
        }
        return true
    } else if (dataset[i].instructor != dataset[i+1].instructor) {
        console.log(dataset[i].instructor)
        return true
    } else {
        return false
    }
}

let testInstructor = (dataset, i) => {
    let bool = (dataset[3].instructor == null)
    if(i == 3) {
        if (bool) {
            return ''
        }
        return 'instructor'
    } else if (dataset[i].instructor != dataset[i+1].instructor) {
        console.log(dataset[i].instructor)
        return 'instructor'
    } else {
        return ''
    }
}

let body = d3.select('body')

let svg = body.append('svg')
            .attr('width', 600)
            .attr('height', SVG_HEIGHT)
            .style('border', '1px solid black')

let buttonDiv = body.append('div')
                    .attr('id', 'button-div')

let nodeButton = buttonDiv.append('button')
                            .attr('id', 'node-button')
                            .text('node')

let envButton = buttonDiv.append('button')
                            .attr('id', 'env-button')
                            .text('envision')

let wireButton = buttonDiv.append('button')
                            .attr('id', 'wire-button')
                            .text('wireframe')
                
// API LESSON PLAN

let draw = (dataset) => {
    svg.selectAll('.course-data')
    .data(dataset)
    .join('circle')
    .classed('course-data', true)
    .attr('cx', (d,i) => SVG_WIDTH-i*150-75)
    .attr('cy', (d) => SVG_HEIGHT-(d.students*10)-10)
    .attr('r', 8)
    .style('fill', (d) => colorIs(d.type))
    .classed('instructor', (d,i) => newInstructor(dataset,i))
}

nodeButton.on('click', () => draw(node_data))
envButton.on('click', () => draw(envision_data))
wireButton.on('click', () => draw(wireframe_data))

let transitionDraw = (dataset) => {
    svg.selectAll('.course-data')
    .data(dataset)
    .join('circle')
    .classed('course-data', true)
    .attr('cx', (d,i) => SVG_WIDTH-i*150-75)
    .attr('r', 8)
    .style('fill', (d) => colorIs(d.type))
    .classed('instructor', (d,i) => newInstructor(dataset,i))
    .transition().duration(500)
    .attr('cy', (d) => SVG_HEIGHT-(d.students*10)-10)
}

nodeButton.on('click', () => transitionDraw(node_data))
envButton.on('click', () => transitionDraw(envision_data))
wireButton.on('click', () => transitionDraw(wireframe_data))
