import React from "react";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";


import './filter.css'

export default function Years({ movies, onUpdateYear }) {
  
    const year = [...new Set(
      movies.map(item => {
      return item.year
    }).sort().reverse()
    )]

  return (
            <UncontrolledDropdown inNavbar>
        <DropdownToggle nav caret className="filter" >
                Год
              </DropdownToggle>
        <DropdownMenu right>
          {
            year.map(year => {
              return <DropdownItem
                key={year}
                onClick={() => onUpdateYear(year)}
              >
                {year}
              </DropdownItem>
            })
              }
              </DropdownMenu>
            </UncontrolledDropdown>
    ) 

}

