import { useEffect, useState } from "react";
import RecipeTagList from "./RecipeTagList"; // assuming you've implemented this component
import RecipeList from "./RecipeList"; // assuming you've implemented this component

const App = () => {
  const [tags, setTags] = useState<string[]>([]); // State for storing the tags
  const [selectedTag, setSelectedTag] = useState<string | null>(null); // State for tracking selected tag
  const [recipes, setRecipes] = useState<any[]>([]); // State for storing recipes for the selected tag

  // Fetch the list of tags when the app starts
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes/tags");
        const data = await response.json();
        setTags(data); // Set the tags in state
      } catch (error) {
        console.error("Failed to fetch tags", error);
      }
    };

    fetchTags();
  }, []);

  // Fetch the recipes for the selected tag
  const fetchRecipes = async (tagName: string) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/recipes/tag/${tagName}`
      );
      const data = await response.json();
      setRecipes(data.recipes); // Set the recipes in state
      setSelectedTag(tagName); // Update the selected tag
    } catch (error) {
      console.error("Failed to fetch recipes", error);
    }
  };

  // Handler to clear the selected tag and go back to the tag list
  const handleBackToTags = () => {
    setSelectedTag(null);
    setRecipes([]); // Clear recipes
  };

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>

      {/* If no tag is selected, show the RecipeTagList */}
      {!selectedTag ? (
        <RecipeTagList tagList={tags} onSelectTag={fetchRecipes} />
      ) : (
        // Otherwise, show the RecipeList for the selected tag
        <div>
          <button onClick={handleBackToTags}>Back to tags</button>
          <RecipeList recipes={recipes} />
        </div>
      )}
    </div>
  );
};

export default App;
