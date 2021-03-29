import React, { useState } from "react";
import "../src/styles/NavBar.css";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="navbar">
      <h1>The To Do List</h1>
    </nav>
  );
};

export default NavBar;
