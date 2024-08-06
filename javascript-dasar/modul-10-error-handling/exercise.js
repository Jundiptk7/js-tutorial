//1
// function divide(a, b) {
//   try {
//     if (b === 0) {
//       throw new Error("Pembagian dengan Nol tidak diperbolehkan!");
//     }
//   } catch (error) {
//     console.error(`Terjadi error: ${error}`);
//   }

//   return console.log(a / b);
// }

// divide(7, 2);

// 2
function divide(a, b) {
  if (b === 0) {
    throw new Error("Pembagian dengan Nol tidak diperbolehkan!");
  }

  return a / b;
}

const result = divide(100, 0);

try {
  console.log(result);
} catch (error) {
  console.error(`Terjadi error: ${error.message}`);
}
