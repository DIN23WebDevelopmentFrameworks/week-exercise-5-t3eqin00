import React from "react";
import { IRecipe } from "./types";

interface IRecipeProps {
  recipeData: IRecipe;
}

const Recipe: React.FC<IRecipeProps> = ({ recipeData }) => {
  return (
    <div className="recipe">
      <h3>{recipeData.name}</h3>
      <img src={recipeData.image} alt={recipeData.name} />
      <p>
        <strong>Ingredients:</strong> {recipeData.ingredients.join(", ")}
      </p>
      <p>
        <strong>Instructions:</strong> {recipeData.instructions.join(" ")}
      </p>
      <p>
        <strong>Prep Time:</strong> {recipeData.prepTimeMinutes} mins
      </p>
      <p>
        <strong>Cook Time:</strong> {recipeData.cookTimeMinutes} mins
      </p>
      <p>
        <strong>Servings:</strong> {recipeData.servings}
      </p>
      <p>
        <strong>Difficulty:</strong> {recipeData.difficulty}
      </p>
    </div>
  );
};

export default Recipe;
