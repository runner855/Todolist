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

  return (
    <div>
      {todos.map((todo, index) => (
        <p>todo.todo</p>
      ))}
      {todos.length > 0 && `${todos.length} items`}
    </div>
  );
};

export default Todo;
