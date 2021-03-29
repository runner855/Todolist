import React, { useState } from "react";
import "../src/styles/NavBar.css";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={"navbar" ? "navbar active" : "navbar"}>
      <h1>The To Do List</h1>
    </nav>
  );
};

export default NavBar;
