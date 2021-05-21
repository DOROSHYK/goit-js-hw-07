"use strict";

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Используй массив объектов images 

// для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные 
// строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию
// вставки.
// Добавь минимальное оформление галереи флексбоксами
// или гридами через css - классы.

const templateStrings = (({url, alt}) => `<li><img src = '${url}' alt = '${alt}' width = 300 height = 200></li>`);
const createGalery = images.reduce((acc, item) => acc + templateStrings(item), '');
const ulEl = document.querySelector('#gallery');
ulEl.insertAdjacentHTML('afterbegin', createGalery);
 ulEl.setAttribute('style', 'list-style: none', 'display: flex;')
console.log(ulEl);

//////////////////////////////////////////////////
// version two
/////////////////////////////////////////////////

// const ulEl = document.querySelector('#gallery');
//  ulEl.setAttribute('style', 'list-style: none', 'display: flex;')

// const createGalery = images.map(ell => {
//  const liEl = document.createElement('li');
// const imgEl = document.createElement('img');
//   liEl.appendChild(imgEl);
  
 
//   imgEl.setAttribute('src', ell.url);
//   imgEl.setAttribute('alt', ell.alt);
//   imgEl.setAttribute('width', '300px');

//   ulEl.appendChild(liEl);
// })
// console.log(ulEl);
 

  

