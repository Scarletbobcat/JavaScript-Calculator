let compute_button = document.getElementById("compute")
let num1_input = document.getElementById("first_num")
let num2_input = document.getElementById("second_num")
let operation = document.getElementById("operation")
let answer = document.getElementsByClassName("answer")
let operator = '+'

let num1, num2

// detects if there is a change in num1 and num2 input
num1_input.addEventListener("change", function() {
    const num1 = this.value
})
num2_input.addEventListener("change", function() {
    const num2 = this.value
})

// detects change in operator
operation.addEventListener("change", function() {
    const operator = this.value
})


// calculates two operand operation
compute_button.addEventListener("click", function() {
    if (operator === '+') {
        let result = num1 + num2
        answer.innerHTML(result)
        console.log(result)
    }
})