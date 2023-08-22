import { useState } from "react";
import {Routes, Route} from 'react-router-dom';
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Quiz/>}/>
        <Route path="/result" element={<Result/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
