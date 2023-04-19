import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";


import './filter.css'

export default function Ganre({ movies, onUpdateGenre }) {
  const genres = [...new Set(movies.map(item => item.genres).flat().sort())]


    return (
            <UncontrolledDropdown inNavbar>
              <DropdownToggle nav caret className="filter">
                Жанры
              </DropdownToggle>
              <DropdownMenu right>
                    {
            genres.map((genre, index) => {
              return <DropdownItem
                key={index}
                onClick={() => onUpdateGenre(genre)}
              >
                {genre}
              </DropdownItem>
            })
              }
              </DropdownMenu>
            </UncontrolledDropdown>
    )
}