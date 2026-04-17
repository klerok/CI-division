export const divide = (a, b) => a / b;

export const multiply = (a, b) => a * b;

export const plus = (a, b) => a + b;

export const minus = (a, b) => a - b;

if (typeof document !== "undefined") {
  const firstNumberInput = document.getElementById("firstNumber");
  const secondNumberInput = document.getElementById("secondNumber");
  const operationButtons = document.querySelectorAll(".operation-button");
  const resultBlock = document.getElementById("result");

  const showResult = (operation) => {
    const first = Number(firstNumberInput.value);
    const second = Number(secondNumberInput.value);

    if (Number.isNaN(first) || Number.isNaN(second)) {
      resultBlock.textContent = "Result: enter valid numbers";
      return;
    }

    if (operation === "divide" && second === 0) {
      resultBlock.textContent = "Result: division by zero is not allowed";
      return;
    }

    const operations = {
      divide,
      multiply,
      plus,
      minus,
    };

    const calculate = operations[operation];
    if (!calculate) {
      resultBlock.textContent = "Result: unknown operation";
      return;
    }

    resultBlock.textContent = `Result: ${calculate(first, second)}`;
  };

  operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      showResult(button.dataset.operation);
    });
  });
}
