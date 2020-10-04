const magicBtn = document.querySelector('.js-magic-btn');

/*
 * document.querySelector(selector) и document.querySelectorAll(selector)
 *   selector - любой валидный CSS-селектор
 *
 * Что возвращают?
 */

const navEl = document.querySelector('.site-nav');
console.log('navEl', navEl);

const navLinksEl = document.querySelectorAll('.site-nav__link');
console.log('navLinksEl', navLinksEl);

/*
 * Document.querySelector* и Element.querySelector*
 */

const magicBtn = document.querySelector('.js-magic-btn');
/*
 * Интерфейс classList
 * - add(класс)
 * - remove(класс)
 * - toggle(класс)
 * - replace(старыйКласс, новыйКЛасс)
 * - contains(класс)
 */

const currentPageUrl = '/contact';

const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`,
);

console.log(linkEl);
linkEl.classList.add('site-nav__link--current');

const navEl = document.querySelector('.site-nav');

// const firstNavItemEl = navEl.querySelector('.site-nav__item');
const firstNavItemEl = navEl.firstElementChild;
console.log(firstNavItemEl);
console.log(navEl.children);
console.log(navEl.lastElementChild);

/*
 * - Создание элементов
 * - Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */

/*
 * Создаём заголовок
 */
const titleEl = document.createElement('h1');
titleEl.classList.add('page-title');
titleEl.textContent = 'Это заголовок страницы :)';
// console.log(titleEl);

// document.body.appendChild(titleEl);

/*
 * Создаём изображение
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
const imageEl = document.createElement('img');
imageEl.src =
  'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
imageEl.alt = 'valais-alpine-mountains-glacier';
imageEl.width = 320;
// console.log('imageEl', imageEl);

// document.body.appendChild(imageEl);

const heroEl = document.querySelector('.hero');
// heroEl.appendChild(titleEl);
// heroEl.appendChild(imageEl);
heroEl.append(titleEl, imageEl);

/*
 * Создаём и добавляем новый пункт меню
 */
const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Личный кабинет';
navLinkEl.href = '/profile';

navItemEl.appendChild(navLinkEl);
// console.log(navItemEl);

const navEl = document.querySelector('.site-nav');

// navEl.appendChild(navItemEl);
navEl.insertBefore(navItemEl, navEl.firstElementChild);

const galleryRef = document.querySelector('#gallery');

images.forEach(el =>
    galleryRef.insertAdjacentHTML(
      'beforeend',
      `<li><img src="${el.url}" alt="${el.alt}"></li>`,
    ),
  );