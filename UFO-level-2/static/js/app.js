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

// Fucntion to find unique values
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }


// cities drop down
cities = tableData.map(entry => entry.city);

unique_cities = cities.filter(onlyUnique);
var cityElement = d3.select("#City_Filter");
unique_cities.forEach((city)=>{
    var currentcity = cityElement.append("option");
    currentcity.text(city);
    currentcity.property("value", city);
})

// State Drop drown
states = tableData.map(entry => entry.state);

unique_states = states.filter(onlyUnique);
var stateElement = d3.select("#State_Filter");
unique_states.forEach((state)=>{
    var currentcity = stateElement.append("option");
    currentcity.text(state);
    currentcity.property("value", state);
})

// Country Drop drown
countires = tableData.map(entry => entry.country);

unique_countries = countires.filter(onlyUnique);
var countryElement = d3.select("#Country_Filter");
unique_countries.forEach((country)=>{
    var currentcountry = countryElement.append("option");
    currentcountry.text(country);
    currentcountry.property("value", country);
})

// Shape Drop drown
states = tableData.map(entry => entry.state);

unique_states = states.filter(onlyUnique);
var stateElement = d3.select("#State_Filter");
unique_states.forEach((state)=>{
    var currentcity = stateElement.append("option");
    currentcity.text(state);
    currentcity.property("value", state);
})


// Filtered Table
var button = d3.select("button");
var form = d3.select("form");

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter(){
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var cityValue = cityElement.property("value");
    var stateValue = stateElement.property("value");

    var filteredData = tableData
    filteredData = filteredData.filter(city => city.city === cityValue)
    filteredData = filteredData.filter(state => state.state === stateValue)

    
    if (inputValue!=""){
        filteredData = filteredData.filter(date => date.datetime === inputValue);
    }

    tbody.html("");

    filteredData.forEach((ufo_sighting)=>{
        var row = tbody.append("tr");
        Object.entries(ufo_sighting).forEach(([key,value])=>{
            var cell = row.append("td");
            cell.text(value)
        });
    });    
}
