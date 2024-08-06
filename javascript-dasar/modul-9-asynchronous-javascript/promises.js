// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const succes = false; //contoh kondisi
//     if (succes) {
//       resolve("operation was successful");
//     } else {
//       reject("operation failed");
//     }
//   }, 2000);
// });

// promise
//   .then((result) => {
//     console.log(result); //operation was successful
//   })
//   .catch((error) => {
//     console.log(error); //operation failed
//   });

//chaining promise
// function fecthData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ name: "zaid", age: 24 });
//     }, 2000);
//   });
// }

// function processData(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.processed = true;
//       resolve(data);
//     }, 1000);
//   });
// }

// fecthData()
//   .then((data) => {
//     console.log("data fetched");
//     return processData(data);
//   })
//   .then((processData) => {
//     console.log("data processed:", processData);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

// cth lain
// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const succes = false;
//       if (succes) {
//         resolve("Succes!");
//       } else {
//         reject("!Failed");
//       }
//     }, 2000);
//   });
// }

// getData()
//   .then((data) => console.log(data))
//   .catch((data) => console.log(data));

//exercise
// mengambil nama nama pengguna
// function getUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const user = { name: "jundi" };
//       resolve(user);
//     }, 1000);
//   });
// }

// getUser()
//   .then((user) => {
//     console.log(`User name: ${user.name}`);
//   })
//   .catch((error) => {
//     console.log(`Error: ${error}`);
//   });

// pending status
function getUser() {
  console.log("Status: Pending");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const succes = Math.random() > 0.5; //simulasikan kondisi awal
      if (succes) {
        const user = { name: "jundi", age: 24 };
        resolve(user);
      } else {
        reject("Failed to fecth user");
      }
    }, 1000);
  });
}

getUser()
  .then((user) => {
    console.log("Status: Fullfilled");
    console.log(`Name: ${user.name}\nAge: ${user.age}`);
  })
  .catch((error) => {
    console.log("Status: Rejected");
    console.log("Error:", error);
  });
