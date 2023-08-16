import { useState } from "react";

const Header = ({ handleAdd }) => {
  const [inputText, setInputText] = useState("");
  const handleChange = (e) => setInputText(e.target.value);

  return (
    <div>
      <input onChange={handleChange} type="text" />
      <button onClick={() => handleAdd(inputText)}>Add</button>
    </div>
  );
};

export default Header;
