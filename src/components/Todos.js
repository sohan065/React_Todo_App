import React from "react";
import Todo from "./Todo";
import style from "./Module/todos.module.css";
export default function Todos(props) {
  return (
    <div className={style.todos}>
      {props.todos.map((todo, index) => (
        <Todo key={index} todo={todo} onRemove={props.onRemove} />
      ))}
    </div>
  );
}
