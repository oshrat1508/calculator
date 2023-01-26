let currentValueEl = document.querySelector(".currentValue");
let totalValueEl = document.querySelector(".totalValue");
let tempValueEl = document.querySelector(".tempValue");
let numbersEl = document.querySelectorAll(".number");
let operatorEl = document.querySelectorAll(".operator");
let clearEl = document.querySelector(".clear");
let allClearEl = document.querySelector(".allClear");
let equalTo = document.querySelector(".equalTo");

let currentNum = "";
let totalNum = "";
let lastOperation = "";
let result = null;
let haveDote = false;

numbersEl.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText == "." && !haveDote) {
      haveDote = true;
    } else if (e.target.innerText == "." && haveDote) {
      return;
    }
    currentNum += e.target.innerText;
    currentValueEl.innerText = currentNum;
  });
});

operatorEl.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (!currentNum) return;
    haveDote = false;
    let operatorName = e.target.innerText;
    if (currentNum && totalNum && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(currentNum);
    }

    lastOperation = operatorName;
    clearvar(operatorName);
  });
});

function clearvar(name = "") {
  totalNum += currentNum + " " + name + " ";
  totalValueEl.innerText = totalNum;
  currentValueEl.innerText = "";
  currentNum = "";
  tempValueEl.innerText = result;
}

function mathOperation() {
  if (lastOperation === "*") {
    result = parseFloat(result) * parseFloat(currentNum);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(currentNum);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(currentNum);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(currentNum);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(currentNum);
  }
}

allClearEl.addEventListener("click", clearAll);

function clearAll() {
  currentValueEl.innerText = "0";
  totalValueEl.innerText = "0";
  tempValueEl.innerText = "0";
  totalNum = '';
  result = '';
  currentNum = ''
}

clearEl.addEventListener("click", clear);
function clear(){
  currentValueEl.innerText = "0";
  currentNum = ''
}


equalTo.addEventListener("click", equalToFu);
function equalToFu(){

    mathOperation()
  currentNum = result
  totalNum = '';
  currentValueEl.innerText = result;
  totalValueEl.innerText = '';
  tempValueEl.innerText = ''; 
}

