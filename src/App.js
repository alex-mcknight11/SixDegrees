import React from 'react';
import Header from "./components/header";
import actors from './components/actor-array';
import MovieDropdown from './components/movie-dropdown';
import ActorPhoto from './components/actor-photo';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Movie-Dropdown />
      <ActorPhoto />
    </React.Fragment>
  );
}

export default App;