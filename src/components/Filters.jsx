import { useState, useEffect } from "react";

const Filters = ({ setFilters }) => {
  const [activeFilters, setActiveFilters] = useState([
    "Programming",
    "Misc",
    "Dark",
    "Spooky",
    "Christmas",
  ]);

  const handleFilter = (value) => {
    if (activeFilters.includes(value)) {
      setActiveFilters(activeFilters.filter((filter) => filter !== value));
    } else {
      setActiveFilters([...activeFilters, value]);
    }
  };

  useEffect(() => {
    setFilters(activeFilters.toString());
  }, [activeFilters]);

  return (
    <div className="filters">
      <input
        onChange={(e) => handleFilter(e.target.value)}
        checked={activeFilters.includes("Programming")}
        type="checkbox"
        name="Programming"
        value="Programming"
        id="Programming"
      />
      <label htmlFor="Programming">Programming</label>
      <input
        onChange={(e) => handleFilter(e.target.value)}
        checked={activeFilters.includes("Misc")}
        type="checkbox"
        name="Misc"
        value="Misc"
        id="Misc"
      />
      <label htmlFor="Misc">Misc</label>
      <input
        onChange={(e) => handleFilter(e.target.value)}
        checked={activeFilters.includes("Dark")}
        type="checkbox"
        name="Dark"
        value="Dark"
        id="Dark"
      />
      <label htmlFor="Dark">Dark</label>
      <input
        onChange={(e) => handleFilter(e.target.value)}
        checked={activeFilters.includes("Spooky")}
        type="checkbox"
        name="Spooky"
        value="Spooky"
        id="Spooky"
      />
      <label htmlFor="Spooky">Spooky</label>
      <input
        onClick={(e) => handleFilter(e.target.value)}
        checked={activeFilters.includes("Christmas")}
        type="checkbox"
        name="Christmas"
        value="Christmas"
        id="Christmas"
      />
      <label htmlFor="Christmas">Christmas</label>
    </div>
  );
};

export default Filters;
