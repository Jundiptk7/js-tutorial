// async function fecthData() {
//   console.log(`Status: Pending`);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const succes = Math.random() > 0.5;
//       if (succes) {
//         const user = { name: "koko", age: 25 };
//         resolve(user);
//       } else {
//         reject("Failed to fecth user");
//       }
//     }, 1000);
//   });
// }

// async function displayData() {
//   try {
//     const data = await fecthData();
//     console.log(`Status: Fullfilled`);
//     console.log(`Name: ${data.name}\nAge: ${data.age}`);
//   } catch (error) {
//     console.log(`Status: Rejected`);
//     console.log(`Error: ${error}`);
//   }
// }

// displayData();

// contoh dasar: mengambil data dari API
// async function fecthUserData(userId) {
//   try {
//     const response = await fetch(`https://api.example/users/${userId}`);
//     const userData = await response.json();
//     console.log(userData);
//   } catch (error) {
//     console.log(error);
//     console.error("Failed", error);
//   }
// }

// fecthUserData(1);

// menggunakan async/await dengan map()
// async function fecthMultipleUsers(userIds) {
//   try {
//     const userPromises = userIds.map((id) => fetch(`https://api.example/users/${id}`));
//     const response = await Promise.all(userPromises);
//     const users = await Promise.all(response.map((res) => res.json()));
//     console.log(users);
//   } catch (error) {
//     console.log(`Failed!`, error);
//   }
// }

// fecthMultipleUsers([1, 2, 3, 4, 5]);

// async/await dalam loop
// async function processItems(items) {
//   for (const item of items) {
//     try {
//       await processItem(item);
//       console.log(`Item ${item} berhasil diproses`);
//     } catch (error) {
//       console.error(`Gagal memproses item ${item}:`, error);
//     }
//   }
// }

// async function processItem(item) {
//   // simulasi proses yang memakan waktu
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   if (item === 3) throw new Error("item 3 gagal diproses");
//   return item * 2;
// }

// processItems([1, 2, 3, 4, 5]);

// menangani multiple async operations
// async function fecthDataFromMultipleSources() {
//   try {
//     const [userData, postData, commentData] = await Promise.all([
//       fetch("https://api.example.com/users").then((res) => res.json()),
//       fetch("https://api.example.com/posts").then((res) => res.json()),
//       fetch("https://api.example.com/comments").then((res) => res.json()),
//     ]);

//     console.log("User Data:", userData);
//     console.log("Post Data:", postData);
//     console.log("Comment Data:", commentData);
//   } catch (error) {
//     console.error("Terjadi kesalahan:", error);
//   }
// }

// fecthDataFromMultipleSources();

// async class method
// class DataFecther {
//   constructor(baseUrl) {
//     this.baseUrl = baseUrl;
//   }

//   async fetchData(endPoint) {
//     try {
//       const response = await fetch(`${this.baseUrl}/${endPoint}`);
//       return await response.json();
//     } catch (error) {
//       console.error(`Gagal mengambil data dari ${endPoint}:`, error);
//       throw error;
//     }
//   }
// }

// const fetcher = new DataFecther("https://api.example.com");

// async function getData() {
//   try {
//     const users = await fetcher.fetchData("users");
//     const posts = await fetcher.fetchData("posts");
//     console.log("Users:", users);
//     console.log("Posts:", posts);
//   } catch (error) {
//     console.error("Terjadi kesalahan:", error);
//   }
// }

// getData();

//
