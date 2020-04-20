import React from 'react';
import './App.css';
import { MovieProvider } from './MovieContext';
import Nav from './Nav';
import MovieList from './MovieList';

function App() {
  return (
    <MovieProvider>
      <div className="App">
          <Nav />
          <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
