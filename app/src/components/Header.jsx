import { useState } from "react";

const Header = ({ handleSearch, loader }) => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => setQuery(e.target.value);
  const onSearch = () => handleSearch(query);
  return (
    <div>
      <input onChange={handleChange} type="text" />
      <button disabled={loader} onClick={onSearch}>
        {loader ? "Loading..." : "Search"}
      </button>
    </div>
  );
};

export default Header;
