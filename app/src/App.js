import { useState } from "react";
import {Routes, Route} from 'react-router-dom';
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Quiz from "./components/Quiz";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Quiz/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
