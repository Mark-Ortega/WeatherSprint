// alert();
navigator.geolocation.getCurrentPosition(success, errorFunction);

{
    coords: {
        latitude : 12.4321;
        longitude: 21.3632
    }
}

function success(position){
    console.log ("Our latitude: " + position.coords.latitude);
    console.log ("Our longitude: " + position.coords.latitude);
}

function errorFunction(error){
    console.log(error.message);
}

// Asynce Function 

async function callWeather(){
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid={API key}`);
    const data = await promise.json();
    console.log(data);
}

callWeather();