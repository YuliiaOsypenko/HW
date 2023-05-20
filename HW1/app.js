// 2
console.log("Yuliia Osypenko");
//3
let first = "hello";
let second = "world";
alert(first + " " + second);
first = second;
alert(first + " " + second);
//4
const newObj = {
  String: "Object",
  Number: 1,
  Boolean: true,
  Undedined: undefined,
  Null: null,
};
//5
const isAdult = confirm("Are you of legal age?");
console.log(isAdult);
//6
const name = "Yuliia";
const surname = "Osypenko";
const group = "vk";
const year = 2001;
const isMarried = false;
console.log(typeof year + ":" + year);
console.log(typeof isMarried + ":" + isMarried);
console.log(typeof name + ":" + name);
console.log(typeof surname + ":" + surname);
console.log(typeof group + ":" + group);

const nullValue = null;
const undefinedValue = undefined;
console.log(typeof nullValue);
console.log(typeof undefinedValue);

//7
const login = prompt("Enter your login:");
const email = prompt("Enter your email:");
const password = prompt("Enter your password:");
alert(`Dear ${login}, your email is ${email}, your password is ${password}.`);

//8
const secondInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInMonth = 30;
const oneHour = secondInMinute * minutesInHour;
const oneDay = oneHour * hoursInDay;
const oneMonth = oneDay * daysInMonth;
alert(`One hour is equal to ${oneHour} seconds.`);
alert(`One day is equal to ${oneDay} seconds.`);
alert(`One day is equal to ${oneMonth} seconds.`);
