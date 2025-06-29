/*
 * Властивість innerHTML
 * - зчитування
 * - запис
 */

const titleEl = document.querySelector(".title");

// console.log(titleEl.textContent);
titleEl.innerHTML = '<a href="">Title</a>';  inner HTML - вміє читати span, вміє видалити 
старі дані і додати нові, у випадку коли працюємо з рядком


/*
 * Вставка розмітки за допомогою insertAdjacentHTML()
 */

titleEl.insertAdjacentHTML("beforeend", '<a href="/">My title</a>'); - використовуємо 
коли до старих даних додати нові , якщо працюємо з рядком









