import { findAllByTestId } from "@testing-library/dom";
import React, { useState, useEffect } from "react";
import "./App.css";

function App({ saveTodo }) {
  const [currentTodo, setCurrentTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      todo: "go for a walk",
      isfinished: true,
    },
    {
      todo: "cook",
      isfinished: false,
    },
    {
      todo: "wash the dishes",
      isfinished: false,
    },
  ]);

  const createNewTodo = () => {
    let todosArray = [...todos];
    todosArray.push({
      todo: currentTodo,
      isCompleted: false,
    });
    setTodos(todosArray);
  };

  const completeTodo = (index) => {
    let todosArray = [...todos];
    todosArray[index].isCompleted = !todosArray[index].isCompleted;
    setTodos(todosArray);
  };

  const deleteTodo = (index) => {
    let todosArray = [...todos];
    todosArray.splice(index, 1);
    setTodos(todosArray);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      {todos.map((todo, index) => (
        <p>todo.todo</p>
      ))}
      {(todos.length > 0) & `${todos.length} items`}
      <ul>
        <li>
          To do Important
          <br></br>
          <input
            className="todo"
            value={currentTodo}
            type="text"
            label="todo"
            placeholder="insert here"
            name="first task"
            onChange={(e) => {
              setCurrentTodo(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                createNewTodo(currentTodo);
                setCurrentTodo("");
              }
            }}
          />
          {todos.map((todo, index) => (
            <p>{todo.todo}</p>
          ))}
          {todos.length > 0 && `${todos.length} items`}
        </li>
      </ul>
    </div>
  );
}

export default App;
