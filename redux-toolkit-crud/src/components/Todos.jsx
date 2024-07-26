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
            className="flex justify-between items-center list-none sm:text-left px-2 text-center py-2 border-red-500 bg-orange-400 rounded-lg my-3 w-[100%] sm:w-[max-content]"
            key={todo.id}
          >
            <div>
              <span className="mr-3">▶</span>
              {todo.title}
            </div>
            <div>
              <button
                className="ml-6 my-1 px-4 rounded-lg bg-blue-500 text-white"
                onClick={() => onEdit(todo)}
              >
                Edit
              </button>
              <button
                className="ml-6 my-1 px-4 rounded-lg bg-orange-950 text-white"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                X
              </button>
            </div>
          </li>
        ))}
      </div>
    </>
  );
}

export default Todos;
