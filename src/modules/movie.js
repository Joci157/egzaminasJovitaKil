const movie = (poster, runtime, director, actors, imdbRating) => {
  return `
                <img class="poster" src=${poster} />
                <div class="information" >
                    <p>Runtime: ${runtime}</p>
                    <p>Director: ${director}</p>
                    <p>Actors: ${actors}</p>
                    <p>IMDB Rating: ${imdbRating}</p>
                </div>
      
      `;
};

export default movie;
