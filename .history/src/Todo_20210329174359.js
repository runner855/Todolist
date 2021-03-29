import React, { useState } from "react";

const Todo = () => {
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

  const createTodo = (currentTodo) => {
    let todosArray = [...todos];
    todosArray.push({
      todo: currentTodo,
      isfinished: false,
    });
    setTodos(todosArray);
  };

  const completeTodo = (index) => {
    let todosArray = [...todos];
    todosArray[index].isfinished = !todosArray[index].isfinished;
  };

  const deleteTodo = (index) => {
    let todosArray = [...todos];
    todosArray.splice(index, 1);
    setTodos(todosArray);
  };

  return (
    <div>
      <br></br>
      <input
        className="todo-input"
        value={currentTodo}
        onChange={(e) => {
          setCurrentTodo(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            createTodo(currentTodo);
            setCurrentTodo("");
          }
        }}
        placeholder="what do you need to do?"
      />
      {todos.map((todo, index) => (
        <div key={todo} className="todo">
          <div className="checkbox" onClick={() => completeTodo(index)}>
            {todo.isfinished && <span>&#x274;</span>}
          </div>
          <div className={todo.isfinished ? "done" : ""}>{todo.todo}</div>
          <div className="delete" onClick={() => deleteTodo(index)}>
            &#128465;
          </div>
        </div>
      ))}
      {todos.length > 0 && `${todos.length} items`}
    </div>
  );
};

export default Todo;
