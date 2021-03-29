import React, { useState, useEffect } from "react";
import "./App.css";

function App({ saveTodo }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setOnClick();
  }, []);

  return (
    <div className="App">
      <h1>To Do List</h1>
      <ul>
        <li>
          To do Important
          <br></br>
          <input
            type="text"
            label="todo"
            placeholder="insert here"
            name="first task"
            onChange={this.inputChange}
          ></input>
          <button
            onSubmit={(event) => {
              event.preventDefault();
              saveTodo(value);
            }}
          >
            {" "}
            Insert
          </button>
        </li>
      </ul>
    </div>
  );
}

export default App;
