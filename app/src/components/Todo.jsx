import { useParams } from "react-router-dom";

const Todo = () => {
  const { id: todoId } = useParams();

  return (
    <div>
      <h1>Todo - {todoId}</h1>
    </div>
  );
};

export default Todo;
