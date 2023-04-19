const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arrayIngredientEl = [];

const ul = document.querySelector("#ingredients");
ingredients.forEach(function (ingredient, index) {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("item");
  arrayIngredientEl.push(liEl);
});

ul.append(...arrayIngredientEl);
