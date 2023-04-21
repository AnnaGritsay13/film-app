import './movie.css'

export default function Movie({ title, poster, rating, year, genres }) {

    return (
          <div className='col'>
            <div className="card my-3">
              <img src={poster} className="card-img-top" alt="no poster"/>
              <div className="card-body">
                <h5 className="card-title">{title.length > 30 ? `${title.slice(0, 30)}...` : title}</h5>
            <p className="card-text">{year}, {genres.join(', ').length > 30 ? `${genres.join(', ').slice(0, 30)}...` : genres.join(', ')}</p>
              <div className="rating">
                {rating}
              </div>
              </div>

            </div>
          </div>
    )
}