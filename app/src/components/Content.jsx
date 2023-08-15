import { useState } from "react";

const Content = () => {
  const [todos, setTodos] = useState([
    {
      title: "Learn React",
      completed: false,
    },
  ]);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <h4>
        {todos.length > 0
          ? `You have ${todos.length} todos`
          : "Add todos to get started !!!"}
      </h4>
      <input onChange={handleChange} type="text" />
      <button>Add</button>
      <div>
        {todos.map((todo, index) => (
          <li>{todo.title}</li>
        ))}
      </div>
    </div>
  );
};

export default Content;
