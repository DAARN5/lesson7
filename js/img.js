const imgEl = document.querySelector(".hero__image"); - це як доспуть до зображення, розуміння  з яким обєктом будемо взаїмодіяти

console.log(imgEl.src); - так можна звернутись до зображення, саме за її посиланням


imgEl.src = "https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg"; - - тут ми взяли атрибут imgEl.src і додали інше посилання, в консолі видасть нове задане посилання


imgEl.alt = "new cat"; - тут ми змінили на new cat , в консолі вже видає new cat
console.log(imgEl.alt); - тут вида саме що є в html

const heroTitle = document.querySelector(".hero__title"); - щоб працювати з заголовком зображення

console.log(heroTitle.textContent);  textContent - дає можливість витягти текст з елеменьу

heroTitle.textContent = "Title lalala"; - таким чином можна змінити заголовок , текст

/*
 * Атрибути
 * - get(ім'я атрибута)
 * - set(ім'я атрибута)
 * - remove(ім'я атрибута)
 * - has(ім'я атрибута)
 */

console.log(imgEl.getAttribute("src"));
console.log(imgEl.src); // і з get і без get ці 2 строки коду видають одне і те саме - адрес зображення

imgEl.setAttribute("width", 480) - в цей метод передаються 2 аргументи перше - імя атрибута, друге  - значення
яке хочу туди записати

imgEl.removeAttribute("width");  - може видалити атрибут яккий назначили

console.log(imgEl.hasAttribute("src")); // true
console.log(imgEl.hasAttribute("href")); // false


/*
 * Data-атрибути
 */

// const actions = document.querySelectorAll('.actions button');

// actions[1].dataset.action = "lalala";
// actions[1].dataset.color = "red";

// console.log(actions[1].dataset.action);

// delete actions[1].dataset.color;


/________________________________________________________________________/

/*
 * Интерфейс classList
 * - add
 * - remove
 * - toggle
 * - replace
 * - contains
 */



const currentPageUrl = '/contact';

const linkEl = document.querySelector('.site-nav__link[href="/contact"]');
                                  або 
const linkEl = document.querySelector('.site-nav__link[href="${currentPageUrl}"]');                          

console.log(linkEl); // це шлах щоб дістатись li(contacts) в ul(листі)

/_______________________________________________________________________/

linkEl.classList.add('site-nav__link--current'); - спосіб додати html класс

linkEl.classList.remove('site-nav__link--current'); - спосіб видалити html класс

linkEl.classList.toggle("site-nav__link--current"); - метод toggle якщо клаас є нічого не робіть, якщо цього класу немає додає цей класс

linkEl.classList.replace("site-nav__link--current", "blue"); - замінює один клас на інший,

console.log(linkEl.classList.contains("site-nav__link--current"));- перевіряє наявність класу

/______________________________________________________________________/

/*
 * Створюємо зображення
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */

const imgEl = document.createElement("img");

imgEl.src = "https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg";
imgEl.alt = "valais-alpine-mountains-glacier";
imgEl.width = 320;

const heroEl = document.querySelector(".hero");

heroEl.append(imgEl, titleEl);
/___________________________________________________________________________/
/*
 * Створюємо та додаємо новий пункт меню
 */

// const navItemEl = document.createElement("li");
// navItemEl.classList.add("site-nav__item");

// const navLinkEl = document.createElement("a");
// navLinkEl.href = "/profile";
// navLinkEl.classList.add("site-nav__link");
// navLinkEl.textContent = "Lalala";

// navItemEl.append(navLinkEl);

// const siteNav = document.querySelector(".site-nav");
// siteNav.append(navItemEl);

/____________________________________________________________________________/

Задача: 
Для Кожного елемента масиву створити окремий елемент розмітки
За допомогою методу Map

/*
 * Створюємо та додаємо колекцію
 */
const options = [
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.color-picker');

const elements = options.map((option) => {
  const btn = document.createElement("button");
  btn.classList.add("color-picker__option");
  btn.textContent = option.label;
  btn.style.backgroundColor = option.color;

  return btn;
});

console.log(elements);

colorPickerContainerEl.append(...elements);

/_____________________________________________________________________________/

/*
 * Пишемо функцію для створення розмітки колорпікера
 */

const createMarkup = (arr) => {
  return arr.map((option) => {
    const btn = document.createElement("button");
    btn.classList.add("color-picker__option");
    btn.textContent = option.label;
    btn.style.backgroundColor = option.color;

    return btn;
  });
};

console.log(createMarkup(options));

colorPickerContainerEl.append(...createMarkup(options));





















































































