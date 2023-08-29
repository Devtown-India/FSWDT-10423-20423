import { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Todo from "./components/Todos";
import LayerOne from "./components/LayerOne";
import { TodoContext, TodoProvider } from "./contexts/TodoContext";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

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
        <AddTodo/>
        <Todos/>
      </TodoProvider>
    </div>
  );
};

export default App;
