import React, { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";
import { recipes } from "../data";

export const FoodContext = createContext();
export const FoodProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const getData = () => {
      dispatch({ type: "FETCH_SUCCESFULL_DATA", payload: recipes });
    };
    getData();
  }, []);

  return (
    <FoodContext.Provider value={{ state, dispatch }}>
      {children}
    </FoodContext.Provider>
  );
};
