//== Todos.jsx ==//

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos({ onEdit }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="h-[100vh] mt-6 ">
        {todos.map((todo) => (
          <li
            className="list-none px-6 py-2 border-red-500 bg-orange-400 rounded-lg my-3"
            key={todo.id}
          >
            <span className="mr-3">▶</span>
            {todo.title}
            <button
              className="ml-6 my-1 px-4 rounded-lg bg-orange-950 text-white"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              X
            </button>
            <button
              className="ml-6 my-1 px-4 rounded-lg bg-blue-500 text-white"
              onClick={() => onEdit(todo)}
            >
              Edit
            </button>
          </li>
        ))}
      </div>
    </>
  );
}

export default Todos;
