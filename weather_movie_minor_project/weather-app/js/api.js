import { API_KEY, BASE_URL } from "./config.js";

export const getWeather = async (city) => {
  const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.status === 404
      ? "City not found. Please check the city name."
      : "Unable to fetch weather data. Check your API key or try again.");
  }

  return response.json();
};
