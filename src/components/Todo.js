import React from "react";

const Todo = ({ todo }) => {
  return (
    <div className="grid grid-cols-2 shadow-md my-5">
      <div className="text-left p-1">
        <h1 className="my-2 text-xl font-semibold">{todo.taskName}</h1>
        <p className="text-sm">{todo.description}</p>
      </div>
      <div>
        <button className="py-3 px-7 bg-red-800 rounded-md text-white">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
