import React, {useState, useEffect} from 'react';
import getTwoRandomActorIds from './game-function';
import TMDBService from './get-movie';

export default function currentSelect() {
    const [actor, setActor] = useState([])
    useEffect(() => {
      (async () => {
        setActor(await TMDBService.getActorForMovies(getTwoRandomActorIds()[0].name))
    })()
  }, [])
}