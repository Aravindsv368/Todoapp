import styles from "./todoitems.module.css";
export default function Todoitems({ item, todosList, setTodosList }) {
  function handleDelete(item) {
    console.log("delete", item);
    setTodosList(todosList.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    const newArray = todosList.map((todo) =>
      todo.name === name ? { ...todo, complete: !todo.complete } : todo
    );
    setTodosList(newArray);
    console.log(todosList);
  }
  const lineThrough = item.complete ? styles.completed : "";
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemNames}>
        <span className={lineThrough} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteBtn}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.seperator} />
    </div>
  );
}
