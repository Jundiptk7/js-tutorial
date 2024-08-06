// Function Declaration
// function functionName() {
//   return `hello world!`;
// }
// function functionName(a, b) {
//   return a * b;
// }
// console.log(functionName(9, 8));

// Function Exspression
// const z = function (a) {
//   return (a *= 4);
// };

// const x = z(20);
// console.log(x);

// Function Constructor membuat object baru menggunakan keyword new
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// let koko = new Person("koko", 24);
// console.log(koko.name);
// console.log(koko.age);

//Arrow function
// const x = () => 4;
// console.log(x());
// const x = (a, b) => {
//   return a * b;
// };
// const z = x(4, 5) * 10;
// console.log(z);

// Self-invoking Function : fungsi yang memanggil dirinya sendiri, hanya berlaku pada function exspression
// console.log(
//   (function () {
//     return 100;
//   })()
// );

// closures
// function makeCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter = makeCounter();
// console.log(counter());
// console.log(counter());

// contoh lain
// function outerFunction() {
//   let outerVariable = `I'm outside!`;

//   function innerFunction() {
//     console.log(outerVariable);
//   }
//   return innerFunction;
// }

// let closureFunction = outerFunction();
// closureFunction();

// Rekursif fungsi yang memanggil dirinya sendiri
// contoh rekursif
// faktorial
// function factorial(n) {
//   //base case
//   if (n === 0) {
//     return 1;
//   }
//   //recursive case
//   return n * factorial(n - 1);
// }
// console.log(factorial(10));

// deret fibonacci
// function fibonacci(n) {
//   // base case
//   if (n === 0 || n === 1) {
//     return n;
//   }
//   // recursive case
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(7));
