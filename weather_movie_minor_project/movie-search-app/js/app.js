import { searchMovies, getMovieDetails } from "./api.js";
import { renderMovies, renderDetails, showStatus } from "./ui.js";

const form = document.querySelector("#movieForm");
const input = document.querySelector("#movieInput");
const results = document.querySelector("#movieResults");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const query = input.value.trim();
  if (!query) return;

  showStatus("Searching movies...");
  results.innerHTML = "";

  try {
    const movies = await searchMovies(query);
    renderMovies(movies);
    showStatus(`${movies.length} movie(s) found.`);

    // Event delegation for dynamically created buttons.
    results.addEventListener("click", async (event) => {
      const button = event.target.closest(".details-btn");
      if (!button) return;

      showStatus("Loading movie details...");
      try {
        const movie = await getMovieDetails(button.dataset.id);
        renderDetails(movie);
        showStatus("");
      } catch (error) {
        showStatus(error.message, true);
      }
    }, { once: true });
  } catch (error) {
    showStatus(error.message, true);
  }
});
