//== AddTodo.jsx ==//

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo } from "../features/todo/todoSlice";
import Todos from "./Todos";

function AddTodo() {
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (editMode) {
      dispatch(
        editTodo({
          id: editId,
          title: input,
        })
      );
      setEditMode(false);
      setEditId(null);
    } else {
      dispatch(addTodo(input));
    }
    setInput("");
  };

  const startEditing = (todo) => {
    setInput(todo.title);
    setEditId(todo.id);
    setEditMode(true);
  };

  return (
    <div className="mt-6">
      <form
        onSubmit={addTodoHandler}
        className=" flex flex-col gap-2 sm:flex-row "
      >
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder={editMode ? "Update Todo..." : "Enter a Todo..."}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          {editMode ? "Update Todo" : "Add Todo"}
        </button>
      </form>
      <Todos onEdit={startEditing} />
    </div>
  );
}

export default AddTodo;
