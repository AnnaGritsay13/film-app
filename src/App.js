import React, { Component } from "react";
import Spinner from "./components/spiner/spinner";
import Server from "./server/server";
import RenderMovie from "./components/renderMovie/renderMovie";

export default class App extends Component {

  server = new Server();

  state = {
    isLoadind: true,
    moviess: []
  }
  

  componentDidMount() {
    this.server.getMovies().then(movies => this.setState({ moviess: movies.data.movies, isLoadind: false }))
  }
  
  
  render() {
    const { isLoadind, moviess } = this.state;
    return <section className="container">
      {isLoadind ? <Spinner /> : <RenderMovie
        moviess={moviess}
      />}
      <div></div>
      </section>
  }
}

















// export default class App extends Component {

//   state = {
//     isLoadind: true,
//     moviess: []
//   }

//       getMovies = async () => {
//         const movies = await fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films", {
//     method: 'GET',
//     headers: {
//         'X-API-KEY': '9a5e9088-b7df-476d-a36f-5a11f525dadb',
//         'Content-Type': 'application/json',
//     },
//         })

//          return movies.json()
//       }
  
  
  
//   componentDidMount() {
//     this.getMovies().then((movies) => this.setState({ moviess: movies.items, isLoadind: false }))
 
    
//   }

  // renderMovie = () => {
  //   const { moviess } = this.state;
  //   return (
  //     <div>
  //       {moviess.map((movie) => {
  //           console.log(movie);
  //           <Movie
  //             id={movie.kinopoiskId}
  //             name={movie.nameRu}
  //             poster={movie.posterUrlPreview}
  //             year={movie.year}
  //           />
  //   })}
  //     </div>
//     ) 
//   }

//   render() {
//     const { isLoadind } = this.state;
//     return (
//       <div>
//         {isLoadind ? "loading..." : this.renderMovie()}
//       </div>
//     )
//   }
// }

// 2.06