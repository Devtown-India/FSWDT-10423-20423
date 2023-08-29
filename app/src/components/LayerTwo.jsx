import { useContext } from "react";
import LayerThree from "./LayerThree";
import { TodoContext } from "../contexts/TodoContext";

const LayerTwo = () => {
  const todoContext = useContext(TodoContext);
  return (
    <div>
      <h2>Layer Two</h2>
      <LayerThree />
    </div>
  );
};

export default LayerTwo;
