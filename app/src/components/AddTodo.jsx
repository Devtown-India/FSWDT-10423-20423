import { useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", todo);
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
