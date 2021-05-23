'use strict'
const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
inputEl.addEventListener('input', onSpanChange);

function onSpanChange (event) {
    spanEl.style.fontSize = event.currentTarget.value + '2px';
}
