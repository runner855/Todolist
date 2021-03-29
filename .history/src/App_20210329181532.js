import React from "react";
import Todo from "./Todo";
import NavBar from "./NavBar";

import "../src/styles/App.css";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="App">
        <header className="app-header">
          <div className="image">
            <img
              src="https://www.logomaker.com/wp-content/uploads/2019/02/iStock-921437050-800x358.jpg"
              className="App-logo"
              alt="logo"
            />
          </div>
        </header>
        <Todo />
      </div>
    </>
  );
};

export default App;
