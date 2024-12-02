import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todosList, setTodosList }) {
  const [todo, setTodo] = useState({ name: "", completed: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodosList([...todosList, todo]);
    setTodo({ name: "", completed: false });
  }
  return (
    <div>
      <form className={styles.todoForm} onSubmit={handleSubmit}>
        <div className={styles.todoContainer}>
          <input
            className={styles.todoInput}
            onChange={(e) => setTodo({ name: e.target.value, complete: false })}
            value={todo.name}
            type="text"
            placeholder="Enter your item"
          />
          <button className={styles.addBtn} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
