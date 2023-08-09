import React from "react";

export const Search = ({
  searchCategory,
  setSearchCategory,
  searchQuery,
  setSearchQuery,
}) => {
  const handleSearchCategoryChange = (event) => {
    setSearchCategory(event.target.value);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <form style={{ display: "flex", flexDirection: "row-reverse" }}>
      <div>
        <label>
          <input
            type="radio"
            value="name"
            checked={searchCategory === "name"}
            onChange={handleSearchCategoryChange}
          />
          Name
        </label>
        <label>
          <input
            type="radio"
            value="ingredients"
            checked={searchCategory === "ingredients"}
            onChange={handleSearchCategoryChange}
          />
          Ingredients
        </label>
        <label>
          <input
            type="radio"
            value="cuisine"
            checked={searchCategory === "cuisine"}
            onChange={handleSearchCategoryChange}
          />
          Cuisine
        </label>
      </div>

      <input
        type="text"
        style={{ padding: "5px", paddingLeft: "5px", borderRadius: "0.5rem" }}
        value={searchQuery}
        onChange={handleSearchQueryChange}
        placeholder="Enter search query"
      />
    </form>
  );
};
