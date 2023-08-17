const Home = ({ setRoute }) => {
  return (
    <>
      <h1>Home</h1>
      <a style={{ textDecoration: "underline" }} href="/contact">
        Contact
      </a>
      <br />
      <a style={{ textDecoration: "underline" }} href="/about">
        About
      </a>
    </>
  );
};

export default Home;
