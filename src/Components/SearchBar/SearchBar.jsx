import React from 'react';
import './searchBar.css';

const SearchBar = ({location, onLocationChange}) => {
  return (
    <div>
      <input type="text" name="search" id="search" onChange={(e) => onLocationChange(e.target.value)} value={location}/>
    </div>
  )
}

export default SearchBar;