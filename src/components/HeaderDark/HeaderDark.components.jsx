import React from "react";
import "./HeaderDark.styles.css";
import { Link } from "react-router-dom";
function HeaderDark() {
  return (
    <header>
      <div className="header-content-dark">
        <div className="header-left-dark">
          <Link to="/">
            <p>HOTELFELLA</p>
          </Link>
        </div>
        <div className="header-right-dark">
          <ul className="header-option-dark">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
            <li>
              <Link to="/tour">Tour</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default HeaderDark;
