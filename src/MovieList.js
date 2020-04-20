import React, { useContext } from "react";
import Movie from './Movie';
import { MovieContext } from './MovieContext';
import AddMovie from './AddMovie';


const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <>
      <AddMovie />
      <ul className="movie-card">
        {movies.map(movie => (
          <li key={movie.id}>
            <Movie name={movie.name} price={movie.price} id={movie.id} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;