const calkulate = {
    value: 0,
    increment () {
        console.log(this);
        this.value += 2;
    },

    decrement() {
        console.log(this);
        this.value -= 2;
    },
}

// console.log(document);
const incrementbtn = document.querySelector('.js_increment');
console.log(incrementbtn);

const decrement = document.querySelector('.js_decrement');
// console.log(decrement);

const valueElement = document.querySelector('.start_value');
// console.log(valueElement);

incrementbtn.addEventListener('click', () => {
    // console.log('click on increment');
    calkulate.increment();
    // console.log(calkulate);
    valueElement.textContent = calkulate.value;
});

decrement.addEventListener('click', () => {
    // console.log('click on decrement')
    calkulate.decrement();
    // console.log(calkulate);
    valueElement.textContent = calkulate.value;
});