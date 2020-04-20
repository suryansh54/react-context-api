import React, { useContext } from "react";
import { MovieContext } from './MovieContext';


const Nav = (props) => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="navigation">
      <ul>
        <li>Movie database</li>
        <li>List of movies: {movies.length}</li>
      </ul>
    </div>
  );
};

export default Nav;