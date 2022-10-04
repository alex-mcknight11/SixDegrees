import actors from 'actor-array';

export default class TMDBService {
  static async getMoviesFromActor(movies) {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/person/${}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    }
  }