import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const LayerThree = () => {
  const todoContext = useContext(TodoContext);
  console.log(todoContext);
  return (
    <div>
      <h3>Layer Three</h3>
    </div>
  );
};

export default LayerThree;
