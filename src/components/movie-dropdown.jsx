import React from 'react'
import TMDBService from './components/get-movie';
import { Dropdown } from 'semantic-ui-react'

const movieOptions = [ 
  {key: TMDBService}
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
