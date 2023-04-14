// numbers.forEach(function (number, index) {
//     console.log(`Індекс ${index}, значення ${number}`);
//   });

// 1.Порахує і виведе в консоль кількість категорій в ul#categories, 
// тобто елементів li.item.
// 2.Для кожного элемента li.item у списку ul#categories, 
// знайде і виведе в консоль текст заголовку елемента (тегу <h2>)
//  і кількість елементів в категорії (усіх <li>, вкладених в нього).


//  1. нужно получить доступ к ли с классом ли-айтем
// 2. потом перебрать лишки вложенные в ул(потомки)
// 3. потом в кол-бэке приплюсовать их друг к другу

const liItemEl = document.querySelectorAll('.item');

console.log(liItemEl);

const liEl = document.querySelectorAll('.item ul li');



console.log(liEl);





// liItemEl.forEach(function (item, index) {
//     console.log(`Індекс ${index}, значення ${item}`);

    
//   });