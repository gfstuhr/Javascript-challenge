// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select Table
var table = d3.select("tbody");

//Add all Data to table
tableData.forEach((ufo_sighting)=>{
    var row = table.append("tr");
    Object.entries(ufo_sighting).forEach(([key,value])=>{
        var cell = row.append("td");
        cell.text(value)
    });
});

// Filtered Table
var button = d3.select("#filter-btn")
var form = d3.select("#datetime")

console.log(form)