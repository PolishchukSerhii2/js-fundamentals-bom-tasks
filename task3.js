// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. 
// Можуть видалятися всі елементи в будь-якому порядку.
// Список з елементами знаходиться у файлі index.html
// Для запуску використовувати Live Server
// Для перевірки виконання виконати команду node tests/task3.test.js

let dropdownMenu = document.querySelector("#dropdown");
let deleteBtn = document.querySelector("#deleteButton");

deleteBtn.addEventListener("click", () => {
    let itemToDelete = dropdownMenu.value;
    dropdownMenu.removeChild(
        dropdownMenu.querySelector(`[value="${itemToDelete}"]`)
    );
});