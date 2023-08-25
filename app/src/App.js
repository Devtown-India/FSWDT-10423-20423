import { useState } from "react";
import {Routes, Route} from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
};

export default App;
