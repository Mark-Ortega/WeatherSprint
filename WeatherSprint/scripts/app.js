// alert();
let apiKey = "9aee2f00e3758bf4630fb055cc21dd22";

navigator.geolocation.getCurrentPosition(success, errorFunction);



async function success(position){

    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`);
    const data = await promise.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "F°";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km";
}
function errorFunction(error){
    console.log(error.message);

    
}