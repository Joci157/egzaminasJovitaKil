import movieElement from "./movie";

const renderMovie = (movie) => {
  let movieDiv = document.createElement("div");
  movieDiv.className = "movie";

  const movieHTML = movieElement(
    movie.Poster,
    movie.Runtime,
    movie.Director,
    movie.Actors,
    movie.imdbRating
  );

  movieDiv.innerHTML = movieHTML;

  document.querySelector(".movies").appendChild(movieDiv);
};

export default renderMovie;
