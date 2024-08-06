// //callback functions
// // 1
// function fecthData(callback) {
//   setTimeout(() => {
//     const data = {
//       name: "jundi",
//       age: 24,
//     };
//     callback(data);
//   }, 2000);
// }

// function displayData(data) {
//   console.log(`Name: ${data.name}, Age: ${data.age}`);
// }
// console.log(1);
// fecthData(displayData);
// console.log(3);

// // 2
// function getUser(onUserRetrieved) {
//   setTimeout(() => {
//     const user = { name: "Zaid" };
//     onUserRetrieved(user);
//   }, 1000);
// }

// function showUser(user) {
//   console.log(`User Name: ${user.name}`);
// }

// getUser(showUser);

// // 3
// function getWeather(callback) {
//   setTimeout(() => {
//     const weather = {
//       temperature: 20,
//       condition: "sunny",
//     };
//     callback(weather);
//   }, 1000);
// }

// function displayWeather(weather) {
//   console.log(`temperature: ${weather.temperature}, condition: ${weather.condition}`);
// }

// getWeather(displayWeather);

// exercise
// 1.
// function getUser(callback) {
//   setTimeout(() => {
//     const user = {
//       name: "zaid",
//     };
//     callback(user);
//   }, 1000);
// }

// function display(user) {
//   console.log(`Name: ${user.name}`);
// }

// getUser(display);

// 2.
// function getWeather(callback) {
//   setTimeout(() => {
//     const weather = {
//       temperature: 34,
//       condition: "warm",
//     };
//     callback(weather);
//   }, 2000);
// }

// function show(weather) {
//   console.log(`temperature: ${weather.temperature}, condition: ${weather.condition}`);
// }

// getWeather(show);

// interval
// function getData(callback) {
//   setInterval(() => {
//     const data = [1, 2, 3, 4, 5];
//     callback(data);
//   }, 3000);
// }

// function displayData(data) {
//   data.forEach((e) => {
//     console.log(e);
//   });
// }

// getData(displayData);

//mengambil data dalam array setiap 3 detik
// function getData(callback) {
//   const data = [1, 2, 3, 4, 5];
//   let index = 0;

//   function sendNextItem() {
//     if (index < data.length) {
//       callback(data[index]);
//       index++;
//       setTimeout(sendNextItem, 3000);
//     }
//   }
//   sendNextItem();
// }

// function displayData(item) {
//   console.log(item);
// }

// getData(displayData);
