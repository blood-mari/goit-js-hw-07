/*
Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
*/

const listEl = document.querySelector('#categories');
console.log(`В списке ${listEl.children.length} категории.`);

const liItemEl = document.querySelectorAll('li.item');

// console.log(liItemEl);

liItemEl.forEach(children => {
    console.log(`Категория: ${children.firstElementChild.textContent}`,),
    console.log(`Количество элементов: ${children.querySelectorAll('li').length}`,)
});