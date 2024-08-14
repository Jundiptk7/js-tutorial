// higher-Order Function
// 1. fungsi sebagai argumen
// 1.1 map()
// const numbers = [1, 2, 3, 4];
// console.log(numbers);
// const doubled = numbers.map((num) => num * 2);
// console.log(doubled);

// 1.2 filter()
// const ages = [16, 21, 18, 24, 15];
// console.log(ages);
// const adults = ages.filter((age) => age >= 18);
// console.log(adults);

// 1.3 reduce()
// const numbers = [1, 2, 3, 4];
// console.log(numbers);
// const sum = numbers.reduce((total, num) => {
//   return total + num;
// }, 0);
// console.log(sum);

// 2. fungsi sebagai hasil
// 2.1 mengembalikan fungsi
// function createMultiplier(multiplier) {
//   return function (number) {
//     return number * multiplier;
//   };
// }

// const double = createMultiplier(2);
// console.log(double(5));

// const triple = createMultiplier(3);
// console.log(triple(5));

// 2.2 callback function
// function doOperation(x, y, operation) {
//   return operation(x, y);
// }

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// console.log(doOperation(4, 3, add));
// console.log(doOperation(4, 3, subtract));

// penggunaan lebih lanjut dari higher-order function
// 1. komposisi fungsi
// const compose = function (f, g) {
//   return function (x) {
//     return f(g(x));
//   };
// };

// const add1 = (x) => x + 1;
// const multiply2 = (x) => x * 2;
// const add1ThenMultiply2 = compose(multiply2, add1);
// console.log(add1ThenMultiply2(5));

// 2. Memoization
// function memoize(fn) {
//   const cache = {};
//   return function (...args) {
//     const key = JSON.stringify(args);
//     if (cache[key]) {
//       return cache[key];
//     }
//     const result = fn(...args);
//     cache[key] = result;
//     return result;
//   };
// }

// function slowSquare(n) {
//   // simulasi operasi yang lambat
//   for (let i = 0; i < 1000000000; i++) {}
//   return n * n;
// }

// const memoizedSquare = memoize(slowSquare);

// console.log(memoizedSquare(5)); //hitung pertama kali
// console.log(memoizedSquare(5)); //mengambil dari cache
