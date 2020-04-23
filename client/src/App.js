import React, { useState } from 'react';
import { Route } from "react-router-dom";
import SavedList from './Movies/SavedList';
import MoviesPage from "./Movies/MoviesPage";
import MoviePage from "./Movies/MoviePage";


const App = () => {
  const [savedList, setSavedList] = useState([]);
  
  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route path="/" exact component={MoviesPage} />
        <Route path="/movies/:id" component={MoviePage} />
      </div>
    </div>
  );
};

export default App;
