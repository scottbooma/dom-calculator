const screen = document.querySelector("#screen")
const buttons = document.querySelectorAll("span")

function sum(numberArray) {
    const calculation = numberArray.map(number => +number).reduce((sum, number) => {
        return sum + number
    }, 0)
    if (isNaN(calculation)) {
        return "ERROR"
    }
    return calculation
}

function subtract(numberArray) {
    const calculation = numberArray.map(number => +number).reduce((difference, number) => {
        return difference - number
    })
    if (isNaN(calculation)) {
        return "ERROR"
    }
    return calculation
}

function multiply(numberArray) {
    const calculation = numberArray.map(number => +number).reduce((product, number) => {
        return product * number
    })
    if (isNaN(calculation)) {
        return "ERROR"
    }
    return calculation
}

function divide(numberArray) {
    const calculation = numberArray.map(number => +number).reduce((quotient, number) => {
        return quotient / number
    })
    if (isNaN(calculation) || calculation === Infinity) {
        return "ERROR"
    }
    return calculation
}

function performMath(screenContent) {
    if (screenContent.includes("+")) {
        let numberArray = screenContent.split("+")
        if (numberArray.length === 2) {
            screen.textContent = sum(numberArray)
        } else {
            return screen.textContent = "ERROR"
        }
    } else if (screenContent.includes("-")) {
        let numberArray = screenContent.split("-")
        if (numberArray.length === 2) {
            screen.textContent = subtract(numberArray)
        } else {
            return screen.textContent = "ERROR"
        }
    } else if (screenContent.includes("x")) {
        let numberArray = screenContent.split("x")
        if (numberArray.length === 2) {
            screen.textContent = multiply(numberArray)
        } else {
            return screen.textContent = "ERROR"
        }
    } else if (screenContent.includes("÷")) {
        let numberArray = screenContent.split("÷")
        if (numberArray.length === 2) {
            screen.textContent = divide(numberArray)
        } else {
            return screen.textContent = "ERROR"
        }
    } else {
        return
    }
}

buttons.forEach(button => {
    button.addEventListener("click", event => {
        if (button.id === "clear") {
            screen.textContent = ""
        } else if (button.id === "equals") {
            performMath(screen.textContent)
        } else if (screen.textContent === "ERROR") {
            return
        } else {
            screen.append(button.textContent)
        }
    })
})