import styles from "./footer.module.css";
export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>completed Todos: {completedTodos}</span>
      <span className={styles.item}>Total Todos: {totalTodos}</span>
      <h4>main</h4>
    </div>
  );
}
