import { Link } from "react-router-dom";

const Home = ({ setRoute }) => {
  return (
    <>
      <h1>Home</h1>
      <Link style={{ textDecoration: "underline" }} to="/about">
        About
      </Link>
      <br />
      <Link style={{ textDecoration: "underline" }} to="/contact">
        Contact
      </Link>
    </>
  );
};

export default Home;
