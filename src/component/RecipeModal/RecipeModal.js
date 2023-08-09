import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./RecipeModal.css";

export const AddRecipeModal = ({ onSave }) => {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [cuisineType, setCuisineType] = useState("");
  const [image, setImage] = useState(null);
  const [showModal, setShowModal] = useState(true);

  const handleSave = () => {
    const newRecipe = {
      id: uuidv4(),
      name: recipeName,
      ingredients: ingredients.split(","),
      instructions: instructions.split(","),
      cuisine: cuisineType,
      image: image ? URL.createObjectURL(image) : null, // Create a URL for the uploaded image
    };

    onSave(newRecipe);

    setRecipeName("");
    setIngredients("");
    setInstructions("");
    setCuisineType("");
    setImage(null);
    setShowModal(false);
  };

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={`modal ${showModal ? "show" : ""}`}>
      <div className="modal-content">
        <h2>Add Recipe</h2>
        <form>
          <label htmlFor="recipeName">Recipe Name:</label>
          <input
            type="text"
            id="recipeName"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
          />

          <label htmlFor="ingredients">Ingredients:</label>
          <input
            type="text"
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />

          <label htmlFor="instructions">Cooking Instructions:</label>
          <input
            type="text"
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />

          <label htmlFor="cuisineType">Cuisine Type:</label>
          <input
            type="text"
            id="cuisineType"
            value={cuisineType}
            onChange={(e) => setCuisineType(e.target.value)}
          />

          <label htmlFor="recipeImage">Recipe Image:</label>
          <input
            type="file"
            id="recipeImage"
            accept="image/*"
            onChange={handleImageUpload}
          />

          <div className="modal-buttons">
            <button type="button" onClick={handleSave}>
              Save
            </button>
            <button type="button" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
