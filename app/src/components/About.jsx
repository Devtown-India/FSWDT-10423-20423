import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [name, setName] = useState(null);
  const [err, setErr] = useState();

  useEffect(() => {
    // add validatgion logic in here
    if (name && name.length < 5) {
      setErr("Name must be at least 5 characters long");
    } else {
      setErr(null);
    }
  }, [name]);

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
      <input onChange={(e) => setName(e.target.value)} type="text" />
      {err && <p style={{ color: "crimson" }}>{err}</p>}
    </>
  );
};

export default About;
