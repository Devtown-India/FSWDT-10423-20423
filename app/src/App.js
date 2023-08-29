import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Todo from "./components/Todos";
import LayerOne from "./components/LayerOne";

const Header = ({ children }) => {
  console.log(children)
  return <h1 className="text-red-500">
    data
    {children}
    </h1>;
};

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
    {
      id: 2,
      title: "Learn Node",
      completed: false,
    },
  ]);
  return (
    <div>
      <LayerOne todos={todos} />
      <Header>
        <h1>data</h1>
      </Header>
    </div>
  );
};

export default App;
