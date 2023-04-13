import React from "react";
import Movie from "../movie/movie";


export default function RenderMovie ({moviess}) {
    return (
      <div>
        {moviess.map((movie) => {
          console.log(movie);
          return <div className="movies">
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.medium_cover_image}
            rating={movie.rating}
            year={movie.year}
          />            
          </div>
        })}
      </div>
    )
  }