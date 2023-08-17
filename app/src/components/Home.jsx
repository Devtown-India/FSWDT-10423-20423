const Home = ({ setRoute }) => {
  return (
    <>
      <h1>Home</h1>
      <a
        style={{ textDecoration: "underline" }}
        onClick={() => setRoute("/contact")}
      >
        Contact
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

export default Home;
