import { useState } from "react";

function generateId() {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    id += chars[randomIndex];
  }
  return id;
}

const Content = () => {
  const [todos, setTodos] = useState([]);
  const [item, setItem] = useState("");

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleAdd = () => {
    setTodos((prev) => [
      ...prev,
      {
        id: generateId(),
        title: item,
        completed: false,
      },
    ]);
    setItem("");
  };

  const handleDelete = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div>
      <h4>
        {todos.length > 0
          ? `You have ${todos.length} todos`
          : "Add todos to get started !!!"}
      </h4>
      <input value={item} onChange={handleChange} type="text" />
      <button onClick={handleAdd}>Add</button>
      <div>
        {todos.map((todo, index) => (
          <li>
            {todo.title}{" "}
            <button onClick={() => handleDelete(todo.id)}>x</button>{" "}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Content;
