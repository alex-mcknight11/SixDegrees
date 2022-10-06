import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from '../reportWebVitals';
import actors from './actor-array';
import TMDBService from './get-movie';
import axios from 'axios';


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function getTwoRandomActorIds() {
  const i = getRandomInt(actors.length);
  let j = getRandomInt(actors.length);
    while (i === j){
    j = getRandomInt(actors.length);}
    return [actors[i], actors[j]];
}


TMDBService.getMoviesForActor(getTwoRandomActorIds()[0])
TMDBService.getActorsForMovie(100).then(console.log)