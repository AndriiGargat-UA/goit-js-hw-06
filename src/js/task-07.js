// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) 
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const sizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
sizeControlRef.addEventListener('input', (event => {
    textRef.style.fontSize = sizeControlRef.value+"px";
}))