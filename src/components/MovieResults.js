import React from "react";
import MovieResult from "./MovieResult";

function MovieResults({ movies }) {
  return (
    <div>
      <ul>
        {movies.map(movie => (
          <MovieResult key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default MovieResults;
