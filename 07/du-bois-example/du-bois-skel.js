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
    

    

    // SVG TIME
    
    // GLOBAL VARS
    let Y_SCALE = 75
    let Y_BUMP = 25

    // our first data-join will be adding the rectangles to represent 'rent'


    // next up is d.food


    // and now clothes!


    // and taxes?


    // and finally, other should take us to the end of the svg


    /* next up, our text joins
    */

})