// 1. if...else
// if (kondisi) {
//   // Kode yang akan dijalankan jika kondisi benar
// } else {
//   // Kode yang akan dijalankan jika kondisi salah
// }

// contoh
// let nilai = parseInt(prompt("masuakn nilai anda!"));

// if (nilai >= 75) {
//   alert("anda lulus!");
// } else {
//   alert("anda gagal!");
// }

// 2. switch
// switch (ekspresi) {
//   case nilai1:
//     // Kode yang dijalankan jika ekspresi == nilai1
//     break;
//   case nilai2:
//     // Kode yang dijalankan jika ekspresi == nilai2
//     break;
//   default:
//   // Kode yang dijalankan jika tidak ada nilai yang cocok
// }

// contoh
// let angka = Number(prompt("pilih angka 1-3!"));

// switch (angka) {
//   case 1:
//     alert("angka 1");
//     break;
//   case 2:
//     alert("angka 2");
//     break;
//   case 3:
//     alert("angka 3");
//     break;
//   default:
//     alert("masukan input yang valid");
//     break;
// }

// 3. for
// for (inisialisasi; kondisi; iterasi) {
//   // Kode yang akan dijalankan pada setiap iterasi
// }

// contoh
// let a = 10;
// for (let i = 0; i <= a; i++) {
//   console.log(i);
// }

// 4. while
// while (kondisi) {
//   // Kode yang akan dijalankan selama kondisi benar
// }

// contoh
// let a = 1;
// while (a <= 10) {
//   console.log(`angka ${a}`);
// a++; //untuk menghindari infinite loop
// }

// 5. d0...while //blok kode akan dijalankan setidaknya satu kali sebelum kondisi diperiksa.
// do {
//   // Kode yang akan dijalankan
// } while (kondisi);

//contoh
// let a = 1;

// do {
//   console.log(a);
//   a++;
// } while (a <= 10);

// break and continue
// break digunakan untuk menghentikan loop atau switch case sebelum kondisinya terpenuhi.
// contoh
// for (let i = 1; i <= 10; i++) {
//   if (i === 6) {
//     break;
//   }
//   console.log(i);
// }

// continue digunakan untuk melewati iterasi saat ini dan melanjutkan ke iterasi berikutnya dalam loop.
// contoh
// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     continue; //melewati angka 5
//   }
//   console.log(i);
// }
