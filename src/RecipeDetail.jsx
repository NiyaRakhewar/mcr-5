import React from "react";
import "./RecipeDetail.css";
import { IoIosArrowDropright } from "react-icons/io";
export const RecipeDetail = ({ recipe, deleteRecipe }) => {
  return (
    <div className="recipe-card">
      <img className="recipe-img" src={recipe.image} alt="" />
      <h2 className="recipe-name">{recipe.name}</h2>
      <div className="recipe-details">
        <p className="recipe-cuisine">
          <strong>Cuisine:</strong> {recipe.cuisine}
        </p>
        <p className="recipe-ingredients">
          <strong>Ingredients:</strong>{" "}
          <div>
            see recipe
            <IoIosArrowDropright />
          </div>
        </p>
        <p className="recipe-instructions">
          <strong>Instructions:</strong>{" "}
          <div>
            see recipe <IoIosArrowDropright />
          </div>
        </p>
      </div>
      <button className="delete-btn" onClick={() => deleteRecipe(recipe.id)}>
        Delete
      </button>
    </div>
  );
};
