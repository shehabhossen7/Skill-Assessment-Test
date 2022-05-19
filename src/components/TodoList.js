import React, { useEffect, useState } from "react";
import NewTodo from "./NewTodo";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("todo.json")
      .then((res) => res.json())
      .then((data) => setTodos(data));
    console.log(todos);
  }, []);

  return (
    <div>
      <NewTodo setTodos={setTodos} todos={todos}></NewTodo>
      <div className="border-2 rounded-md p-2 w-96 mx-auto  ">
        {todos?.map((todo) => (
          <Todo todo={todo}></Todo>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
