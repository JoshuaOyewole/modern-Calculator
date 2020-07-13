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
        this.curOperand = this.curOperand.toString().slice(0,-1);
    }

    updateDisplay(){
        this.curOperandText.innerHTML = this.curOperand;
        this.prevOperandText.innerHTML = this.prevOperand;
    }

    appendNumber(number) {
        if(this.curOperand.includes(".") && number === ".") return  
        this.curOperand = this.curOperand.toString() + number.toString();
    }

    chooseOperation(operator) {
         if(this.curOperand === "") return

         if(this.prevOperand !== ""){
            this.calculate()
        } 
        this.operation = operator;
        this.prevOperand = this.curOperand;
        this.curOperand = "";
    }

    calculate() {
         let computation;
        let prev = parseFloat(this.prevOperand);
        let current = parseFloat(this.curOperand);
        if(isNaN(prev) || isNaN(current)) return
            switch(this.operation) {
                case '+':
                    computation = prev + current;
                    break;
                case '-':
                    computation = prev - current;
                    break;
                case '*':
                    computation = prev * current;
                    break;
                 case '/':
                     computation = prev / current;
                    break;
                default:
                    return
            }
            this.curOperand = computation;
            this.operation = undefined;
            this.prevOperand = "" 

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
        calculator.appendNumber(number.innerHTML);
        calculator.updateDisplay();
    })
})

operationBtn.forEach(operator=>{
    operator.addEventListener('click', () =>{
         
        calculator.chooseOperation(operator.innerHTML);
        calculator.updateDisplay();
    })
})

delBtn.addEventListener('click', del => {
  calculator.delete();
  calculator.updateDisplay();
})

equalBtn.addEventListener('click', (e)=>{
    calculator.calculate();
    calculator.updateDisplay();
})


allClear.addEventListener('click', clear =>{
    calculator.clear();
    calculator.updateDisplay();
})

