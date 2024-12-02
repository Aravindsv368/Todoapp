import { useState } from "react";
import Form from "./Form";
import Todolists from "./Todolists";
import Footer from "./Footer";
export default function Todoapp() {
  const [todosList, setTodosList] = useState([]);
  const completedTodos = todosList.filter((todo) => todo.complete).length;
  const totalTodos = todosList.length;

  return (
    <>
      <Form todosList={todosList} setTodosList={setTodosList} />

      <Todolists todosList={todosList} setTodosList={setTodosList} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </>
  );
}
