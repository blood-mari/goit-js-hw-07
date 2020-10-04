/*
Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
*/

const btnDecRef = document.querySelector(
    'button[data-action="decrement"]',
  );
  const btnIncRef = document.querySelector(
    'button[data-action="increment"]',
  );
  let counterValue = document.querySelector('#value');

  const onDecrementBtnClick = () =>
    (counterValue.textContent = Number(counterValue.textContent) - 1);
  const onIncrementBtnClick = () =>
    (counterValue.textContent = Number(counterValue.textContent) + 1);

  btnDecRef.addEventListener('click', onDecrementBtnClick);
  btnIncRef.addEventListener('click', onIncrementBtnClick);