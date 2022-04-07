import React from "react";
import "./footer.styles.css";
function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <ul>
          <li>Hosting</li>
          <li>Find Room</li>
          <li>Find Hotel</li>
        </ul>
      </div>
      <div className="footer-right">
        <ul>
          <li>Find Club Services</li>
          <li>Find Best Catering</li>
          <li>Support</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
