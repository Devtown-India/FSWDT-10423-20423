const Todos = ({ todos, greet }) => {
  greet();
  return (
    <div>
      {todos.map((todo) => (
        <div>{todo.title}</div>
      ))}
    </div>
  );
};

export default Todos;
