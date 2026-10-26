let display = document.getElementById("display");

function press(value) {
  display.value += value;
}

function calculate() {
  try {
    let result = Function("return " + display.value)();
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}

// Keyboard support
document.addEventListener("keydown", function(event) {
  if (!isNaN(event.key) || "+-*/.".includes(event.key)) {
    press(event.key);
  } else if (event.key === "Enter") {
    calculate();
  } else if (event.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (event.key === "Escape") {
    clearDisplay();
  }
});