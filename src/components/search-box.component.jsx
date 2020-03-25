import React from "react"

import "./search-box.style.css"

export const SearchBox = ({ searchText, changeHandler }) => (
  <input 
    className="search"
    type="search"
    placeholder= { searchText }
    onChange={ changeHandler }
  /> 


);
