import { useState } from "react";

const Content = () => {
  //   let count = 0;
  let [count, setCount] = useState(0);
  //! state is immutable

  const increment = (e) => {
    setCount((prev) => prev + 1);
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
