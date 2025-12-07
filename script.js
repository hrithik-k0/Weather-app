const apiKey = "34576fd60c0f4f8890b83144250712";
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city);

    if (!response.ok) {
      document.querySelector(".city").innerHTML = "City Not Found";
      document.querySelector(".temp").innerHTML = "--°C";
      document.querySelector(".humidity").innerHTML = "--%";
      document.querySelector(".wind").innerHTML = "--";
      return;
    }

    const data = await response.json();

    // Update text values
    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = data.current.temp_c + "°C";
    document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
    document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/h";

    // Auto weather icon
    const weatherIcon = document.querySelector(".weather-icon");
    weatherIcon.src = "https://" + data.current.condition.icon.replace("//", "");
    
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// Optional: Press Enter to search
searchBox.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});