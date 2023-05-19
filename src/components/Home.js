import React, { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";
import style from "./Module/home.module.css";
import { v4 as uuid } from "uuid";
export default function Home() {
  const dummyTodo = [
    {
      id: uuid(),
      title: "Title",
      desc: "Description",
    },
  ];
  const [todo, setTodo] = useState(dummyTodo);
  const handleNewTodo = (newTodo) => {
    setTodo((oldTodo) => {
      return [...oldTodo, newTodo];
    });
  };
  const handleRemove = (id) => {
    const filterTodo = todo.filter((todo) => todo.id !== id);
    setTodo(filterTodo);
  };
  return (
    <div className={style.container}>
      <NewTodo onNewTodo={handleNewTodo} />
      <Todos todos={todo} onRemove={handleRemove} />
    </div>
  );
}
