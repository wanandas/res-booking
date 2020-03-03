import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <div>reservations RES</div>
      <ul className="menu">
        <Link className="menu-item" to="/">
          home
        </Link>
        {/* <Link className="menu-item" to="/restaurants">
          reservations
        </Link> */}
      </ul>
    </div>
  );
}

export default Header;
