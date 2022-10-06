// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const btnMinusRef = document.querySelectorAll('button')[0];
const btnPlusRef = document.querySelectorAll('button')[1];
let value = 0;

btnMinusRef.addEventListener(`click`, (event) => {
    value -= 1;
    const valueRef = document.querySelector('span');
    valueRef.textContent = value;
})

btnPlusRef.addEventListener(`click`, (event) => {
    value += 1;
    const valueRef = document.querySelector('span');
    valueRef.textContent = value;
})


