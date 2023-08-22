const Header = ({ answers }) => {
  const attempted = answers.filter((a) => a !== null).length;
  return (
    <div>
      <h1>
        Attempted {attempted} out of {answers.length}
      </h1>
    </div>
  );
};

export default Header;
