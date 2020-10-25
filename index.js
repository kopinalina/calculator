var numbersArr = document.querySelectorAll(".number");
numbersArr.forEach(addNumberListener);

function addNumberListener(element) {
  element.addEventListener("click", addNumber);
}

function addNumber(event) {
  var button = event.target;
  var number = button.innerHTML;
  var displayElement = document.querySelector("[class='display']");
  displayElement.value += number;
}

var actionArr = document.querySelectorAll(".action");
actionArr.forEach(addActionListener);

function addActionListener(element) {
  element.addEventListener("click", addAction);
}
function addAction(event) {
  var button = event.target;
  var action = button.innerHTML;
  var displayElement = document.querySelector("[class='display']");
  displayElement.value += action;
}

var equals = document.querySelector("#equals");
equals.addEventListener("click", evaluate);
function evaluate(event) {
  var display = document.querySelector(".display");

  display.value = eval(display.value);
}

var clear = document.querySelector("#clear");
clear.addEventListener("click", reset);
function reset(event) {
  var display = document.querySelector(".display");

  display.value = "";
}