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
  };


// cities drop down
cities = tableData.map(entry => entry.city);
unique_cities = cities.filter(onlyUnique);
var cityElement = d3.select("#City_Filter");
blankoption=cityElement.append("option");
blankoption.text("City");
unique_cities.forEach((city)=>{
    var currentcity = cityElement.append("option");
    currentcity.text(city);
    currentcity.property("value", city);
});

// State Drop drown
states = tableData.map(entry => entry.state);
unique_states = states.filter(onlyUnique);
var stateElement = d3.select("#State_Filter");
blankoption=stateElement.append("option");
blankoption.text("State");
unique_states.forEach((state)=>{
    var currentstate = stateElement.append("option");
    currentstate.text(state);
    currentstate.property("value", state);
});

// Country Drop drown
countries = tableData.map(entry => entry.country);
unique_countries = countries.filter(onlyUnique);
var countryElement = d3.select("#Country_Filter");
blankoption=countryElement.append("option");
blankoption.text("Country");
unique_countries.forEach((country)=>{
    var currentcountry = countryElement.append("option");
    currentcountry.text(country);
    currentcountry.property("value", country);
});

// Shape Drop drown
shapes = tableData.map(entry => entry.shape);
unique_shapes = shapes.filter(onlyUnique);
var shapeElement = d3.select("#Shape_Filter");
blankoption=shapeElement.append("option");
blankoption.text("Shape");
unique_shapes.forEach((shape)=>{
    var currentshape = shapeElement.append("option");
    currentshape.text(shape);
    currentshape.property("value", shape);
});


// Filtered Table
var button = d3.select("button");
var form = d3.select("form");

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter(){
    // Prevent refresh
    d3.event.preventDefault();

    // Select input element
    var inputElement = d3.select("#datetime");
    
    // Selecting input and filter values
    var inputValue = inputElement.property("value");
    var cityValue = cityElement.property("value");
    var stateValue = stateElement.property("value");
    var countryValue = countryElement.property("value");
    var shapeValue = shapeElement.property("value");

    // Applying filters
    var filteredData = tableData

    //Option to leave filters blank
    if (inputValue!=""){
        filteredData = filteredData.filter(date => date.datetime === inputValue);
    };  
    if (cityValue!="City"){
        filteredData = filteredData.filter(city => city.city === cityValue);
    };
    if (stateValue!="State"){
        filteredData = filteredData.filter(state => state.state === stateValue);
    };
    if (countryValue!="Country"){
        filteredData = filteredData.filter(country => country.country === countryValue);
    };
    if (shapeValue!="Shape"){
        filteredData = filteredData.filter(shape => shape.shape === shapeValue); 
    };



    // Reset table
    tbody.html("");

    // Add selected rows after filter
    filteredData.forEach((ufo_sighting)=>{
        var row = tbody.append("tr");
        Object.entries(ufo_sighting).forEach(([key,value])=>{
            var cell = row.append("td");
            cell.text(value)
        });
    });    
}
