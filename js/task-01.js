// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль
// текст заголовку елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).

const categoriesRef = document.querySelector('#categories');
const titleRef = categoriesRef.querySelectorAll('h2');
const counter = parent => { return parent.childElementCount };

console.log(`Number of categories: ${counter(categoriesRef)}`);
titleRef.forEach(element => { 
    console.log(`Category: ${element.textContent}`)
    console.log(`Elements: ${counter(element.nextElementSibling)}`)
});



