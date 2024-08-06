let currentInput = "";
let previousInput = "";
let currentOperator = null;
const resultDisplay = document.getElementById("result");

function updateDisplay() {
  resultDisplay.textContent = currentInput || "0";
}

function appendNumber(number) {
  if (number === "." && currentInput.includes(".")) return;
  currentInput += number;
  updateDisplay();
}

function setOperator(operator) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculateResult();
  }
  currentOperator = operator;
  previousInput = currentInput;
  currentInput = "";
}

function calculateResult() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(current)) return;
  switch (currentOperator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    default:
      return;
  }
  currentInput = result.toString();
  currentOperator = null;
  previousInput = "";
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  previousInput = "";
  currentOperator = null;
  updateDisplay();
}

document.querySelectorAll(".number-button").forEach((button) => {
  button.addEventListener("click", () => appendNumber(button.textContent));
});

document.querySelectorAll(".operator-button").forEach((button) => {
  button.addEventListener("click", () => setOperator(button.textContent));
});

document.querySelector(".equals-button").addEventListener("click", calculateResult);
document.querySelector(".clear-button").addEventListener("click", clearDisplay);

updateDisplay();
