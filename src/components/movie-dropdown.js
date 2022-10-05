import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import TMDBService from './components/get-movie';

const movieOptions = [
{getMoviesForActor}
]
const MovieDropdown = () => (
  <Dropdown
    placeholder='Select Movie'
    fluid
    search
    selection
    options={movieOptions}
  />
)

export default MovieDropdown
