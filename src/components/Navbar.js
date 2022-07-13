import React from "react";
import "../styles.css";
import react_logo_small from "../images/react-icon-small.png";

function Navbar() {
  return (
    <nav>
      <img className="nav--icon" src={react_logo_small} />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}

export default Navbar;
