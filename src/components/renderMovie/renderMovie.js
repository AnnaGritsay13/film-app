import Movie from "../movie/movie";

export default function RenderMovies({ moviess }) {
    return (
      <div className='container my-5'>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4'>
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
      </div>
    )
  }  
