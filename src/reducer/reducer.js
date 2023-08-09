export const initialState = {
  recipe: JSON.parse(localStorage.getItem("recipe")) || [],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESFULL_DATA": {
      return { ...state, recipe: action.payload };
    }
    case "ADD_RECIPE": {
      const updatedRecipe = [...state.recipe, action.payload];
      // Save the updated recipe to localStorage or any other form of persistence
      localStorage.setItem("recipe", JSON.stringify(updatedRecipe));
      return { ...state, recipe: updatedRecipe };
    }
    case "DELETE_RECIPE": {
      const updatedRecipe = state.recipe.filter(
        (recipe) => recipe.id !== action.payload
      );
      // Save the updated recipe to localStorage or any other form of persistence
      localStorage.setItem("recipe", JSON.stringify(updatedRecipe));
      return { ...state, recipe: updatedRecipe };
    }
    default:
      return state;
  }
};
