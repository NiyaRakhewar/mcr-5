import React, { useContext } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FoodContext } from "../../context/FoodContext";

export const HomeList = ({ food }) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(FoodContext);

  const handleDelete = (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the parent element
    dispatch({ type: "DELETE_RECIPE", payload: food.id });
  };

  return (
    <div
      className="card"
      style={{ backgroundColor: "#dadada" }}
      key={food.id}
      onClick={() => navigate(`/singlePage/${food.id}`)}
    >
      <div className="card-image">
        <img src={food.image} alt="" className="food-image" />
      </div>
      <div className="card-details">
        <h3>{food.name}</h3>
        <p className="cuisine-type">Cuisine Type: {food.cuisine}</p>
        <p>
          Ingredients: <span className="see-recipe">See Recipe {`>`}</span>
        </p>
        <p>
          Instruction: <span className="see-recipe">See Recipe {`>`}</span>
        </p>
        <RiDeleteBin6Line
          style={{
            cursor: "pointer",
            position: "absolute",
            top: "0px",
            right: "0px",
          }}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};
