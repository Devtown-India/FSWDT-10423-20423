import { useState } from "react";
import {Routes, Route} from 'react-router-dom';
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
