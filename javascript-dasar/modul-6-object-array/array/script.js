// const fruits = ["apple", "grape", "pineapple", "banana"]; //array literal
// console.log(fruits);

// fruits[4] = "orange"; //menambah elemen

// fruits[3] = "blueberry"; //mengubah elemen

// fruits.length = 3; //menghapus elemen
// console.log(fruits);
// const numbers = new Array(1, 2, 3, 4, 5); //constructor
// console.log(typeof numbers);

// operasi dasar pada array
// push
// fruits.push("orange"); //menambah elemen di akhir
// console.log(fruits);
// fruits.pop(); //menghapus elemen terakhir
// console.log(fruits);
// fruits.shift(); //menghapus elemen pertama
// console.log(fruits);
// fruits.unshift("melon"); //menambah elemen di awal array
// console.log(fruits);
// fruits.splice(2, 1); //menghapus elemen dari index tertentu cth: menghapus 1 elemen dari index 2
// console.log(fruits);

// const newArray = fruits.slice(1, 3); //slice mengiris array dari index tertentu dan menaruhnay ke array baru
// console.log(fruits);
// console.log(newArray);

// iterasi pada array
// for
// for (let i = 0; i < fruits.length; i++) {
//   console.log(`${fruits[i]} \n`);
// }

//for...of
// for (const fruit of fruits) {
//   console.log(`${fruit} \n`);
// }

//foreach
// fruits.forEach((e) => {
//   console.log(`${e}`);
// });

// method pada array
// const numbers = [1, 3, 5, 7, 9];

//map() membuat array baru dengan hasil pemanggilan fungsi pada setiap elemen
// const double = fruits.map((fruit) => `organic ${fruit}`);
// console.log(double);

//filter() membuat array baru dengan elemen yang memenuhi kondisi
// const even = fruits.filter((fruit) => fruit === "apple");
// console.log(even);

//reduce() mengakumulasi nilai berdasarkan fungsi yang disediakan
// const sum = numbers.reduce((total, number) => {
//   console.log(total);
//   return total + number;
// }, 5);
// console.log(sum);

// find() menemukan elemen pertama yang memenuhi kondisi
// const found = numbers.find((number) => number > 1);
// console.log(found);

// findIndex() menemukan indeks elemen pertama yang memenuhi kondisi
// const index = numbers.findIndex((number) => number > 1);
// console.log(index);

// includes() memeriksa apakah array memeiliki elemen tertentu
// const hastwo = numbers.includes(9);
// console.log(hastwo);

// sort() mengurutkan elemen array
// const arr = [9, 5, 7, 3, 1, 2, 4, 8, 6];
// console.log(arr);
// arr.sort((a, b) => a - b);
// console.log(arr);

// reverse() membalikan urutan elemen array
// arr.reverse();
// console.log(arr);

//concat() menggabungkan dua atau lebih array
// const moreArr = [13, 11, 12, 10, 15, 14];
// const allArr = arr.concat(moreArr);
// console.log(allArr);

// join() menggabungkan elemen array menjadi string
// const joined = arr.join(", ");
// console.log(joined);

// destructuring array
// const [first, second, third, fourth] = [1, 2, 3, 4];
// console.log(fourth);
// console.log(third);
// console.log(second);
// console.log(first);

// const [a, b, c = 3] = [1, 2]; //nilai default
// console.log(a);
// console.log(b);
// console.log(c);

// const nestedArray = [1, [2, 3], 4];
// const [x, [y, z], w] = nestedArray;
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(w);

// const [first, , third] = [1, 2, 3]; //skip item
// console.log(first);
// console.log(third);

// spread opertor
// menggabungkan array
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log(combined);

// membuat salinan array
// const original = [1, 2, 3];
// const copy = [...original];
// console.log(original);
// console.log(copy);
