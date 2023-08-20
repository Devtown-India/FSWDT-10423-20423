import { Link } from "react-router-dom";
import { withHeading, withLog } from "../hoc/enhanced";

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

export default withLog(withHeading(Contact));
