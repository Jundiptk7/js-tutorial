// try {
//   let result = 10 / 0; //tidak menyebabkan error. tetapi menghasilkan infinity
//   console.log(result);
//   let obj = JSON.parse('{name: "Jundi"}'); //parsing JSON yang valid
// } catch (error) {
//   console.error("Terjadi error:", error);
// }

// melempar error dengan throw
// try {
//   let age = -5;
//   if (age < 0) {
//     throw new Error("Umur tidak bisa negatif");
//   }
// } catch (error) {
//   console.error("Terjadi error:", error.message);
// }

// menangkap error spesifik
// try {
//   //kode yg mungkin menyebabkan error
//   let result = someUndefinedFunction(); //memanggil fungsi yg tidak terdefinisi
// } catch (error) {
//   if (error instanceof ReferenceError) {
//     console.error("Terjadi ReferenceError:", error.message);
//   } else if (error instanceof TypeError) {
//     console.error("Terjadi TypeError:", error.message);
//   } else {
//     console.error("Terjadi error:", error.message);
//   }
// }
