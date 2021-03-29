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
      <h1>To Do List</h1>
    </div>
  );
};

export default Todo;
