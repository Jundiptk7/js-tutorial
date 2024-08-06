// xmlhttprequest
// membuat instance xmlhttprequest
// const xhr = new XMLHttpRequest();

// // menentukan jenis permintaan dan URL
// xhr.open("GET", "https://api.example.com/data", true);

// // mengatur callback untuk menangani response
// xhr.onload = function () {
//   if (xhr.status >= 200 && xhr.status < 300) {
//     // sukses
//     console.log("Response:", xhr.responseText);
//   } else {
//     // kesalahan
//     console.error("Request failed with status:", xhr.status);
//   }
// };

// // menangani kesalahan jaringan
// xhr.onerror = function () {
//   console.error("Network error");
// };

// // mengirim permintaan
// xhr.send();

// fetch API
// melakukan perintaan GET menggunakan fetch API
// fetch("https://api.example.com/data")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network respone was not ok" + response.statusText);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     // menggunakan data yang diperoleh
//     console.log("Data", data);
//   })
//   .catch((error) => {
//     // menangani kesalahan
//     console.error("Fetch erro", error);
//   });

// contoh mengirim data menggunakan fetch API
// data yang akan dikrim
// const data = { name: "zaid", age: 24 };

// // melakukan permintaan POST menggunakan fetch API
// fetch("https://api.example.com/data", {
//   method: "POST",
//   headers: { "content-type": "application/json" }, //mengatur tipe konten
//   body: JSON.stringify(data), // mengonversi objek data menjadi string
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok" + response.statusText);
//     }
//     return response.json(); //mengurai response menjadi json
//   })
//   .then((data) => {
//     // menggunakan data yang diperoleh
//     console.log("Response data:", data);
//   })
//   .catch((error) => {
//     //menangani kesalahan
//     console.error("Fetch error:", error);
//   });

// mengambil data cuaca menggunakan fetch API
function fetchWeatherData() {
  fetch("https://api.example.com/data")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      return response.json();
    })
    .then((data) => {
      console.log("Weather data:", data);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

fetchWeatherData();
