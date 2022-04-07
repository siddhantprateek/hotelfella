import React from "react";
import "./Header.styles.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div className="header-content">
        <div className="header-left">
          <Link to="/">
            <p>HOTELFELLA</p>
          </Link>
        </div>
        <div className="header-right">
          <ul className="header-option">
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/explore">
              Explore
              </Link>
            </li>
            <li>
              <Link to="/tour">
                Tour
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
