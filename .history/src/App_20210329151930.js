import "./App.css";
const 

function App() {
  return (
    <>
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
          <button type="submit" onClick={onClick}> Insert</button>
        </li>
      </ul>
    </div>
    </>
  );
}

export default App;
