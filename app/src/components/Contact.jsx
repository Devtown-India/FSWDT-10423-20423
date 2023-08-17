import { Link } from "react-router-dom";

const Contact = ({ setRoute }) => {
  return (
    <>
      <h1>Contact</h1>
      <Link style={{ textDecoration: "underline" }} to="/">
        Home
      </Link>
      <br />
      <Link style={{ textDecoration: "underline" }} to="/about">
        About
      </Link>
    </>
  );
};

export default Contact;
