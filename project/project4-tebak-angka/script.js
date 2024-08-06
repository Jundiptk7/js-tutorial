// versi ori
const display = document.getElementById("computer");
const result = document.getElementById("result");
const score = document.querySelector("#score span");
let displayScore = 0;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPlayerGuess() {
  const player = document.getElementById("player").value;
  if (isNaN(player) || player < 1 || player > 10) {
    document.getElementById("alert").textContent = "anda memasukan nilai yang salah\nmasukan angka 1-10!";
    return null;
  }
  return player;
}

function checkGuess(playerGuess, correctNumber) {
  return playerGuess == correctNumber ? "benar" : "salah";
}

document.getElementById("playBtn").addEventListener("click", () => {
  let playerGuess = getPlayerGuess();
  if (playerGuess === null) return;

  let correctNumber = getRandomNumber(1, 10);
  let play = checkGuess(playerGuess, correctNumber);

  display.textContent = correctNumber;
  result.textContent = play;

  if (play === "benar") {
    displayScore += 1;
  }

  score.textContent = displayScore;

  console.log(playerGuess);
  console.log(correctNumber);
  console.log(play);
  console.log(displayScore);
});

// versi claude ai
// const display = document.getElementById("computer");
// const result = document.getElementById("result");
// const score = document.querySelector("#score span");
// const playBtn = document.getElementById("playBtn");
// const playerInput = document.getElementById("player");

// let displayScore = 0;

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function getPlayerGuess() {
//   const guess = parseInt(playerInput.value, 10);
//   if (isNaN(guess) || guess < 1 || guess > 10) {
//     alert("Masukkan angka antara 1 dan 10!");
//     return null;
//   }
//   return guess;
// }

// function checkGuess(playerGuess, correctNumber) {
//   if (playerGuess === correctNumber) {
//     return "Benar!";
//   } else if (playerGuess < correctNumber) {
//     return "Terlalu rendah!";
//   } else {
//     return "Terlalu tinggi!";
//   }
// }

// function updateUI(correctNumber, guessResult) {
//   display.textContent = correctNumber;
//   result.textContent = guessResult;
//   score.textContent = displayScore;
// }

// function resetGame() {
//   playerInput.value = "";
//   display.textContent = "";
//   result.textContent = "";
// }

// playBtn.addEventListener("click", () => {
//   const playerGuess = getPlayerGuess();
//   if (playerGuess === null) return;

//   const correctNumber = getRandomNumber(1, 10);
//   const guessResult = checkGuess(playerGuess, correctNumber);

//   if (guessResult === "Benar!") {
//     displayScore += 1;
//   }

//   updateUI(correctNumber, guessResult);
// });

// // Tambahkan event listener untuk tombol Enter
// playerInput.addEventListener("keyup", (event) => {
//   if (event.key === "Enter") {
//     playBtn.click();
//   }
// });

// // Inisialisasi game
// resetGame();
