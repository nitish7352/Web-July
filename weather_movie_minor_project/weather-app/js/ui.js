export const showStatus = (message, isError = false) => {
  const status = document.querySelector("#status");
  status.textContent = message;
  status.style.color = isError ? "#dc2626" : "#475569";
};

export const renderWeather = (data) => {
  const { name, main, weather, wind } = data;
  const result = document.querySelector("#weatherResult");

  result.innerHTML = `
    <div class="weather">
      <h2>${name}</h2>
      <div class="temp">${Math.round(main.temp)}°C</div>
      <div class="condition">${weather[0].description}</div>
      <div class="details">
        <div class="detail"><strong>Feels Like</strong><br>${Math.round(main.feels_like)}°C</div>
        <div class="detail"><strong>Humidity</strong><br>${main.humidity}%</div>
        <div class="detail"><strong>Wind Speed</strong><br>${wind.speed} m/s</div>
        <div class="detail"><strong>Pressure</strong><br>${main.pressure} hPa</div>
      </div>
    </div>
  `;
};
