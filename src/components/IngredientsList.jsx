export default function IngredientsList({ ingredients, handleGetRecipe, isLoading, recipeSectionRef }) {
    return (
        <div>
            <p className="font-medium text-[20px] mb-4">Ingredients on hand:</p>
            <ul>
                {ingredients.map((ingredient, index) => (
                <li
                    key={index}
                    className="text-[14px] text-gray-600 mb-3 ingredientItem"
                >
                    {ingredient}
                </li>
                ))}
            </ul>
            {ingredients.length > 4 && (
            <div ref={recipeSectionRef} className="flex justify-between items-center bg-[#e3e3e3] rounded-md px-6 py-8 mt-10">
              <div>
                <p className="text-[18px] font-[500] mb-2">
                  Ready for a recipe?
                </p>
                <p className="text-[#6B7280] font[400] text[14px]">
                  Generate a recipe from your list of ingredients.
                </p>
              </div>
              <button onClick={handleGetRecipe} className="bg-[#D17557] text-white px-5 py-3 rounded-md text-[14px] hover:cursor-pointer">
                {isLoading ? "Generating..." : "Get a Recipe"}
              </button>
            </div>
          )}
        </div>
    )
}