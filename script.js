const apiKey = "3b746659abc4a1a9366665064b49ec83"; // ✅ Replace with your valid API key

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const weatherResult = document.getElementById("weatherResult");

  if (city === "") {
    weatherResult.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found.");
      }
      return response.json();
    })
    .then((data) => {
      weatherResult.innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>🌡 Temperature: ${data.main.temp} °C</p>
        <p>☁ Condition: ${data.weather[0].main}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>💨 Wind: ${data.wind.speed} m/s</p>
      `;
    })
    .catch((error) => {
      weatherResult.innerHTML = `<p>${error.message}</p>`;
    });
}
