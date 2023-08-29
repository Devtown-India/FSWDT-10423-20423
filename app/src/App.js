import { useState } from "react";
import {Routes, Route} from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Todo from "./components/Todos";
import LayerOne from "./components/LayerOne";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
      completed: false
    },
    {
      id: 2,
      title: "Learn Node",
      completed: false
    },
  ]);
  return (
    <div>
        <LayerOne todos={todos}/>
    </div>
  );
};

export default App;
