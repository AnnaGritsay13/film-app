import './header.css'

export default function Header({ onUpdateSearch, movies, onUpdateGenre, onUpdateYear }) {
    
    const genres = [...new Set(movies.map(item => item.genres).flat().sort())];
    const year = [...new Set(
      movies.map(item => {
      return item.year
    }).sort().reverse()
    )]


   function UpdateSearch(e) {
        const text = e.target.value;
        onUpdateSearch(text);
    }
        return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Films</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Genres
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">
                  {
            genres.map((genre, index) => {
                return <li
                key={index}
                onClick={() => onUpdateGenre(genre)}
              >
                {genre}
              </li>
            })
              }
            </a></li>
          </ul>
            </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Years
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">
                {
            year.map(year => {
              return <li
                key={year}
                onClick={() => onUpdateYear(year)}
              >
                {year}
              </li>
            })
              }                    
            </a></li>
          </ul>
        </li>
      </ul>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
            onChange={UpdateSearch}
            onKeyUp={(e) => {
                if (e.code === 'Enter') {
                    e.target.value = ''
                }
            }}/>
      </form>
    </div>
  </div>
</nav>
)
}