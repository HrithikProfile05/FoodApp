import React from "react";
import { LOGO_URL } from "../utils/contains";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img alt="logo" className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-link">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
