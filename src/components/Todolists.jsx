import Todoitems from "./Todoitems";
import styles from "./todoLists.module.css";
export default function Todolists({ todosList, setTodosList }) {
  const sortedTodos = todosList
    .slice()
    .sort((a, b) => Number(a.complete) - b.complete);
  return (
    <div className={styles.todoLists}>
      {sortedTodos.map((item) => (
        <Todoitems
          key={item.name}
          item={item}
          todosList={todosList}
          setTodosList={setTodosList}
        />
      ))}
    </div>
  );
}
