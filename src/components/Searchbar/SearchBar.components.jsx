import React from 'react'
import './Searchbar.styles.css'
import { SearchIcon } from '../../assets'
function SearchBar() {
  return (
    <div className='search-bar-section'>
        <div className="search-bar">
          <h3>Location</h3>
          <h3>Check In</h3>
          <h3>Check Out</h3>
          <h3>Guests</h3>
          <img src={SearchIcon} alt="" />
        </div>
    </div>
  )
}

export default SearchBar