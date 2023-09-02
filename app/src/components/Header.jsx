import { useState } from "react";
import { useDispatch } from "react-redux";

const randomId = () => {
  return Math.floor(Math.random() * 100000);
};

const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: randomId(),
      title: query,
      completed: false,
    };
    const action = {
      type: "ADD_TODO",
      payload: todo,
    };
    dispatch(action);
  };

  return (
    <div>
      <h1>My Todos</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">todo</label>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Header;
