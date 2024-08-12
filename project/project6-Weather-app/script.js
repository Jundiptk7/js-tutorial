document.getElementById("get-weather-btn").addEventListener("click", getWeather);

async function getWeather() {
  const cityName = document.getElementById("city-input").value;
  const apiKey = "6cb9fb5fa3d1437cd5efc05ee6c84712";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    displayError(error.message);
  }
}

function displayWeather(data) {
  document.getElementById("city-name").textContent = `City: ${data.name}`;
  document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}c`;
  document.getElementById("description").textContent = `Description: ${data.weather[0].description}`;
  document.getElementById("error-message").textContent = "";
}

function displayError(message) {
  document.getElementById("city-name").textContent = "";
  document.getElementById("temperature").textContent = "";
  document.getElementById("description").textContent = "";
  document.getElementById("error-message").textContent = message;
}
