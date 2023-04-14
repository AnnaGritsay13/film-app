import React from "react";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";


import './filter.css'

export default function Ganre() {
    return (
            <UncontrolledDropdown inNavbar>
              <DropdownToggle nav caret className="filter">
                Жанры
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Боевик</DropdownItem>
                <DropdownItem>Детектив</DropdownItem>
                <DropdownItem>Драма</DropdownItem>
                <DropdownItem>Комедия</DropdownItem>
                <DropdownItem>Ужасы</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
    )
}