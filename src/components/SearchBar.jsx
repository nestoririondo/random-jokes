import { useState, useEffect } from "react";

const SearchBar = ({ contains, setContains }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    if (search.length === 0) {
      setContains("");
      return;
    }
    setContains(`contains=${search}&`);
  }, [search]);

  return (
    <div className="search-bar">
      <label htmlFor="contains">Contains the words...</label>
      <input
        type="text"
        id="contains"
        name="contains"
        value={search}
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
