import React, { createContext, useState } from "react";


export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: '$10',
      id: 1
    },
    {
      name: 'Hello world',
      price: '$10',
      id: 2
    },
    {
      name: 'Lucifer',
      price: '$10',
      id: 3
    }
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
}
