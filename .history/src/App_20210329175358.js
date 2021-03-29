import React from "react";
import Todo from "./Todo";
import NavBar from "./NavBar";

import "./App.css";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="App">
        <header className="app-header">
          <img
            src="https://cdn.dribbble.com/users/5325964/screenshots/11432898/media/f6a4fcbd45cb1cd36e1b2fb088a3eabc.png"
            className="App-logo"
            alt="logo"
          />
        </header>
        <Todo />
      </div>
    </>
  );
};

export default App;
