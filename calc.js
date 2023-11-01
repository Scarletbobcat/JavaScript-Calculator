// class with all necessary functions of a calculator
class Calculator {
    // constructor calls the clear function
    constructor() {
        this.clear()
        this.updateDisplay()
    }

    // clear sets all operands to empty and the operation to null
    clear() {
        this.currentOperand = '0'
        this.previousOperand = ''
        this.operation = null
    }

    // adds the number pressed to the end of the currentOperand string
    // only allows one decimal to be included
    appendNumber(number) {
        if(this.currentOperand.includes('.') && number === '.') 
            return
        if(this.currentOperand === '0') {
            this.currentOperand = number.toString()
            return
        }
        this.currentOperand += number.toString()
    }

    // selects the operand 
    chooseOperation(operand) {
        // if currentOperand is empty then don't do anything
        if(this.currentOperand === '') return
        // allows us to continuously compute without having to press equal each time
        if(this.previousOperand !== '') {
            this.compute()
        }
        // saves operand into operation
        this.operation = operand.toString()
        // allows the operation to convert the currentOperand to negative or a percentage of 100
        // not fully functional yet
        if (this.operation === '%' || this.operation === '+/-') {
            this.compute()
        }
        this.previousOperand = this.currentOperand
    }

    // updates the screen of the calculator to display currentOperand
    updateDisplay() {
        if (this.currentOperand === 'Infinity') {
            answer.innerHTML = 'Error'
            return
        }
        answer.innerHTML = this.currentOperand
    }

    // does the calculation depending on the operand
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
        this.previousOperand = this.currentOperand
        this.currentOperand = result.toString()
        this.operation = null
        this.updateDisplay()
    }
}

// getting reference to all buttons as well as output screen
const numberButtons = document.querySelectorAll("[data-number]")
const operationButtons = document.querySelectorAll("[data-operation]")
const equalsButton = document.querySelector("[data-equals]")
const allClearButton = document.querySelector("[data-all-clear]")
let answer = document.getElementById("answer")

// creating new instance of Calculator object
const calculator = new Calculator()

// create addEventListener for each number button that will append the number to currentOperand and update display
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerHTML)
        calculator.updateDisplay()
    })
})

// create addEventListener for each operation button that will set the operation to the operand and update display
operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerHTML)
        calculator.updateDisplay
    })
})

// if all clear button is pressed, call clear function and update display
allClearButton.addEventListener("click", button => {
    calculator.clear()
    calculator.updateDisplay()
})

// if equals is pressed, compute the result and update display
equalsButton.addEventListener("click", button => {
    calculator.compute()
    calculator.updateDisplay()
})