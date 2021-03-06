// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select Table
var tbody = d3.select("tbody");

//Add all Data to table
tableData.forEach((ufo_sighting)=>{
    var row = tbody.append("tr");
    Object.entries(ufo_sighting).forEach(([key,value])=>{
        var cell = row.append("td");
        cell.text(value)
    });
});

// Filtered Table
var button = d3.select("#button");
var form = d3.select("form");

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter(){
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(date => date.datetime === inputValue);

    tbody.html("");

    filteredData.forEach((ufo_sighting)=>{
        var row = tbody.append("tr");
        Object.entries(ufo_sighting).forEach(([key,value])=>{
            var cell = row.append("td");
            cell.text(value)
        });
    });
}
