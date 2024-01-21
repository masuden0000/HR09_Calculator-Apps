const res = document.getElementById("result");
const toast = document.getElementById("toast");
const loader = document.getElementById("preloader");

function calculate(value) {
  const calculatedValue = eval(value || null);
  if (isNaN(calculatedValue)) {
    res.value = "Can't divide 0 with 0";
    setTimeout(() => {
      res.value = "";
    }, 1300);
  } else {
    res.value = calculatedValue;
  }
}

function liveScreen(enteredValue) {
  res.value += enteredValue;
}

document.addEventListener("keydown", keyboardInputHandler);

function keyboardInputHandler(e) {
  e.preventDefault();

  if (e.key >= "0" && e.key <= "9") {
    res.value += e.key;
  }

  if (["+", "-", "*", "/"].includes(e.key)) {
    res.value += e.key;
  }

  if (e.key === ".") {
    res.value += ".";
  }

  if (e.key === "Enter") {
    calculate(res.value);
  }

  if (e.key === "Backspace") {
    res.value = res.value.slice(0, -1);
  }
}
    
window.addEventListener('load', function() {

  setTimeout(function() {
    preloader.style.opacity = '0';
    preloader.style.display = 'none';
  }, 1000);
});