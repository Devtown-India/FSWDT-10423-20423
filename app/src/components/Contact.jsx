const Contact = ({ setRoute }) => {
  return (
    <>
      <h1>Contact</h1>
      <a style={{ textDecoration: "underline" }} onClick={() => setRoute("/")}>
        Home
      </a>
      <br />
      <a
        style={{ textDecoration: "underline" }}
        onClick={() => setRoute("/about")}
      >
        About
      </a>
    </>
  );
};

export default Contact;
