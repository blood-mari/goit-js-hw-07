/*
В JS есть массив строк.

Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
*/

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const element = ingredients.map(ingridient => {
const newLi = document.createElement("li");
    newLi.textContent = ingridient;

    return newLi;
});

// console.log('element: ',element);

const listEl = document.querySelector('ul#ingredients');
listEl.prepend(...element);