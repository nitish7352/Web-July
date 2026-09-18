const fallbackPoster = "https://via.placeholder.com/300x450?text=No+Poster";

export const showStatus = (message, isError = false) => {
  const status = document.querySelector("#status");
  status.textContent = message;
  status.style.color = isError ? "#dc2626" : "#475569";
};

export const renderMovies = (movies) => {
  const container = document.querySelector("#movieResults");

  container.innerHTML = movies.map(({ Title, Year, Poster, imdbID }) => `
    <article class="movie">
      <img src="${Poster !== "N/A" ? Poster : fallbackPoster}" alt="${Title} poster">
      <div class="movie-content">
        <h2>${Title}</h2>
        <p>Release: ${Year}</p>
        <button class="details-btn" data-id="${imdbID}">View Details</button>
      </div>
    </article>
  `).join("");
};

export const renderDetails = (movie) => {
  const container = document.querySelector("#movieResults");
  const { Title, Year, Poster, imdbRating, Plot, Genre, Director } = movie;

  container.innerHTML = `
    <article class="movie">
      <img src="${Poster !== "N/A" ? Poster : fallbackPoster}" alt="${Title} poster">
      <div class="movie-content">
        <h2>${Title}</h2>
        <p><strong>Release:</strong> ${Year}</p>
        <p class="rating"><strong>IMDb:</strong> ${imdbRating}</p>
        <p><strong>Genre:</strong> ${Genre}</p>
        <p><strong>Director:</strong> ${Director}</p>
        <p><strong>Plot:</strong> ${Plot}</p>
      </div>
    </article>
  `;
};
