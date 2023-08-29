import { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Todo from "./components/Todos";
import LayerOne from "./components/LayerOne";
import { TodoContext, TodoProvider } from "./contexts/TodoContext";

const Header = ({ children }) => {
  const context = useContext(TodoContext)
  console.log(context)
  return <h1 className="text-red-500">
    data
    </h1>;
};

const App = () => {
 
  return (
    <div>
      <TodoProvider>
        <LayerOne />
      <Header/>

      </TodoProvider>
    </div>
  );
};

export default App;
