import React, {useState, useEffect} from 'react';
import getTwoRandomActorIds from './game-function';
import TMDBService from './get-movie';

export default function Select() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    (async () => {
      setMovies(await TMDBService.getMoviesForActor(getTwoRandomActorIds()[0]))
    })()
  }, [])
  return <select> {movies.map(movie => <option>{movie.title}</option>)} </select>
}