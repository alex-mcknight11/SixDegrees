import axios from 'axios';

export default class TMDBService {
  static async getMoviesForActor(actorID) {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/person/${actorID}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
      return (response.data.cast.map(credit => ({id:credit.id, title:credit.title}) ))
    }catch(e){}
  }
  static async getActorsForMovie(movieID) {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
      return (response.data.cast.map(credit => ({id:credit.id, name:credit.name}) ))
    }catch(e){}
  }
}