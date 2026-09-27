import { getWeather } from "./api.js";
import { renderWeather, showStatus } from "./ui.js";

const form = document.querySelector("#weatherForm");
const input = document.querySelector("#cityInput");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = input.value.trim();
  if (!city) return;

  showStatus("Loading weather...");
  document.querySelector("#weatherResult").innerHTML = "";

  try {
    const data = await getWeather(city);
    renderWeather(data);
    showStatus("");
  } catch (error) {
    showStatus(error.message, true);
  }
});
