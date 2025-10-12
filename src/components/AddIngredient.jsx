import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function AddIngredient() {
  const [ingredients, setIngredients] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isRecipe, setIsRecipe] = useState(false);

  function isIngredientExists(ingredientName) {
    if (ingredients.includes(ingredientName)) {
      return true;
    }
    return false;
  }

  function isEmpty(ingredientName) {
    if (ingredientName === "") {
      return true;
    }
    return false;
  }

  function validateIngredient(ingredientName) {
    if (isEmpty(ingredientName)) {
      return "Ingredient name cannot be empty.";
    } else if (isIngredientExists(ingredientName)) {
      return "Ingredient already exists.";
    } else {
      return "";
    }
  }

  function addIngredient(ingredientsFormData) {
    const ingredientName = ingredientsFormData.get("ingredient");
    if (validateIngredient(ingredientName) === "") {
      setIngredients([...ingredients, ingredientName]);
      setErrorMessage("");
    } else {
      setErrorMessage(validateIngredient(ingredientName));
    }
  }

  function handleGetRecipe() {
    setIsRecipe(!isRecipe);
  } 

  function hideErrorMessage() {
    setErrorMessage("");
  }

  return (
    <div className="container mx-auto px-4">
      <form
        // action handles preventing the default behavior of form submission,
        // and handles reset of values
        // it also gets the form data and passes it to addIngredient function
        action={addIngredient}
        className="flex flex-wrap gap-3 items-center py-10"
      >
        <input
          type="text"
          name="ingredient"
          placeholder="e.g. oregano"
          className="bg-white px-3 py-2 grow rounded-md border-1 border-gray-300 text-[14px] text-gray-600 placeholder:text-gray-600 outline-blue-400 focus:outline-blue-400 transition duration-300"
        />
        <button
          className="bg-black text-white px-5 py-2 rounded-md text-[14px] hover:cursor-pointer"
          aria-label="Click here to add ingredient"
        >
          + Add Ingredient
        </button>
      </form>

      {ingredients.length > 0 && (
        <>
          <IngredientsList ingredients={ingredients} handleGetRecipe={handleGetRecipe} />
        </>
      )}
      {isRecipe && (
        <ClaudeRecipe />
      )}

      {errorMessage && (
        <div onClick={hideErrorMessage} className="hover:cursor-pointer">
          <ErrorMessage message={errorMessage} />
        </div>
      )}
    </div>
  );
}
