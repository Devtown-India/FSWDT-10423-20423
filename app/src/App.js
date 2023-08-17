import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import {Routes, Route} from 'react-router-dom';

const App = () => {
  const [route, setRoute] = useState(window.location.pathname);
  // console.log(window.location.pathname)
  return (
    <div>
      {/* {route === "/contact" ? (
        <Contact setRoute={setRoute} />
      ) : route === "/about" ? (
        <About setRoute={setRoute} />
      ) : (
        <Home setRoute={setRoute} />
      )} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
