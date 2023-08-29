import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const Todos = () => {
  const { todos } = useContext(TodoContext);
  return (
    <h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h6>{todo.title}</h6>
        </div>
      ))}
    </h1>
  );
};

export default Todos;
