// alert();

let weather = {
    apiKey : "9aee2f00e3758bf4630fb055cc21dd22",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=imperial&appid=" 
            + this.apiKey
            )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        // Extracts the name from the api
        const { name } = data;
        const { temp, humidity, feels_like, temp_min, temp_max } = data.main;
        const { speed } = data.wind;
        const { sunrise, sunset, country } = data.sys;
        const { lat, lon } = data.coord;
        console.log(name,temp,humidity,speed,sunrise,sunset,lat,lon)

        // Displaying content on page
        document.querySelector(".city").innerText = name + ", " + country;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "mp/h";
        document.querySelector(".sunrise").innerText = "Sunrise: " + sunrise;
        document.querySelector(".sunset").innerText = "Sunset: " + sunset;
        document.querySelector(".feels_like").innerText = "Feels Like: " + feels_like + "°F"; 
        document.querySelector(".temp_min").innerText = "Low Temp: " + temp_min + "°F"; 
        document.querySelector(".temp_max").innerText = "High Temp: " + temp_max + "°F"; 
       


console.log(data)


// 5 day forecast 
// let forecast = {
//     apiKey : "9aee2f00e3758bf4630fb055cc21dd22",
//     fetchForecast: function (lat, lon) {
//         fetch(
//             "api.openweathermap.org/data/2.5/forecast?lat="
//             + lat 
//             +"&lon="
//             + lon
//             + "&units=imperial&appid="
//             + this.apiKey
//             )
            
//         .then((response) => response.json())
//         .then((data) => this.displayForecast(data));
//         const { temp_min } = data[0];
//     },
//     displayForecast: function(data) {
//         document.querySelector(".temp_min1").innerText = "min temp: " + temp_min;
        
        
//     },
// };
// 5 day forecast end

        
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }


};









// Search Bar
document.querySelector(".search").addEventListener('keypress', function(e){
    if (e.key === 'Enter') {
        weather.search();
    }
});

weather.fetchWeather("Stockton");































// navigator.geolocation.getCurrentPosition(success, errorFunction);



// async function success(position){

//     let lat = position.coords.latitude;
//     let lon = position.coords.longitude;

//     const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`);
//     const data = await promise.json();
//     console.log(data);

//     showWeatherData(data);
// }
// function errorFunction(error){
//     console.log(error.message);


// }
// function showWeatherData(data){
//     let {humidity, sunrise, sunset, wind_speed} = data.current;
//}