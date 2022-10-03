import React, { useState } from 'react';

function Actors() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [Actors, setActors] = useState([]);
}

useEffect(() => {
  fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
    .then(response => response.json())
    .then((jsonifiedResponse) => {
        setTopStories(jsonifiedResponse.results)
        setIsLoaded(true)
      })
    .catch((error) => {
      setError(error)
      setIsLoaded(true)
    });
  }, [])

export default Actors
