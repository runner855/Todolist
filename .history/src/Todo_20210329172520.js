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

  return (
    <div>
      <input
        className="todo-input"
        value={currentTodo}
        onChange={(e) => {
          setCurrentTodo(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            createNewTodo(currentTodo);
            setCurrentTodo("");
          }
        }}
        placeholder="what do you need to do?"
      />
      {todos.map((todo, index) => (
        <p>todo.todo</p>
      ))}
      {todos.length > 0 && `${todos.length} items`}
    </div>
  );
};

export default Todo;
