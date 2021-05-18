const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


// Напиши скрипт, который для каждого
// элемента массива ingredients создаст отдельный li,после 
// чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().
const ulEllement = document.querySelector('#ingredients');
console.log(ulEllement);


const addIngredients = arr => {
  for (let i = 0; i < arr.length; i += 1) {
    // console.log(arr[i]);
    const createLiEll = document.createElement('li');
    console.log(createLiEll);
    createLiEll.textContent = arr[i];
    
    ulEllement.appendChild(createLiEll);
  }
}


addIngredients(ingredients);