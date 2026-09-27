import { API_KEY, BASE_URL } from "./config.js";

export const searchMovies = async (query) => {
  const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Movie API request failed.");
  }

  const data = await response.json();

  if (data.Response === "False") {
    throw new Error(data.Error || "No movies found.");
  }

  return data.Search || [];
};


export const getMovieDetails = async (imdbID) => {
  const url = `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=short`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Could not load movie details.");
  }

  const data = await response.json();

  if (data.Response === "False") {
    throw new Error(data.Error || "Details unavailable.");
  }

  return data;
};
