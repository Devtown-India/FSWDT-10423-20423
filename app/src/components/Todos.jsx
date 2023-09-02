import { useDispatch, useSelector } from "react-redux";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    const action = {
      type: "DELETE_TODO",
      payload: newTodos,
    };
    dispatch(action);
  };
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
