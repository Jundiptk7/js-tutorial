// function calculateArea(length, width) {
//   return length * width;
// }
// const result = calculateArea(7, 9);
// console.log(result);

// function greetUser(name) {
//   console.log(`hello ${name}!`);
// }
// greetUser("jundi");

// const multiply = function (a, b) {
//   return a * b;
// };

// console.log(multiply(3, 5));

// const square = (a) => Math.pow(a, 2); // a ** 2 //kuadrat
// console.log(square(4));

// const a = "this is global";

// function scope() {
//   const b = "this is local";
//   console.log(b);
//   return a;
// }
// console.log(scope());

// menentukan angka genap
// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEven(4));

// fungsi tambah
// function add() {
//   const result = [];
//   do {
//     const a = Number(prompt("angka pertama"));
//     const b = Number(prompt("angka kedua"));
//     const c = alert(`hasil ${a} + ${b} = ${a + b}`);
//     const stop = confirm("stop click 'ok' or next click 'cancle' ");
//     result.push(c);
//     if (stop === true) {
//       break;
//     }
//   } while (true);

//   return result;
// }
// console.log(add());

// closures
// 1.
// function createMultiplier(multiplier) {
//   return function (number) {
//     return number * multiplier;
//   };
// }

// const multiple = createMultiplier(5);
// console.log(multiple(4));

// 2.
// function createPerson(name, age) {
//   return {
//     getName: function () {
//       return name;
//     },
//     getAge: function () {
//       return age;
//     },
//   };
// }

// const person = createPerson("jundi", 24);

// const { getName, getAge } = person;
// console.log(getName());
// console.log(getAge());

// for (item in person) {
//   if (typeof person[item] === "function") {
//     console.log(person[item]());
//   }
// }

// console.log(person.getName());
