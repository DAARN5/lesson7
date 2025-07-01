Будемо додавати інтерактив на сторінку щоб якось взаїмодіяти

addEventListener - цей метод існує для того щоб прослховувати подію на моєму елементі, перший елемент 
як аргумент додаємо "click", в другому аргументі додаємо функцію, ця функція буде працювати коли 
на елементі btn натискаємо на click



const btn = document.querySelector(".js-click"); // отримаємо посилання на кнопку
const box = document.querySelector(".js-box");

btn.addEventListener("click", handleClick);
box.addEventListener("click", handleClick);

let step = 0;

function handleClick() {
  step += 50; // переміщуємо елемент на 50px
  box.style.marginTop = `${step}px`; // style - дає модливість працювати зі стилями
  box.style.marginLeft = `${step}px`;
}

































