// Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера
//  і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
// Для запуску використовувати Live Server
// Для перевірки node tests/task4.test.js

let widthLabel = document.querySelector("#widthValue");
let heightLabel = document.querySelector("#heightValue");

window.addEventListener("resize", (e) => {
    widthLabel.textContent = e.target.innerWidth;
    heightLabel.textContent = e.target.innerHeight;
});
