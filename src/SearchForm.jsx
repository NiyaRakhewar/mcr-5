import React, { useState } from "react";

export const SearchForm = ({ searchRecipes }) => {
  const [searchCategory, setSearchCategory] = useState("name");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchRecipes(searchCategory, searchQuery);
  };

  return (
    <div>
      <h2>Search Recipes</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            name="category"
            value="name"
            checked={searchCategory === "name"}
            onChange={() => setSearchCategory("name")}
          />
          Name
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="ingredients"
            checked={searchCategory === "ingredients"}
            onChange={() => setSearchCategory("ingredients")}
          />
          Ingredients
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="cuisine"
            checked={searchCategory === "cuisine"}
            onChange={() => setSearchCategory("cuisine")}
          />
          Cuisine
        </label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
