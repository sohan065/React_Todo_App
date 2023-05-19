import React from "react";
import style from "./Module/newtodo.module.css";
import { v4 as uuid } from "uuid";
import { useFormik } from "formik";
import * as yup from "yup";
export default function NewTodo(props) {
  const formik = useFormik({
    initialValues: {
      id: uuid(),
      title: "",
      desc: "",
    },
    validationSchema: yup.object({
      title: yup.string().min(2).required(),
      desc: yup.string().min(2).required(),
    }),
    onSubmit: (values, { resetForm }) => {
      const newTodo = {
        ...values,
        id: uuid(),
      };
      props.onNewTodo(newTodo);
      resetForm({
        title: "",
        desc: "",
      });
    },
  });
  const renderTitleError = formik.touched && formik.errors.title && (
    <span style={{ color: "red" }}>{formik.errors.title}</span>
  );
  const renderDescError = formik.touched && formik.errors.desc && (
    <span style={{ color: "red" }}>{formik.errors.desc}</span>
  );
  return (
    <div>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <div className={style["form-field"]}>
          <label className={style["form-field label"]}>Title:</label>
          <input
            className={style["form-field input"]}
            type="text"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          <br></br>
        </div>
        <p>{renderTitleError}</p>
        <div className={style["form-field"]}>
          <label className={style["form-field label"]}>Description:</label>
          <textarea
            className={style["form-field textarea"]}
            type="text"
            name="desc"
            value={formik.values.desc}
            onChange={formik.handleChange}
          />
        </div>
        {renderDescError}
        <button className={style["form button"]} type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
}
