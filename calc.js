// getting reference to the form by id
const form = document.getElementById("form")

// here, we wait for the "compute" button to be pressed before anything is executed
// we pass e(event object) which allows us access to prevent the default action
form.addEventListener("submit", (e) => {
    // 
    e.preventDefault()

    // getting the values of the form
    // *notice that we must parse the number inputs because they are input as strings
    let num1 = parseInt(document.getElementById("first_num").value)
    let num2 = parseInt(document.getElementById("second_num").value)
    let operator = document.getElementById("operation").value
    let answer = document.getElementById("answer")

    // this will reset the answer cell to empty
    answer.innerHTML = "Answer: "
    let result
    
    // checking if either one is not a number
    if (isNaN(num1) || isNaN(num2)) {
        alert("First or Second number is not a number")
    } else {
        // take action depending on what the operator is
        switch(operator){
            case '+':
                result = num1+num2
                answer.innerHTML += " " + result
                break
            case '-':
                result = num1-num2
                answer.innerHTML += " " + result
                break
            case '*':
                result = num1*num2
                answer.innerHTML += " " + result
                break
            case '/':
                if (num2 != 0){
                    result = num1/num2
                    answer.innerHTML += " " + result
                } else {
                    alert("Error - cannot divide by 0")
                }
                break
        }
    }
})