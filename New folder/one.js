
    let currentInput = "0";
    let previousInput = null;
    let operator = null;

    const display = document.getElementById("display");

    function updateDisplay() {
      display.textContent = currentInput;
    }

    function appendNumber(num) {
      if (currentInput === "0") {
        currentInput = num.toString();
      } else {
        currentInput += num;
      }
      updateDisplay();
    }

    function appendDecimal() {
      if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay();
      }
    }

    function clearDisplay() {
      currentInput = "0";
      previousInput = null;
      operator = null;
      updateDisplay();
    }

    function toggleSign() {
      currentInput = (parseFloat(currentInput) * -1).toString();
      updateDisplay();
    }

    function percent() {
      currentInput = (parseFloat(currentInput) / 100).toString();
      updateDisplay();
    }

    function setOperator(op) {
      previousInput = currentInput;
      operator = op;
      currentInput = "0";
    }

    function calculate() {
      if (previousInput === null || operator === null) return;

      let result;
      const prev = parseFloat(previousInput);
      const current = parseFloat(currentInput);

      switch (operator) {
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
          result = current === 0 ? "Error" : prev / current;
          break;
      }

      currentInput = result.toString();
      operator = null;
      previousInput = null;
      updateDisplay();
    }

    updateDisplay();
  