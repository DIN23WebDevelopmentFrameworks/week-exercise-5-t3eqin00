import React from "react";
import RecipeTag from "./RecipeTag";

interface IRecipeTagListProps {
  tagList: string[];
  onSelectTag: (tagName: string) => void;
}

const RecipeTagList: React.FC<IRecipeTagListProps> = ({
  tagList,
  onSelectTag,
}) => {
  return (
    <div>
      <h1>Select a Recipe Tag:</h1>
      <div>
        {tagList.map((tag) => (
          <RecipeTag key={tag} tagName={tag} onSelectTag={onSelectTag} />
        ))}
      </div>
    </div>
  );
};

export default RecipeTagList;
