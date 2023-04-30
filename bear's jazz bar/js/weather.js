const weather = document.querySelector("#weather h2:last-child");
const city = document.querySelector("#weather h2:first-child");
const API_KEY = "6568bacd6e7c88a15d0d0503982323bf";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `You are in 
      ${data.name}`;
      weather.innerText = `Today is ${data.weather[0].main}
       ${data.main.temp}°C`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);