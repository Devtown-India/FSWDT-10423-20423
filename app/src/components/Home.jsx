const Home = ({ setRoute }) => {
  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() =>
          window.history.pushState({ page: "Contact" }, null, "/contact")
        }
      >
        COntact
      </button>
      <br />
      <a style={{ textDecoration: "underline" }} href="/about">
        About
      </a>
    </>
  );
};

export default Home;
