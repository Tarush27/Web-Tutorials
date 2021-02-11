let total = 0;
let buffer = "0";
let pOperator = null;
const screen = document.querySelector(".screen");

function buttonClick(value){
    if(isNaN(parseInt(value))){
        handleSymbol(value);
    }
    else{
        handleNumber(value);
    }
    rerender();
}

function handleNumber(value){
    if(buffer === "0"){
        buffer = value;
    }
    else{
        buffer = buffer + value;
    }
}

function rerender(){
    screen.innerText = buffer;
}

function handleSymbol(value){
    switch(value){
        case 'C':
            buffer = "0";
            total = 0;
            pOperator = null;
            break;
        case "=":
            if(pOperator === null){let total = 0;
let buffer = "0";
let pOperator = null;
const screen = document.querySelector(".screen");

function buttonClick(value){
    if(isNaN(parseInt(value))){
        handleSymbol(value);
    }
    else{
        handleNumber(value);
    }
    rerender();
}

function handleNumber(value){
    if(buffer === "0"){
        buffer = value;
    }
    else{
        buffer = buffer + value;
    }
}

function rerender(){
    screen.innerText = buffer;
}

function handleSymbol(value){
    switch(value){
        case 'C':
            buffer = "0";
            total = 0;
            pOperator = null;
            break;
        case "=":
            if(pOperator === null){
                return;
            }
            flushOperation(parseInt(value));
            pOperator = null;
            buffer = " " + total;
            total = 0;
            break;
        case "←":
            if(buffer.length === 1){
                buffer = "0";
            }
            else{
                buffer = buffer.substring(0, buffer.length-1);
            }
            break;
        default:
            handleMath(value);
            break;
    }
}

function handleMath(value){
    const intBuffer = parseInt(buffer);
    if(total === 0){
        total = intBuffer;
    }
    else{
        flushOperation(intBuffer);
    }
    pOperator = value;
   
    buffer = "0";
}

function flushOperation(intBuffer){
    if(pOperator === "+"){
        total += intBuffer;
    }
    else if(pOperator === "-"){
        total -= intBuffer;
    }
    else if(pOperator === "*"){
        total *= intBuffer;
    }
    else{
        total /= intBuffer;
    }
}

document.querySelector(".buttons").addEventListener("click", function(event){
    buttonClick(event.target.innerText);
});
            }
            flushOperation(parseInt(value));
            pOperator = null;
            buffer = " " + total;
            total = 0;
            break;
        case "←":
            if(buffer.length === 1){
                buffer = "0";
            }
            else{
                buffer = buffer.substring(0, buffer.length-1);
            }
            break;
        default:
            handleMath(value);
            break;
    }
}

function handleMath(value){
    const intBuffer = parseInt(buffer);
    if(total === 0){
        total = intBuffer;
    }
    else{
        flushOperation(intBuffer);
    }
    pOperator = value;
   
    buffer = "0";
}

function flushOperation(intBuffer){
    console.log("here now");
    if(pOperator === "+"){
        total += intBuffer;
    }
    else if(pOperator === "-"){
        total -= intBuffer;
    }
    else if(pOperator === "*"){
        total *= intBuffer;
    }
    else{
        total /= intBuffer;
    }
}

document.querySelector(".buttons").addEventListener("click", function(event){
    buttonClick(event.target.innerText);
});

// let runningTotal = 0;
// let buffer = "0";
// let previousOperator;
// const screen = document.querySelector(".screen");

// function buttonClick(value) {
//   if (isNaN(parseInt(value))) {
//     handleSymbol(value);
//   } else {
//     handleNumber(value);
//   }
//   rerender();
// }

// function handleNumber(value) {
//   if (buffer === "0") {
//     buffer = value;
//   } else {
//     buffer += value;
//   }
// }

// function handleMath(value) {
//   if (buffer === "0") {
//     // do nothing
//     return;
//   }

//   const intBuffer = parseInt(buffer);
//   if (runningTotal === 0) {
//     runningTotal = intBuffer;
//   } else {
//     flushOperation(intBuffer);
//   }

//   previousOperator = value;

//   buffer = "0";
// }

// function flushOperation(intBuffer) {
//   if (previousOperator === "+") {
//     runningTotal += intBuffer;
//   } else if (previousOperator === "-") {
//     runningTotal -= intBuffer;
//   } else if (previousOperator === "×") {
//     runningTotal *= intBuffer;
//   } else {
//     runningTotal /= intBuffer;
//   }
// }

// function handleSymbol(value) {
//   switch (value) {
//     case "C":
//       buffer = "0";
//       runningTotal = 0;
//       break;
//     case "=":
//       if (previousOperator === null) {
//         // need two numbers to do math
//         return;
//       }
//       flushOperation(parseInt(buffer));
//       previousOperator = null;
//       buffer = +runningTotal;
//       runningTotal = 0;
//       break;
//     case "←":
//       if (buffer.length === 1) {
//         buffer = "0";
//       } else {
//         buffer = buffer.substring(0, buffer.length - 1);
//       }
//       break;
//     case "+":
//     case "-":
//     case "×":
//     case "÷":
//       handleMath(value);
//     }

//     function rerender() {
//       screen.innerText = buffer;
//     }
    
//     function init() {
//       document.querySelector(".buttons").addEventListener("click", function(event) {
//         buttonClick(event.target.innerText);
//       });
//     }
    
//     init();      
// }

// function rerender() {
//   screen.innerText = buffer;
// }

// function init() {
//   document.querySelector(".buttons").addEventListener("click", function(event) {
//     buttonClick(event.target.innerText);
//   });
// }

// init();