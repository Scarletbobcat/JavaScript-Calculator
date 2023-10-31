// getting reference to the form by id
const form = document.getElementById("inputs")
let num1 = 0, num2, operator
let buttons = document.getElementsByTagName("button")
let fNum = true

// here, we wait for the "compute" button to be pressed before anything is executed
// we pass e(event object) which allows us access to prevent the default action
form.addEventListener("submit", (e) => {
    // 
    e.preventDefault()


})

function clearScreen() {
    num1 = 0
    num2 = null
    operator = null
    answer.innerHTML = "0"
    fNum = true
}

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(e) {
        e.preventDefault()
        console.log(num1 ,"\n", num2)
        if(!isNaN(parseInt(buttons[i].innerHTML))) {
            if (answer.innerHTML === "0" || answer.innerHTML === "-0") {
                let answer = document.getElementById("answer")
                answer.innerHTML = parseInt(buttons[i].innerHTML)
            } else {
                answer.innerHTML += parseInt(buttons[i].innerHTML)
            }
        } else {

            operator = buttons[i].innerHTML

            switch (operator) {
                case 'AC':
                    clearScreen()
                    break
                case '+/-':
                    if(fNum) {
                        num1 = parseFloat(answer.innerHTML)
                        answer.innerHTML = "-" + num1
                        num1 = -num1
                    } else {
                        num2 = parseFloat(answer.innerHTML)
                        answer.innerHTML = "-" + num2
                        num2 = -num2
                    }
                    break
                case '%':
                    if(fNum) {
                        num1 = parseFloat(answer.innerHTML)/100
                        answer.innerHTML = num1
                    } else {
                        num2 = parseFloat(answer.innerHTML)/100
                        answer.innerHTML = num2
                    }
                    break
                case '&#xF7':

                case 'x':
                case '-':
                case '+':
                    num1 += parseFloat(answer.innerHTML)
                    answer.innerHTML = num1
                case '=':
                case '.':
            }
        }
    })
}
