import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Todo from "./components/Todos";
import LayerOne from "./components/LayerOne";
import { TodoProvider } from "./contexts/TodoContext";

const Header = ({ children }) => {
  console.log(children)
  return <h1 className="text-red-500">
    data
    {children}
    </h1>;
};

const App = () => {
 
  return (
    <div>
      <TodoProvider>
        <LayerOne />
      </TodoProvider>
    </div>
  );
};

export default App;
