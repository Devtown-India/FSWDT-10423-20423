import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
