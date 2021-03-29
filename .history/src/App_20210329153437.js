import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [onClick, setOnClick] = useState(0);

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
            label="todo"
            placeholder="insert here"
            name="first task"
          ></input>
          <button onClick={onClick}> Insert</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
