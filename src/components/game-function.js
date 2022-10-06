// import ReactDOM from 'react-dom/client';
// import reportWebVitals from '../reportWebVitals';
import actorList from './actor-list';
import actorArray from './actor-array';
import TMDBService from './get-movie';


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
  console.log(actors[i], actors[j])
  return [actors[i], actors[j]];
}

TMDBService.getMoviesForActor([0])
TMDBService.getActorsForMovie([0])