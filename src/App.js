import React, { Component } from "react";
import Spinner from "./components/spiner/spinner";
import Server from "./server/server";
import RenderMovie from "./components/renderMovie/renderMovie";
import Header from "./components/header/header";

import './App.css'
import Ganre from "./components/filter/ganre";
import Years from "./components/filter/year";
export default class App extends Component {
  server = new Server();

  state = {
    isLoadind: true,
    moviess: [],
    text: '',
    year: '',
    genre: ''
  }
  
  componentDidMount() {
    this.server.getMovies().then(movies => this.setState({ moviess: movies.data.movies, isLoadind: false }))
  }

  searchPost = (items, text) => {
    return items.filter(item => text.length === 0 ? items : item.title.indexOf(text) > -1)
  }

  filterYear = (items, year) => {
    return items.filter(item => year.length === 0 ? items : item.year === year)
  }
  
  filterGenre = (items, genre) => {
    return items.filter(item => genre.length === 0 ? items : item.genres.includes(genre))
  }


  onUpdateSearch = (text) => {
    this.setState({text})
  }

  onUpdateYear = (year) => {
    this.setState({year})
  }

  onUpdateGenre = (genre) => {
    this.setState({ genre })
  }
  
  updateFilter = () => {
    this.setState({
      genre: '',
      year: '',
      text: ''
    })
  }


  render() {
    const { isLoadind, moviess, text, year, genre} = this.state;
    const visiblePost = this.filterGenre(this.filterYear(this.searchPost(moviess, text), year), genre);
    const boolean = !!genre || !!year || !!text;

    return (
      <>
        <Header
          onUpdateSearch={this.onUpdateSearch}
        />
        <div className="ganre">
          <Ganre
            movies={moviess}
            onUpdateGenre={this.onUpdateGenre}
          />
          <Years
            movies={moviess}
            onUpdateYear={this.onUpdateYear}
          />
          {boolean && <button className="button-clear" onClick={this.updateFilter}>сбросить</button>}
        </div>
        {isLoadind ? <Spinner /> : <RenderMovie
            moviess={visiblePost}
          />}
      </>
  
    )

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