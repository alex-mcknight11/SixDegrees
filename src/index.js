import actors from "actor-array";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getTwoRandomActorIds() {
  const i = getRandomInt(actors.length);
  const j = getRandomInt(actors.length);
    return [actors[i], actors[j]];
    while (actors[i] == actors[j]){
      actors[i] = getRandomInt();
    }


function getActorsMovies() {
  const 
 


  //fix so same actors are not in random integer
}
