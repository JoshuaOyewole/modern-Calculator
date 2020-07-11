 class Calculator {
    constructor(curOperandText, prevOperandText){
        this.curOperandText = curOperandText;
        this.prevOperandText = prevOperandText;
        this.clear();
    }

    clear() {
        this.curOperand = "";
        this.prevOperand = "";
        this.operation = undefined;
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
const prevOperandText = document.querySelector(".previous-input");
const curOperandText = document.querySelector(".current-input");

const calculator = new Calculator(curOperandText, prevOperandText);

numberBtn.forEach(number=>{
    number.addEventListener('click', () =>{
        const numberInputed = number.innerHTML;
    })
})

operationBtn.forEach(operator=>{
    operator.addEventListener('click', () =>{
        const operatorSelected = operator.innerHTML;
    })
})

delBtn.addEventListener('click', (e)=>{
    console.log(e.target.innerHTML);
})

equalBtn.addEventListener('click', (e)=>{
    console.log(e.target.innerHTML);
})


allClear.addEventListener('click', clear =>{
    console.log(clear.target.innerHTML);

})

