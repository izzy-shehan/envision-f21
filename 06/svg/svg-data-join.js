let data = [
    {course:'Node', type:'Technical', students:19},
    {course:'Wireframe', type:'Creative', students:15},
    {course:'Envision', type:'Technical', students:7},
    {course:'Source Lite', type:'Technical', students:10},
    {course:'Source', type:'Technical', students:10},
    {course:'Node Lite', type:'Technical', students:8},
    {course:'Convert', type:'Creative', students:4},
]

let body = d3.select('body')

let svg = body.append('svg')
            .attr('width', 900)
            .attr('height', 700)

let colorIs = (type) => {
    if (type == 'Creative') {
        return '#FF6E6A'
    } else if (type == 'Technical') {
        return '#8738E5'
    }
}

svg.selectAll('rect')
    .data(data)
    .join('rect')
    .attr('height', 40)
    .attr('width', (d) => d.students*30)
    .attr('y', (d, i) => i*50+15)
    .style('fill', (d) => colorIs(d.type))

svg.selectAll('.course-labels')
    .data(data)
    .join('text')
    .text((d) => d.course)
    .attr('x', 4)
    .attr('y', (d, i) => i*50+40)
    .classed('course-labels', true)

svg.selectAll('.course-numbers')
    .data(data)
    .join('text')
    .text((d) => d.students)
    .attr('y', (d, i) => i*50+40)
    .attr('x', (d) => d.students*30+8)
    .classed('course-numbers', true)