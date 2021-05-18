const calkulate = {
    value: 0,
    increment () {
        console.log(this);
        this.value += 1;
    },

    decrement() {
        console.log(this);
        this.value -= 1;
    },
}

// console.log(document);
const decrementBtn = document.querySelector('[data-action="decrement"]');
console.log(decrementBtn);

const incrementBtn = document.querySelector('[data-action="increment"]');
console.log(incrementBtn);

const valueElement = document.querySelector('#value');
console.log(valueElement);

incrementBtn.addEventListener('click', () => {
    console.log('click on increment');
    calkulate.increment();
    console.log(calkulate);
    valueElement.textContent = calkulate.value;
});

decrementBtn.addEventListener('click', () => {
    console.log('click on decrement')
    calkulate.decrement();
    console.log(calkulate);
    valueElement.textContent = calkulate.value;
});