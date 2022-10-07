import React, {useState, useEffect} from 'react';
import getTwoRandomActorIds from './game-function';
import TMDBService from './get-movie';
// import SelectSearch from 'react-select-search';

export default function Select() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    (async () => {
      setMovies(await TMDBService.getMoviesForActor(getTwoRandomActorIds()[0].id))
    })()
  }, [])
  return <select> {movies.map(movie => <option>{movie.title}</option>)} </select>
}

//{/* <SelectSearch useState={useState} value="sv" name="movie" placeholder="Pick a Movie" /> */}