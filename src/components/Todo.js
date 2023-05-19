import React from "react";
import style from "./Module/todo.module.css";
export default function Todo(props) {
  const { id, title, desc } = props.todo;

  const handleClick = (id) => {
    props.onRemove(id);
  };
  return (
    <div className={style.todo}>
      <h2>{title}</h2>
      <p className={style["todo p"]}>{desc}</p>

      <button
        className={style.btn}
        onClick={() => {
          handleClick(id);
        }}>
        Delete
      </button>
    </div>
  );
}
