export default function ClaudeRecipe() {
  return (
    <section className="my-10">
      <h2 className="text-[30px] font-[600] mb-5">Chef Claude Recommends:</h2>
      <article className="suggested-recipe-container" aria-live="polite">
        <p className="font-[500] text-[16px] text-gray-600 mb-10">
          Based on the ingredients you have available, I would recommend making
          a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is
          the recipe:
        </p>
        <strong className="font-[700] text-[14px] text-gray-600 mb-3 block">
          Ingredients:
        </strong>
        <ul className="mb-8">
          <li className="text-[14px] text-gray-600 mb-3 ingredientItem">
            1 lb. ground beef
          </li>
          <li className="text-[14px] text-gray-600 mb-3 ingredientItem">
            1 onion, diced
          </li>
          <li className="text-[14px] text-gray-600 mb-3 ingredientItem">
            3 cloves garlic, minced
          </li>
          <li className="text-[14px] text-gray-600 mb-3 ingredientItem">
            2 tablespoons tomato paste
          </li>
          <li className="text-[14px] text-gray-600 mb-3 ingredientItem">
            1 (28 oz) can crushed tomatoes
          </li>
          <li className="text-[14px] text-gray-600 mb-3 ingredientItem">
            1 cup beef broth
          </li>
          <li className="text-[14px] text-gray-600 mb-3 ingredientItem">
            1 teaspoon dried oregano
          </li>
          <li className="text-[14px] text-gray-600 mb-3 ingredientItem">
            1 teaspoon dried basil
          </li>
          <li className="text-[14px] text-gray-600 mb-3 ingredientItem">
            Salt and pepper to taste
          </li>
          <li className="text-[14px] text-gray-600 mb-3 ingredientItem">
            8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)
          </li>
        </ul>
        <strong className="font-[700] text-[14px] text-gray-600 mb-3 block">
          Instructions:
        </strong>
        <ul>
          <li className="text-[14px] text-gray-600 mb-3 ingredientItem">
            Bring a large pot of salted water to a boil for the pasta.
          </li>
          <li className="text-[14px] text-gray-600 mb-3 ingredientItem">
            In a large skillet or Dutch oven, cook the ground beef over
            medium-high heat, breaking it up with a wooden spoon, until browned
            and cooked through, about 5-7 minutes.
          </li>
          <li className="text-[14px] text-gray-600 mb-3 ingredientItem">
            Add the diced onion and minced garlic to the skillet and cook for
            2-3 minutes, until the onion is translucent.
          </li>
          <li className="text-[14px] text-gray-600 mb-3 ingredientItem">
            Stir in the tomato paste and cook for 1 minute.
          </li>
          <li className="text-[14px] text-gray-600 mb-3 ingredientItem">
            Add the crushed tomatoes, beef broth, oregano, and basil. Season
            with salt and pepper to taste.
          </li>
          <li className="text-[14px] text-gray-600 mb-3 ingredientItem">
            Reduce the heat to low and let the sauce simmer for 15-20 minutes,
            stirring occasionally, to allow the flavors to meld.
          </li>
          <li className="text-[14px] text-gray-600 mb-3 ingredientItem">
            While the sauce is simmering, cook the pasta according to the
            package instructions. Drain the pasta and return it to the pot.
          </li>
          <li className="text-[14px] text-gray-600 mb-3 ingredientItem">
            Add the Bolognese sauce to the cooked pasta and toss to combine.
          </li>
          <li className="text-[14px] text-gray-600 mb-3 ingredientItem">
            Serve hot, garnished with additional fresh basil or grated Parmesan
            cheese if desired.
          </li>
        </ul>
      </article>
    </section>
  );
}
