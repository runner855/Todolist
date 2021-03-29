import React, { useState } from "react";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  return <nav className="navbar">The To Do List</nav>;
};

export default NavBar;
