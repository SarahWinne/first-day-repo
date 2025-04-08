const buttons = [
    "AC", "+/-", "%", "÷",
    "7", "8", "9", "x",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "~", "0", ".", "="
]
const operators = ["÷", "x", "-", "+", "="]
const special = ["AC", "+/-", "%"]

const topDisplay = document.getElementById("topDisplay");
const display = document.getElementById("display");

let A = 0;
let op = null;
let B = null;

function ClearAll(){
    A = 0;
    op = null;
    B = null;
}

for (let i=0; i < buttons.length; i++){
    let value = buttons[i];
    let button = document.createElement("button");
    button.innerHTML = value;

    if (operators.includes(value)){
        button.style.backgroundColor = "#FF9500"
    }

    if (special.includes(value)){
        button.style.backgroundColor = "#6e6e6e"
    }

    button.addEventListener("click", function(){
        if (operators.includes(value)){
            if (value == "="){
                if (A != null){
                    B = display.value;
                    let numA = Number(A);
                    let numB = Number(B);
                    if (op == "+"){
                        display.value = numA + numB;
                    } else if (op == "-"){
                        display.value = numA - numB;
                    } else if (op == "x"){
                        display.value = numA * numB;
                    } else if (op == "÷"){
                        display.value = numA / numB;
                    } 
                    topDisplay.value = A + op + B + "=" + display.value
                }
                ClearAll();
            } else {
                op = value;
                A = display.value;
                display.value = "";
                topDisplay.value = A + op 
            }
        } else if (special.includes(value)) {
            if (value == "AC"){
                ClearAll();
                display.value = "";
            } else if (value == "+/-") {
                display.value = Number(display.value)*(-1);
            } else if (value == "%") {
                display.value = Number(display.value)/100;
            }
        } else {
            if (value == "."){
                if (!display.value.includes(value)){
                    display.value += value;
                }
            } else if (display.value == 0){
                display.value = value;
            } else {
                display.value += value;
            }
        }
    })

    document.getElementById("btns").appendChild(button);
}