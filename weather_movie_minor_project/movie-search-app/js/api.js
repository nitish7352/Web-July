import { API_KEY, BASE_URL } from "./config.js";

export const searchMovies = async (query) => {
        async function getMovie(movieName) {
        let url = `http://www.omdbapi.com/?t=${movieName}&apikey=fcc03078`;

        try {
          // Getting data from API
          let response = await fetch(url);
          let data = await response.json();

          console.log(data);

          if (data.Response === "True") {
            console.log(`Title ${data.Title}`);
            console.log(`Year ${data.Year}`);
            console.log(`Plot ${data.Plot}`);
            console.log(`Poster ${data.Poster}`);
          } else {
            alert("Movie Not Found");
          }
        } catch (error) {
          console.log("Error Fetching Movie", error);
        }
      }

    };


export const getMovieDetails = async (imdbID) => {
  const url = `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=short`;
  const response = await fetch(url);

  if (!response.ok) throw new Error("Could not load movie details.");

  const data = await response.json();
  if (data.Response === "False") throw new Error(data.Error || "Details unavailable.");

  return data;
};
