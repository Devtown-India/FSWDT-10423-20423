import { useState } from "react";
import {Routes, Route} from 'react-router-dom';
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
};

export default App;
