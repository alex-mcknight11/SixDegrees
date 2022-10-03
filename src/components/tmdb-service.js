export default class TMDBService {
  static async getActors(name) {
    try {
      const response = await fetch(`https://api.themoviedb.org/api-key=${process.env.REACT_APP_API_KEY}`)
    }
  }

}