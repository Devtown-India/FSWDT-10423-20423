import { Link } from "react-router-dom";

const About = ({ setRoute }) => {
  return (
    <>
      <h1>About</h1>
      <Link style={{ textDecoration: "underline" }} to="/">
        Home
      </Link>
      <br />
      <Link style={{ textDecoration: "underline" }} to="/contact">
        Contact
      </Link>
    </>
  );
};

export default About;
