import React from "react";
import { RecipeDetail } from "./RecipeDetail";
import "./RecipeDetail.css";
export const RecipeList = ({ recipes, deleteRecipe }) => {
  return (
    <div>
      <h2>Recipes</h2>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            {/* <h3>{recipe.name}</h3>
          <p>Cuisine: {recipe.cuisine}</p> */}
            <RecipeDetail recipe={recipe} deleteRecipe={deleteRecipe} />
          </div>
        ))}
      </div>
    </div>
  );
};
