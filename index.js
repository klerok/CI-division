export const divide = (a, b) => {
  return a / b;
};

if (typeof document !== "undefined") {
  const firstNumberInput = document.getElementById("firstNumber");
  const secondNumberInput = document.getElementById("secondNumber");
  const calculateButton = document.getElementById("calculateButton");
  const resultBlock = document.getElementById("result");

  const showResult = () => {
    const first = Number(firstNumberInput.value);
    const second = Number(secondNumberInput.value);

    if (Number.isNaN(first) || Number.isNaN(second)) {
      resultBlock.textContent = "Result: enter valid numbers";
      return;
    }

    if (second === 0) {
      resultBlock.textContent = "Result: division by zero is not allowed";
      return;
    }

    resultBlock.textContent = `Result: ${divide(first, second)}`;
  };

  calculateButton.addEventListener("click", showResult);
}
