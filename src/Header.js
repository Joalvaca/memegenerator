import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          className="logo"
          src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
          alt="meme"
        ></img>
      </div>
      <div className="title">
        <h1>Meme Generator</h1>
      </div>
    </div>
  );
}

export default Header;
