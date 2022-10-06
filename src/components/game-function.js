import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from '../reportWebVitals';
import actorList from './actor-list';
import TMDBService from './get-movie';
import axios from 'axios';


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const actors = Object
.entries(actorList)
.map(([key, val]) => ({name: key, id: val}));

export default function getTwoRandomActorIds() {
  const i = getRandomInt(actors.length);
  let j = getRandomInt(actors.length);
    while (i === j){
    j = getRandomInt(actors.length);}
    return [actors[i], actors[j]];
}


TMDBService.getMoviesForActor(getTwoRandomActorIds(console.log)[0])
TMDBService.getActorsForMovie([]).then(console.log)