const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "2c3d669176b7e77c94e08b5a68b1aaba";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
  }
  function onGeoError() {
    alert("Can't find you. No weather for you.");
    weather.innerText = "Can't find you";
  }
  
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);