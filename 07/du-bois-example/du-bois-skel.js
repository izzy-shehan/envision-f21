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
    // .map() applies our function to ever object (d) in our dataset
    data.map((d) => {
        d.average = +d.average
        d.rent = +d.rent
        d.food = +d.food
        d.clothes = +d.clothes
        d.taxes = +d.taxes
        d.other = +d.other
    })

    console.log(data)

    // SVG TIME
    let svg = d3.select('body').append('svg')
                    .attr('id', 'du-bois')
                    .attr('width', 800)
                    .attr('height', 600)
                    .style('border', '1px solid navy')
                    .style('margin', 20)

    // our first data-join will be adding the rectangles to represent 'rent'
    rent_rects = svg.selectAll('.rent')
                    .data(data)
                    .join('rect')
                    .classed('rent', true)
                    .attr('height', 40)
                    // since all rects combined add to 100 and our svg is 800, we can scale by 8
                    .attr('width', (d) => 8*d.rent)
                    .attr('y', (d,i) => i*75+25)
                    .style('fill', colorPalette.rent)

    // next up is d.food
    food_rects = svg.selectAll('.food')
                    .data(data)
                    .join('rect')
                    .classed('food', true)
                    .attr('height', 40)
                    .attr('width', (d) => 8*d.food)
                    .attr('x', (d) => 8*d.rent)
                    .attr('y', (d,i) => i*75+25)
                    .style('fill', colorPalette.food)

    // and now clothes!
    clothes_rects = svg.selectAll('.clothes')
                        .data(data)
                        .join('rect')
                        .classed('clothes', true)
                        .attr('height', 40)
                        .attr('width', (d) => 8*d.clothes)
                        .attr('x', (d) => 8*(d.food + d.rent))
                        .attr('y', (d,i) => i*75+25)
                        .style('fill', colorPalette.clothes)

    // and taxes?
    tax_rects = svg.selectAll('.taxes')
                    .data(data)
                    .join('rect')
                    .classed('taxes', true)
                    .attr('height', 40)
                    .attr('width', (d) => 8*d.taxes)
                    .attr('x', (d) => 8*(d.rent+d.clothes+d.food))
                    .attr('y', (d,i) => i*75+25)
                    .style('fill', colorPalette.taxes)

    // and finally, other should take us to the end of the svg
    other_rects = svg.selectAll('.other')
                    .data(data)
                    .join('rect')
                    .classed('other', true)
                    .attr('height', 40)
                    .attr('width', (d) => 8*d.other)
                    .attr('x', (d) => 8*(d.taxes+d.clothes+d.food+d.rent))
                    .attr('y', (d,i) => i*75+25)
                    .style('fill', colorPalette.other)

    /* next up, our text joins
    */

    const asPercent = (n) => n < 1 ? '' : n+"%"

    rent_text = svg.selectAll('.rent-text')
                    .data(data)
                    .join('text')
                    .classed('rent-text bar-text', true)
                    .text((d) => asPercent(d.rent))
                    .attr('x', (d) => 4*d.rent)
                    .attr('y', (d,i) => i*75+50)

    food_text = svg.selectAll('.food-text')
        .data(data)
        .join('text')
        .classed('food-text bar-text', true)
        .text((d) => asPercent(d.food))
        .attr('x', (d) => 4*d.food+8*d.rent)
        .attr('y', (d,i) => i*75+50)

    clothes_text = svg.selectAll('.clothes-text')
        .data(data)
        .join('text')
        .classed('clothes-text bar-text', true)
        .text((d) => asPercent(d.clothes))
        .attr('x', (d) => 8*d.food+8*d.rent+4*d.clothes)
        .attr('y', (d,i) => i*75+50)

    taxes_text = svg.selectAll('.taxes-text')
        .data(data)
        .join('text')
        .classed('taxes-text small-bar-text', true)
        .text((d) => asPercent(d.taxes))
        .attr('x', (d) => 8*d.food+8*d.rent+8*d.clothes+4*d.taxes)
        .attr('y', (d,i) => i*75+50)
        
    other_text = svg.selectAll('.other-text')
        .data(data)
        .join('text')
        .classed('other-text small-bar-text', true)
        .text((d) => asPercent(d.other))
        .attr('x', (d) => 8*d.food+8*d.rent+8*d.clothes+8*d.taxes+4*d.other)
        .attr('y', (d,i) => i*75+50)
    
    svg.style('border', '')
})