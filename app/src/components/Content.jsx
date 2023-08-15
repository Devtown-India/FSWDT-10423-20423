const Content = () => {
  let count = 0;

  const increment = (e) => {
    console.log(count);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Inc</button>
    </div>
  );
};

export default Content;
