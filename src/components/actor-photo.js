import axios from 'axios';

export default class ActorPhoto {
  static async GetActorPhoto(actorID) {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/person/${actorID}/images?api_key=${process.env.REACT_APP_API_KEY}`)
      return (response.data.cast.map(credit => ({id:credit.id, title:credit.title}) ))
    }catch(e){}
    }
  }