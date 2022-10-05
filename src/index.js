import React from 'react';
import ReactDOM from 'react-dom/client';
import'./index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import actors from './components/actor-array';
import TMDBService from './components/get-movie';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getTwoRandomActorIds() {
  const i = getRandomInt(actors.length);
  let j = getRandomInt(actors.length);
    while (i === j){
    j = getRandomInt(actors.length);}
    return [actors[i], actors[j]];
}


TMDBService.getMoviesForActor(getTwoRandomActorIds()[0])
TMDBService.getActorsForMovie(21990).then(console.log)