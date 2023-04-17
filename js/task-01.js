const categoriesListEl = document.querySelector("#categories");

const liItemEl = categoriesListEl.querySelectorAll(".item");

console.log(`Number of categories: ${liItemEl.length}`);

liItemEl.forEach(function (item, index) {

  const nameCategoriesEl = item.querySelector("h2");

  const listEl = item.querySelector(".item ul");

  const fistChildEl = listEl.querySelectorAll("li");

  console.log(`Category: ${nameCategoriesEl.textContent}`);

  console.log(`Elements: ${fistChildEl.length}`);
  
});
