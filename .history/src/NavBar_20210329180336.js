import React, { useState } from "react";
import "../src/styles/NavBar.css";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  return <nav className="navbar">The To Do List</nav>;
};

export default NavBar;
