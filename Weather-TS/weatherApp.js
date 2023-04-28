var API_Key = "7a01ab910036810cd95b8d212861cc2a";
var zipSubmit = document.getElementById("zipSubmit");
var displayData = document.getElementById("display");
var date = Date.now();
var currentDate = new Date(date);
var zipcodeEnter = document.getElementById("zipcodeEnter");
zipSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    var zipcode = document.getElementById("zipcode").value;
    var fetchURL = "https://api.openweathermap.org/data/2.5/weather?zip=".concat(zipcode, ",us&appid=").concat(API_Key, "&units=imperial");
    fetch(fetchURL)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var fetchData = "https://api.openweathermap.org/data/2.5/onecall?lat=".concat(data.coord.lat, "&lon=").concat(data.coord.lon, "&appid=").concat(API_Key, "&units=imperial");
        document.querySelector('#cityData').innerHTML = "City: " + data.name;
        document.querySelector('#dateData').innerHTML = "Date: " + currentDate.toDateString();
        document.querySelector('#tempData').innerHTML = "Temperature: " + Math.round(data.main.temp) + '°F';
        document.querySelector('#hiLoData').innerHTML = 'High of ' + Math.round(data.main.temp_max) + '°F' + ' and a low of ' + Math.round(data.main.temp_min) + '°F.';
        document.querySelector('#conditionData').innerHTML = "Condition: " + data.weather[0].main;
        document.getElementById("head").style.display = "none";
        displayData.style.display = "block";
    });
});
zipcodeEnter.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        var zipcode = zipcodeEnter.value;
        var fetchURL = "https://api.openweathermap.org/data/2.5/weather?zip=".concat(zipcode, ",us&appid=").concat(API_Key, "&units=imperial");
        fetch(fetchURL)
            .then(function (response) { return response.json(); })
            .then(function (data) {
            var fetchData = "https://api.openweathermap.org/data/2.5/onecall?lat=".concat(data.coord.lat, "&lon=").concat(data.coord.lon, "&appid=").concat(API_Key, "&units=imperial");
            document.querySelector('#cityData').innerHTML = "City: " + data.name;
            document.querySelector('#dateData').innerHTML = "Date: " + currentDate.toDateString();
            document.querySelector('#tempData').innerHTML = "Temperature: " + Math.round(data.main.temp) + '°F';
            document.querySelector('#hiLoData').innerHTML = 'High of ' + Math.round(data.main.temp_max) + '°F' + ' and a low of ' + Math.round(data.main.temp_min) + '°F.';
            document.querySelector('#conditionData').innerHTML = "Condition: " + data.weather[0].main;
            document.getElementById("head").style.display = "none";
            displayData.style.display = "block";
        });
    }
});
