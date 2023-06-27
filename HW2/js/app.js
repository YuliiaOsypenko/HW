//1
// Дано три цілих числа: a, b, c. Перевірте істинність висловлювання:
//  a < b < c

function compare(a, b, c) {
  return a < b < c;
}

//2
// Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, оперуючи при цьому змінними х і у.

let x = 1;
let y = 2;

let res1 = String(x) + y;
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = !!String(x) + String(y);
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = x < y;
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = parseInt(Boolean(x));
console.log(res4); // NaN
console.log(typeof res4); // ""number""

//3
// Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку.
// Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи.
// Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”.
// Якщо вік менше 18 років вивести “Ви ще надто молоді”,

const isAdult = +prompt("How old are you?");
const result = isAdult >= 18 ? "You are of legal age" : "You are too young";
alert(result);

//4
// Задано масив чисел, знайти число яке найбільш часто входить в масив,
// занести це число в новий масив і видалити всі входження цього числа із поточного масиву.
// let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]
// let data = ... // 5
// ...
// console.log(arr) // [4, 2, 1, 6, 3, 2]

function mostFrequentElement(arr) {
  const result = {};
  let counter = 0;
  let data = 0;
  for (let i = 0; i < arr.length; i++) {
    let a = arr[i];
    if (result[a] != undefined) ++result[a];
    else result[a] = 1;
  }
  for (let num in result) {
    if (result[num] > counter) {
      data = num;
      counter++;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === +data) {
      arr.splice(i, 1);
    }
  }
  return [+data, arr];
}

//5
// Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
// Необхідно
//     a) визначити і вивести в консоль площу трикутника
//     b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
// Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести
// 'Incorrect data‘. Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми
// (наприклад:  8.42355465 =>  8.424).

let sides = [];
let curenntSide;
for (let i = 1; i <= 3; i++) {
  curenntSide = prompt(`Enter the legth of the ${i} side`);
  if (!isFinite(+curenntSide)) {
    alert("Incorrect data");
    break;
  }
  sides.push(+curenntSide);
}
console.log(sides);
if (sides.length > 1) {
  //площa трикутника
  console.log(
    (
      (1 / 2) *
      sides[0] *
      sides[1] *
      Math.sin((sides[2] * Math.PI) / 180)
    ).toFixed(3)
  );
  //перевірка, чи цей трикутник є прямокутним
  console.log(
    Math.pow(sides[2], 2) == Math.pow(sides[0], 2) + Math.pow(sides[1], 2)
      ? "This triangle is a rectangle"
      : "This triangle is not a rectangle"
  );
}

// 6
// Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат.
// Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.

function calc(a, b, op) {
  switch (op) {
    case 1:
      return a - b;
    case 2:
      return a * b;
    case 3:
      return a / b;
    default: {
      return a + b;
    }
  }
}
//7
// Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи.
// Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
// findUnique([1, 2, 3, 5, 3]);  // => false
// findUnique([1, 2, 3, 5, 11]); // => true

function findUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    return arr.filter((x) => x == arr[i]).length > 1;
  }
}
