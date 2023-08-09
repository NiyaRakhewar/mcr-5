import React, { useContext, useState } from "react";
import { FoodContext } from "../../context/FoodContext";
import { HomeList } from "./HomeList";
import { Search } from "../Serach/Search.js";
import { AddRecipeModal } from "../RecipeModal/RecipeModal";

export const Home = () => {
  const { state, dispatch } = useContext(FoodContext);
  const [searchCategory, setSearchCategory] = useState("name");
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  console.log(state);

  const recipeData = JSON.parse(localStorage.getItem("recipe"));

  // Use recipeData if available, otherwise use state.recipe
  const recipes = recipeData ? recipeData : state.recipe;

  const filteredRecipes = recipes.filter((food) => {
    if (searchCategory === "name") {
      return food.name.toLowerCase().includes(searchQuery.toLowerCase());
    } else if (searchCategory === "ingredients") {
      return food.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (searchCategory === "cuisine") {
      return food.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return false;
  });

  const handleSaveRecipe = (newRecipe) => {
    dispatch({ type: "ADD_RECIPE", payload: newRecipe });
    setShowModal(false); // Close the modal after saving the recipe
  };

  return (
    <div className="food">
      <Search
        searchCategory={searchCategory}
        setSearchCategory={setSearchCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div
        className="food-list"
        style={{ gap: "1rem", boxShadow: "1px 1px 1px 1px rbga(0,0,0,0.4)" }}
      >
        {filteredRecipes.map((food) => (
          <HomeList food={food} key={food.id} />
        ))}
      </div>

      <button onClick={() => setShowModal(true)}>Add Recipe</button>

      {showModal && <AddRecipeModal onSave={handleSaveRecipe} />}
    </div>
  );
};
