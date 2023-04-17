const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ul = document.querySelector("#ingredients");
ingredients.forEach(function (ingredient, index) {

  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');
  console.log(liEl);
  ul.append(liEl);

});


