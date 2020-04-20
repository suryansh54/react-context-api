import React from "react";


const Movie = ({ name, price, id }) => {
  return (
    <>
      <div>ID: {id}</div>
      <div>Name: {name}</div>
      <div>Price: {price}</div>
    </>
  );
};

export default Movie;
