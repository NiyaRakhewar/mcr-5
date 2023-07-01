import React, { useState } from "react";
import { RecipeList } from "./RecipeList";
// import { RecipeForm } from "./RecipeForm";
import "./Home.css";
import { recipesData } from "./data";
import { SearchForm } from "./SearchForm";

export const Home = () => {
  const [recipes, setRecipes] = useState(recipesData);

  //   const addRecipe = (newRecipe) => {
  //     setRecipes([...recipes, newRecipe]);
  //   };

  const deleteRecipe = (recipeId) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
  };

  return (
    <div className="App">
      <h1>Recipe Organizer</h1>
      <SearchForm />
      {/* <RecipeForm addRecipe={addRecipe} /> */}
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
    </div>
  );
};
