import React from "react";
import { movies } from "../data";

function Movies() {
  const mappedMovies = movies.map(movie => {
    return (
      <div key={movie.title}>
        <h3>{movie.title}</h3>
        <p>Time: {movie.time}</p>
        <ul>
          <h4> Genres</h4>
          {movie.genres.map(genre=><li key={genre}>{genre}</li>)}
        </ul>
      </div>
    )
  })
  
  return (
    <div>
      <h1>Movies Page</h1>
      {mappedMovies}
    </div>
  );
}

export default Movies;
