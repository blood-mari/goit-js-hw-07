/*
Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.
*/

const inputRef = document.querySelector('#validation-input');

const onInputFocusChange = () => {
    if (Number(inputRef.value.length) === Number(inputRef.dataset.length)) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    }

    else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    }

};

inputRef.addEventListener('change', onInputFocusChange);
