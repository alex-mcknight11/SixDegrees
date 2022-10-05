import actors from "actor-array";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getTwoRandomActorIds() {
  const i = getRandomInt(actors.length);
  const j = getRandomInt(actors.length);
    while (i == j){
    j = getRandomInt(actors.length);}
    return [actors[i], actors[j]];
}
