const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((item) => {
  const ingredient = document.createElement("li");
  ingredient.textContent = item;
  ingredient.classList.add("item");
  console.log(ingredient);
  ingredientsList.append(ingredient);
});
