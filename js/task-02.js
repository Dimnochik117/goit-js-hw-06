const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const itemsCreate = ingredients.map(ingredients => {
  const itemRef = document.createElement('li');
  itemRef.textContent = ingredients;
  return itemRef;
});

ingredientsRef.append(...itemsCreate);