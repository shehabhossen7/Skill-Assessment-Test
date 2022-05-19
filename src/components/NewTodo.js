import React, { useState } from "react";
import { useForm } from "react-hook-form";

const NewTodo = ({ setTodos, todos }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const taskName = data.name;
    const description = data.description;
    const todoList = { taskName, description };
    const newTodo = [...todos, todoList];
    setTodos(newTodo);
  };
  return (
    <div className="border-2 rounded-md p-2 w-96 mx-auto p-10 mt-10 text-left">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label for="name">Task Title: </label>
          <br />
          <input
            {...register("name")}
            className="border-2 rounded-md p-2 w-full"
            placeholder="Task Name"
          />
        </div>
        <br />
        <div>
          <label for="description">Description: </label>
          <br />
          <textarea
            {...register("description")}
            cols="30"
            rows="5"
            className="border-2 rounded-md p-2 w-full"
            placeholder="Description"
          />
        </div>
        <br />
        <input
          type="submit"
          className="rounded-md bg-lime-200 py-2  w-full my-5"
          value="Add Task"
        />
      </form>
    </div>
  );
};

export default NewTodo;
