/* MULTI-STEP DATA VIZ AND EXTERNAL DATA FILES

hi team! in this file, we'll be recreating du bois's famous viz while
learning about data-pulling and .then().

this is the SKELLY CODE – SOLUTIONS DOC is located at du-bois.js
*/


// du bois's color palette
const colorPalette = {
    rent:"black",
    food:'#9D7C97',
    clothes:'#D98777',
    taxes:'#B1AAA5',
    other:'#CAB9A6'
}

// now, we can use our svg skillz to recreate this viz all at once!!!

/* first, we need to get our data. to pull data from an external data file 
(csv, json), we can call d3.FILE-TYPE –>

d3.csv(filepath).then((data) => {
    
    this syntax PUSHES the csv to the 'data' variable, and the function 
    will execute ONCE WE GET OUR DATA

    literally everything we do in this document must be written within these 
    curly braces

    (there r a lot of data calls, but d3.csv and d3.json are most applicable 2 us)
})

*/

d3.csv('du-bois.csv').then((data) => {

    // what does our data look like?
    console.log(data)

    // PRE-PROCESSING
    // as usual, we have an ARRAY OF OBJECTS. each income group is repped by a 
    // single obj in the array

    // oddly, all the numeric properties r stored as strings (boo). b4 we visualize
    // let's convert those 2 numbers!

    // to do so, we can use .map()
    // .map() applies our function to every object (d) in our dataset
    data.map((d) => {
        d.average = +d.average
        d.food = +d.food
        d.rent = +d.rent
        d.clothes = +d.clothes
        d.taxes = +d.taxes
        d.other = +d.other
    }
    )
    console.log(data)

    // SVG TIME
    let svg = d3.select('body').append('svg')
                .attr('width', 800)
                .attr('height', 800)
                .style('border', '1px solid navy')
    
    // GLOBAL VARS
    let Y_SCALE = 75
    let Y_BUMP = 25

    // our first data-join will be adding the rectangles to represent 'rent'
    svg.selectAll('.rent')
        .data(data)
        .join('rect')
        .attr('height', 40)
        .attr('width', (d) => 8*d.rent)
        .attr('x', 0)
        .attr('y', (d,i) => 75*i+25)
        .style('fill', colorPalette.rent)
        .classed('rent', true)

    // next up is d.food
    svg.selectAll('.food')
        .data(data)
        .join('rect')
        .attr('height', 40)
        .attr('width', (d) => 8*d.food)
        .attr('x', (d) => 8*d.rent)
        .attr('y', (d,i) => 75*i+25)
        .style('fill', colorPalette.food)
        .classed('food', true)

    // and now clothes!
    svg.selectAll('.clothes')
        .data(data)
        .join('rect')
        .attr('height', 40)
        .attr('width', (d) => 8*d.clothes)
        .attr('x', (d) => 8*(d.food+d.rent))
        .attr('y', (d,i) => 75*i+25)
        .style('fill', colorPalette.clothes)
        .classed('clothes', true)

    // and taxes?
    svg.selectAll('.taxes')
        .data(data)
        .join('rect')
        .attr('height', 40)
        .attr('width', (d) => 8*d.taxes)
        .attr('x', (d) => 8*(d.food+d.rent+d.clothes))
        .attr('y', (d,i) => 75*i+25)
        .style('fill', colorPalette.taxes)
        .classed('taxes', true)

    // and finally, other should take us to the end of the svg
    svg.selectAll('.other')
        .data(data)
        .join('rect')
        .attr('height', 40)
        .attr('width', (d) => 8*d.other)
        .attr('x', (d) => 8*(d.food+d.rent+d.clothes+d.taxes))
        .attr('y', (d,i) => 75*i+25)
        .style('fill', colorPalette.other)
        .classed('other', true)

    /* next up, our text joins
    */
    let toPercent = (n) => {
       if (n < 1) {
           return ''
       } else {
           return n+'%'
       }
    }

   svg.selectAll('.rent-text')
        .data(data)
        .join('text')
        .text((d)=>toPercent(d.rent))
        .attr('y', (d,i) => i*75+50)
        .attr('x', (d) => 4*d.rent)
        .classed('rent-text bar-text', true)

    svg.selectAll('.food-text')
        .data(data)
        .join('text')
        .text((d) => toPercent(d.food))
        .attr('y', (d,i) => i*75+50)
        .attr('x', (d) => 4*d.food+8*d.rent)
        .classed('food-text bar-text', true)

    svg.selectAll('.clothes-text')
        .data(data)
        .join('text')
        .text((d) => toPercent(d.clothes))
        .attr('y', (d,i) => i*75+50)
        .attr('x', (d) => 4*d.clothes+8*(d.rent+d.food))
        .classed('clothes-text bar-text', true)

    svg.selectAll('.tax-text')
        .data(data)
        .join('text')
        .text((d) => toPercent(d.taxes))
        .attr('y', (d,i) => i*75+50)
        .attr('x', (d) => 4*d.taxes+8*(d.rent+d.food+d.clothes))
        .classed('tax-text small-bar-text', true)

    svg.selectAll('.other-text')
        .data(data)
        .join('text')
        .text((d) => toPercent(d.other))
        .attr('y', (d,i) => i*75+50)
        .attr('x', (d) => 4*d.other+8*(d.rent+d.food+d.clothes+d.taxes))
        .classed('other-text small-bar-text', true)
})