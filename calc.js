class Calculator {
    constructor() {
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = null
    }

    appendNumber(number) {
        if(this.currentOperand.includes('.') && number === '.') 
            return
        this.currentOperand += number.toString()
    }

    chooseOperation(operand) {
        if(this.currentOperand === '') return
        if(this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operand.toString()
        if (this.operation === '%' || this.operation === '+/-') {
            this.compute()
        }
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    updateDisplay() {
        answer.innerHTML = this.currentOperand
    }

    compute() {
        console.log(this.currentOperand)
        console.log(this.previousOperand)
        console.log(this.operation)
        let result
        let prev = parseFloat(this.previousOperand)
        let curr = parseFloat(this.currentOperand)
        if ((isNaN(prev) || isNaN(curr)) && !(this.operation === '%' || this.operation === '+/-')) {
            return
        }
        switch(this.operation) {
            case '+':
                result = prev + curr
                break
            case '-':
                result = prev - curr
                break
            case 'x':
                result = prev * curr
                break
            case '÷':
                result = prev / curr
                break
            case '%': 
                result = curr / 100
                break
            case '+/-':
                result = -curr
                break
            default:
                break
        }
        this.currentOperand = result.toString()
        this.operation = null
        this.previousOperand = ''
        this.updateDisplay()
    }
}

// getting reference to the form by id
const numberButtons = document.querySelectorAll("[data-number]")
const operationButtons = document.querySelectorAll("[data-operation]")
const equalsButton = document.querySelector("[data-equals]")
const allClearButton = document.querySelector("[data-all-clear]")
let answer = document.getElementById("answer")

const calculator = new Calculator()

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerHTML)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerHTML)
        calculator.updateDisplay
    })
})

allClearButton.addEventListener("click", button => {
    calculator.clear()
    calculator.updateDisplay()
})

equalsButton.addEventListener("click", button => {
    calculator.compute()
    calculator.updateDisplay()
})