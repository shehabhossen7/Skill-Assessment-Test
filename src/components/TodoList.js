import React, { useState } from "react";
import NewTodo from "./NewTodo";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <NewTodo setTodos={setTodos}></NewTodo>
      <div className="border-2 rounded-md p-2 w-96 mx-auto p-10 "></div>
    </div>
  );
};

export default TodoList;
