// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль 
// по кліку на button.change - color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnRef = document.querySelector('.change-color');
const colorRef = document.querySelector('.color');
const bodyRef = document.querySelector('body');

changeColorBtnRef.addEventListener('click', (event) => {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  colorRef.textContent = randomColor;
})
