// alert();
let apiKey = "9aee2f00e3758bf4630fb055cc21dd22";

navigator.geolocation.getCurrentPosition(success, errorFunction);

function success(position){
    console.log ("Our latitude: " + position.coords.latitude);
    console.log ("Our longitude: " + position.coords.longitude);
}

function errorFunction(error){
    console.log(error.message);
}

// Asynce Function 


async function callWeather(position){
    const promise = await fetch(`api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`);
    const data = await promise.json();
    console.log(data);
}

callWeather();