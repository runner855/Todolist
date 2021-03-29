import React, { useState } from "react";
import "../src/styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className={"navbar" ? "navbar active" : "navbar"}>
      <h1>The To Do List</h1>
    </nav>
  );
};

export default NavBar;
