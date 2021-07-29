import React from "react";
import { actors } from "../data";

function Actors() {
  const mappedActors = actors.map(actor => {
    return(
      <div key={actor.name}>
        <h3>{actor.name}</h3>
        <ul>
          <h3>Movies</h3>
          {actor.movies.map(movie => <li key={movie}>{movie}</li>)}
        </ul>
      </div>
    )
  })
  
  return (
    <div>
      <h1>Actors Page</h1>
      {mappedActors}
    </div>
  );
}

export default Actors;
