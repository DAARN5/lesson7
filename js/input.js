/**
 * - Подія input
 * - Подія blur
 *
 * Виводь в консоль все що користувач вводить в input
 */

const jsCheckbox = document.querySelector(".js-checkbox");

jsCheckbox.addEventListener("change", () => {
  console.log("ok");
});
//при chekbox використовується подія change 

const userName = document.querySelector(".js-user-name");

userName.addEventListener("input", (event) => {
  console.log(event.target.value);
});

/____________________________________________________________________________________/


const userName = document.querySelector(".js-user-name");

userName.addEventListener("focus", () => {
  console.log("ok");
});  // коли ми клікаємо або переходимо таб-ом отримаємо focus


userName.addEventListener("blur", () => {
  console.log("ok");
}); // відбувається тоді коли спочатку на input був focus (був активний) а потім ми його втрачаємо


userName.addEventListener("blur", (event) => {
  const name = event.target.value;

  alert('Hello ${name}')
}); // якщо ми напишемо в input якесь слово (Petya), виходить табличка (alert) з виразом Hello Petya 









