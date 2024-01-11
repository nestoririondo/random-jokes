import { useState, useEffect } from "react";

const Categories = ({ setCategories }) => {
  const [activeCategories, setActiveCategories] = useState([
    "Programming",
    "Miscellaneous",
    "Dark",
    "Spooky",
    "Christmas",
  ]);

  const handleFilter = (value) => {
    if (activeCategories.includes(value)) {
      setActiveCategories(
        activeCategories.filter((filter) => filter !== value)
      );
    } else {
      setActiveCategories([...activeCategories, value]);
    }
  };

  useEffect(() => {
    setCategories(activeCategories.toString());
  }, [activeCategories]);

  return (
    <div className="filters">
      <input
        onChange={(e) => handleFilter(e.target.value)}
        checked={activeCategories.includes("Programming")}
        type="checkbox"
        name="Programming"
        value="Programming"
        id="Programming"
      />
      <label htmlFor="Programming">Programming</label>
      <input
        onChange={(e) => handleFilter(e.target.value)}
        checked={activeCategories.includes("Miscellaneous")}
        type="checkbox"
        name="Miscellaneous"
        value="Miscellaneous"
        id="Miscellaneous"
      />
      <label htmlFor="Miscellaneous">Miscellaneous</label>
      <input
        onChange={(e) => handleFilter(e.target.value)}
        checked={activeCategories.includes("Dark")}
        type="checkbox"
        name="Dark"
        value="Dark"
        id="Dark"
      />
      <label htmlFor="Dark">Dark</label>
      <input
        onChange={(e) => handleFilter(e.target.value)}
        checked={activeCategories.includes("Spooky")}
        type="checkbox"
        name="Spooky"
        value="Spooky"
        id="Spooky"
      />
      <label htmlFor="Spooky">Spooky</label>
      <input
        onClick={(e) => handleFilter(e.target.value)}
        checked={activeCategories.includes("Christmas")}
        type="checkbox"
        name="Christmas"
        value="Christmas"
        id="Christmas"
      />
      <label htmlFor="Christmas">Christmas</label>
    </div>
  );
};

export default Categories;
