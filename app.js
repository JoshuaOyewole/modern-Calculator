class Calculator {
    constructor(curInput, prevInput){
        this.curInput = curInput;
        this.prevInput = prevInput;
        this.clear();
    }

    clear() {
        this.curInput = "";
        this.prevInput = "";
    } 

    delete() {

    }

    updateDisplay(){

    }

    appendNumber(number) {

    }

    chooseOperation(operation) {

    }

    calculate() {

    }
}


const allClear = document.querySelector("[data-clear]");
const equalBtn = document.querySelector("[data-equal]");
const delBtn = document.querySelector("[data-delete]");
const operationBtn = [...document.querySelectorAll("[data-operation]")];
const numberBtn = [...document.querySelectorAll("[data-number]")];
const prevInputText = document.querySelector(".current-input");
const curInputText = document.querySelector(".current-input");

const calculator = new Calculator(curInputText, prevInputText);
