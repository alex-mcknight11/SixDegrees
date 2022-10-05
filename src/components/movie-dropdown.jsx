  import React from 'react'
  import TMDBService from './get-movie';


  // const MovieDropdown = () => (
  //   <Dropdown
  //     placeholder='Select Movie'
  //     fluid
  //     search
  //     selection
  //     options={movieOptions}
  //   />
  // )

  // export default MovieDropdown

  const App = () => {
    const options = [
      { label: 'Movie', value: TMDBService },
    ];
  
    const [value, setValue] = React.useState('MovieSelect');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <div>
        <label>
          Select a Film
          <select value={value} onChange={handleChange}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>

      </div>
    );
  };
  
  export default App;
