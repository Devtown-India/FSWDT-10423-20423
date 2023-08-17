const About = ({ setRoute }) => {
  return (
    <>
      <h1>About</h1>
      <a style={{ textDecoration: "underline" }} onClick={() => setRoute("/")}>
        Home
      </a>
      <br />
      <a
        style={{ textDecoration: "underline" }}
        onClick={() => setRoute("/contact")}
      >
        Contact
      </a>
    </>
  );
};

export default About;
