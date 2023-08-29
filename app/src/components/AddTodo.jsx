import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { setTodos } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", todo);
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: (Math.random() * 1000).toFixed(0),
          title: todo,
          completed: false,
        },
      ];
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Add a new todo:</label>
      <input onChange={(e) => setTodo(e.target.value)} type="text" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
