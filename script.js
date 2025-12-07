const apiKey = "f051fc4ed3c2b1bfe77f5378a93fc64d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
  const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
  var data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  // Change weather image based on main weather condition
  const weatherIcon = document.querySelector(".weather-icon");
  const weather = data.weather[0].main;  // e.g., "Clouds", "Rain", "Clear", etc.

  if (weather === "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (weather === "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (weather === "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (weather === "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (weather === "Mist") {
    weatherIcon.src = "images/mist.png";
  } else if (weather === "Snow") {
    weatherIcon.src = "images/snow.png";
  } else {
    // default image
    weatherIcon.src = "images/clear.png";
  }
}


searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})

