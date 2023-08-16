import { useState } from "react";

const Header = ({ handleAdd }) => {
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <input onChange={(e) => setInputText(e.target.value)} type="text" />
      <button onClick={() => handleAdd(inputText)}>Add</button>
    </div>
  );
};

export default Header;
