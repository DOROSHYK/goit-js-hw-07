const ulCategoriesEl = document.querySelector("#categories")
console.log(ulCategoriesEl);


const allCategoriesEl = ulCategoriesEl.querySelectorAll('.item');
console.log(`В списке ${allCategoriesEl.length} категории.`);

// Для каждого элемента li.item в списке ul#categories,
//     найдет и выведет в консоль текст заголовка элемента(тега h2)
// и количество элементов в категории(всех вложенных в него
//      элементов li).

const allTitles = [...allCategoriesEl].map(categorie => `Категория: ${categorie.children[0].textContent}
Количество элементов: ${categorie.children[1].children.length} `).join('\n');
console.log(allTitles);








