import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

const App = () => {
  const [route, setRoute] = useState("/");
  return (
    <div>
      {route === "/contact" ? (
        <Contact setRoute={setRoute} />
      ) : route === "/about" ? (
        <About setRoute={setRoute} />
      ) : (
        <Home setRoute={setRoute} />
      )}
    </div>
  );
};

export default App;
