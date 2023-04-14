import React from "react";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";


import './filter.css'

export default function Years() {
    return (
            <UncontrolledDropdown inNavbar>
              <DropdownToggle nav caret className="filter">
                Год
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>2023</DropdownItem>
                <DropdownItem>2022</DropdownItem>
                <DropdownItem>2021</DropdownItem>
                <DropdownItem>2020</DropdownItem>
                <DropdownItem>2019</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
    )
}