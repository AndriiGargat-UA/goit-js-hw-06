// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientsListRef = document.querySelector('#ingredients');
const createItem = ingredients.map(element => {
  const itemRef = document.createElement('li');
  itemRef.textContent = element;
  itemRef.classList.add('item');
  ingridientsListRef.appendChild(itemRef);
});

console.log(ingridientsListRef);

