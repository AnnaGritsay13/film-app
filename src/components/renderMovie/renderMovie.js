import Movie from "../movie/movie";

import '../../App.css'

export default function RenderMovies({ moviess }) {
    return (
      <div className="conteiner">
        {moviess.map((movie) => {
          return <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.medium_cover_image}
            rating={movie.rating}
              year={movie.year}
              genres={movie.genres}
          />            
        })}
      </div>
    )
  }  
