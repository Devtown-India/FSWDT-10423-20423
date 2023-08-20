import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = ({ setRoute }) => {
  // state initialises on mount and resets on unmount
  const [count, setCount] = useState(0);
  const [name, setName] = useState("somename");

  useEffect(() => {
    console.log(`current count value is: ${count}`);
    return () => {
      console.log(`unmount`);
    };
  }, []);

  return (
    <>
      <nav>
        <Link style={{ textDecoration: "underline" }} to="/">
          Home
        </Link>
        <br />
        <Link style={{ textDecoration: "underline" }} to="/contact">
          Contact
        </Link>
      </nav>
      <h1>About</h1>
      <h2>{name}</h2>
      {count}
      <input type="text" onChange={(e) => setName(e.target.value)} />

      <button onClick={() => setCount((prev) => prev + 1)}>add</button>
    </>
  );
};

export default About;
