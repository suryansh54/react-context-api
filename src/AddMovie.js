import React, { useState, useContext } from "react";
import { MovieContext } from './MovieContext';


const AddMovie = () => {
  const [movies, setMovies] = useContext(MovieContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  const updateName = e => {
    setName(e.target.value);
  }

  const updatePrice = e => {
    setPrice(e.target.value);
  }

  const addMovie = e => {
    e.preventDefault();
    setMovies(prevMovie => [...prevMovie, { name: name, price: price, id: uuidv4() }]);
  }

  return (
    <form onSubmit={addMovie}>
      <label>Movie name</label>
      <input type="text" name="name" value={name} onChange={updateName} />
      <label>Movie price</label>
      <input type="text" name="price" value={price} onChange={updatePrice} />
      <button>Save movie</button>
    </form>
  );
};

export default AddMovie;