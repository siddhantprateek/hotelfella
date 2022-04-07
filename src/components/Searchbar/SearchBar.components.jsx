import React from "react";
import "./Searchbar.styles.css";
import { SearchIcon } from "../../assets";
function SearchBar() {
  return (
    <div className="search-bar-section">
      <div className="search-bar">
        <div className="search-option">
          <h3>Location</h3>
          <input placeholder="Where are you Going?" />
        </div>
        <div className="search-option">
          <h3>Check In</h3>
          <input placeholder="Add dates" />
        </div>
        <div className="search-option">
          <h3>Check Out</h3>
          <input placeholder="Add dates" />
        </div>
        <div className="search-option">
          <h3>Guests</h3>
          <input placeholder="Add guests" />
        </div>
        <img src={SearchIcon} className="search-icon" alt="" />
      </div>
    </div>
  );
}

export default SearchBar;
