const Todos = ({ todos, handleDelete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div>
          {todo.title} <button onClick={() => handleDelete(todo.id)}>x</button>{" "}
        </div>
      ))}
    </div>
  );
};

export default Todos;
