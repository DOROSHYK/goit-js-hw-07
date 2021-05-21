"use strict";

// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна
// отображаться строка 'незнакомец'.
const inputEl = document.querySelector('#name-input');
// console.log(inputEl);

inputEl.addEventListener('keyup', function (e) {
    const spanText = document.querySelector('#name-output');
    if (inputEl.value === '') {
        spanText.textContent = 'незнакомец';
    } else {
       spanText.textContent = e.target.value; 
    }
})