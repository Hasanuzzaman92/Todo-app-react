import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./Todo.css";

const Todo = (props) => {
  const { title, desc } = props.todo;
  const { id } = props;
  const handleDelete = (id) => {
    props.onRemoveTodo(id);
  };
  return (
    <article className="todo">
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <div>
        <button onClick={() => handleDelete(id)} className="btn">
          <FaTrashAlt />
        </button>
      </div>
    </article>
  );
};

export default Todo;
