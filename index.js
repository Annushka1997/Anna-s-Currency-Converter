"use strict";

// Առաջին հարցի պատասխանը

function myFirstRecursion (i) {
    if (i<=0) {
        return;
    } else {
        let str = "";
        for (let i=0; i<3; i++) {
            str += i + " ";
        }
        console.log(str);
    }
    return myFirstRecursion(i-1);
}

myFirstRecursion(10);

// Երկրորդ հարցի պատասխանը

let res = "";
let count = 10;
let counter = 0;

while (count >= 0) {
    for (let i=0; i<3; i++){
        res += i + " ";
    }
    console.log (res);
    res = "";
    count--;
}

// Html,CSS և DOM 
const currencyInput = document.getElementById('currencyInput');
const currencyOutput = document.getElementById('currencyOutput');
const inputNumber = document.getElementById('inputNumber');
const outputNumber = document.getElementById('outputNumber');
const rateEl = document.getElementById('convert');
const button = document.getElementById('btn');

function calculate() {
  const input = currencyInput.value;
  const output = currencyOutput.value;

  fetch(`https://v6.exchangerate-api.com/v6/b71ba5a6f69833fe3ac900ec/latest/${input}`)
    .then((res) => res.json())
    .then((data) => {

      const rate = data.conversion_rates[output];
      rateEl.innerText = `1 ${input} = ${rate} ${output}`;

      outputNumber.value = (inputNumber.value * rate).toFixed(2);
    });
}

currencyInput.addEventListener('change', calculate);
inputNumber.addEventListener('input', calculate);
currencyOutput.addEventListener('change', calculate);
outputNumber.addEventListener('input', calculate);
button.addEventListener('click', () => {
  const temp = currencyInput.value;
  currencyInput.value = currencyOutput.value;
  currencyOutput.value = temp;
  calculate();
});

calculate();

