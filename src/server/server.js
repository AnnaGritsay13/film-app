export default class Server {

      getMovies = async () => {
    const moviess = await fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=50")
    return moviess.json();
  }
  
}